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
import { UserCreateDto } from '../interfaces/auth/UserCreateDto';
import { UserLoginDto } from '../interfaces/auth/UserLoginDto';
import { UserLoginResponseDto } from '../interfaces/auth/UserLoginResponseDto';
import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { TotalRecipeResponseDto } from '../interfaces/recipe/TotalRecipeResponseDto';
import { RecipeService } from '../services/RecipeService';
import { wrapSuccess } from '../utils/success';

@Route('/recipe')
@Tags('Recipe')
@fluentProvide(RecipeController).done()
export class RecipeController extends Controller {
  constructor(@inject(RecipeService) private recipeService: RecipeService) {
    super();
  }

  // 전체조회 - 에러처리 멀 할지
  @SuccessResponse(200, 'Success')
  @Get('/')
  public async getRecipe() {
    try {
      const result = await this.recipeService.getTotalRecipe();
      this.setStatus(200);
      return wrapSuccess(result, '요리법 전체 조회 성공', 200);
    } catch (e) {
      throw e;
    }
  }
}

