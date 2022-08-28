import { provideSingleton } from '../config/provideSingleton';
import { getCustomRepository, getManager } from 'typeorm';
import { RecipeRepository } from '../repository/RecipeRepository';
import { generateError } from '../utils/error';
import { calculateAge } from '../utils/calculateAge';
import { Recipe } from '../entity/Recipe';
import { RecipeResponse } from '../interfaces/recipe/TotalRecipeResponseDto';
import { DecodedJWT } from '../interfaces/common/Objects';
import keys from '../config/keys';
import storage from '../config/s3Config';
import { ImageRepository } from '../repository/ImageRepository';
import { Image } from '../entity/Image';
import { UserRepository } from '../repository/UserRepository';
import { RecipeResponseDto } from '../interfaces/recipe/RecipeResponseDto';

@provideSingleton(RecipeService)
export class RecipeService {
  public async createRecipe(
    food: string,
    content: string,
    ingredient: string,
    decodedJWT: DecodedJWT,
    file?: Express.Multer.File
  ) {
    const userRepository = getCustomRepository(UserRepository);
    const imageRepository = getCustomRepository(ImageRepository);

    let result, newImage, newRecipe;

    try {
      const user = await userRepository.findOne({
        id: decodedJWT.id
      });
      if (!user) throw generateError('Not Found');

      if (file) {
        const params: {
          Bucket: string;
          Key: string;
          Body: Buffer;
          ContentType: string;
        } = {
          Bucket: keys.BUCKET,
          Key: file.originalname,
          Body: file.buffer,
          ContentType: file.mimetype
        };

        result = await storage.upload(params).promise();
      }

      const dummy = await imageRepository.findOne({
        url: keys.DEFAULT_IMAGE_URL
      });

      await getManager().transaction(async manager => {
        if (file) {
          newImage = manager.create(Image, {
            url: result.Location
          });
          await manager.save<Image>(newImage);
        }

        newRecipe = manager.create(Recipe, {
          image: newImage ? newImage : dummy,
          food,
          content,
          ingredient,
          user
        });
        await manager.save<Recipe>(newRecipe);
      });

      const data = {
        id: newRecipe.id
      };

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async getTotalRecipe() {
    const recipeRepository = getCustomRepository(RecipeRepository);

    try {
      const totalRecipe = await recipeRepository.find({
        relations: ['image', 'user']
      });

      const data: RecipeResponse[] = await Promise.all(
        totalRecipe.map(async (recipe: Recipe) => {
          const age: number = calculateAge(recipe.user.year);
          const title: string = `${recipe.user.name} ${recipe.user.nickname}의 ${recipe.food}`;
          const writerInfo: string = `${recipe.user.name} ${recipe.user.nickname} | ${age}세 청춘`;
          return {
            imageURL: recipe.image.url,
            title: title,
            writerInfo: writerInfo
          };
        })
      );

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async getRecipeById(recipeId: number) {
    const recipeRepository = getCustomRepository(RecipeRepository);

    try {
      const recipe = await recipeRepository.findOne(recipeId, {
        relations: ['image', 'user']
      });
      if (!recipe) throw generateError('Not Found');

      const data: RecipeResponseDto = {
        imageURL: recipe.image.url,
        writer: `${recipe.user.name} ${recipe.user.nickname}`,
        food: recipe.food,
        ingredient: recipe.ingredient,
        content: recipe.content
      };

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
