// import

import { provideSingleton } from "../config/provideSingleton";
import { getCustomRepository } from 'typeorm';
import { TotalRecipeResponseDto } from "../interfaces/recipe/TotalRecipeResponseDto";
import { RecipeRepository } from "../repository/RecipeRepository";
import { UserRepository } from "../repository/UserRepository";
import { ImageRepository } from "../repository/ImageRepository";
import { generateError } from "../utils/error";

@provideSingleton(RecipeService)
export class RecipeService {
  public async getTotalRecipe() {
    const recipeRepository = getCustomRepository(RecipeRepository);
    const userRepository = getCustomRepository(UserRepository);
    const imageRepository = getCustomRepository(ImageRepository)
    try {
      const totalRecipe = await recipeRepository.find({
        relations: ['image', 'user']
      });

      console.log(totalRecipe)
      // const data = await Promise.all(
      //   totalRecipe.map(async (recipe: TotalRecipeResponseDto) => {
      //     const title: string = `${} ${}의 ${recipe.title}`
      //     const writerInfo: string = `${} ${} | ${}세 청춘`
      //     const result = {
      //       imageURL: recipe.imageURL,
      //       title: title,
      //       writerInfo: writerInfo
      //     }
      //   });
      // );
    } catch(e) {
      console.log(e);
      throw e;
    }
  }

  // public async getRecipeById(recipeId: Number) {
  //   const recipeRepository = getCustomRepository(RecipeRepository);

  //   try {
  //     const recipe = await recipeRepository.findOne({
  //       id: recipeId
  //     });
  //     if (!recipe) throw generateError('Not Found');

  //     const data = {recipe}

  //     return data
  //   } catch(e) {
  //     throw e;
  //   }
  // }
}