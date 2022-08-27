import { provideSingleton } from '../config/provideSingleton';
import { getCustomRepository } from 'typeorm';
import { RecipeRepository } from '../repository/RecipeRepository';
import { generateError } from '../utils/error';
import { calculateAge } from '../utils/calculateAge';
import { Recipe } from '../entity/Recipe';
import { RecipeResponse } from '../interfaces/recipe/TotalRecipeResponseDto';

@provideSingleton(RecipeService)
export class RecipeService {
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
