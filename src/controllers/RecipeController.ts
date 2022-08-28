import { inject } from 'inversify';
import { fluentProvide } from 'inversify-binding-decorators';
import {
  Body,
  Controller,
  Delete,
  Deprecated,
  Get,
  Patch,
  Path,
  Post,
  Put,
  Query,
  Request,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags
} from 'tsoa';
import { TotalRecipeResponseDto } from '../interfaces/recipe/TotalRecipeResponseDto';
import { RecipeService } from '../services/RecipeService';
import { wrapSuccess } from '../utils/success';
import { EachRecipeResponseDto, RecipeResponseDto } from '../interfaces/recipe/RecipeResponseDto';
import { param } from '..';

@Route('/recipe')
@Tags('Recipe')
@fluentProvide(RecipeController).done()
export class RecipeController extends Controller {
  constructor(@inject(RecipeService) private recipeService: RecipeService) {
    super();
  }

  @SuccessResponse(200, 'Success')
  @Get('/')
  public async getRecipe(): Promise<TotalRecipeResponseDto> {
    try {
      const result = await this.recipeService.getTotalRecipe();

      this.setStatus(200);
      return wrapSuccess(result, '요리법 전체 조회 성공', 200);
    } catch (e) {
      throw e;
    }
  }

  @SuccessResponse(200, 'Success')
  @Get('/{recipeId}')
  public async getRecipeById(
    @Path() recipeId: number
    ): Promise<EachRecipeResponseDto> {
    try {
      const result = await this.recipeService.getRecipeById(recipeId);
      this.setStatus(200);
      return wrapSuccess(result, '요리법 상세 조회 성공', 200);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
