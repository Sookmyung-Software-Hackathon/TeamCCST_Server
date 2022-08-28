import { inject } from 'inversify';
import { fluentProvide } from 'inversify-binding-decorators';
import {
  Controller,
  FormField,
  Get,
  Path,
  Post,
  Request,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
  UploadedFile
} from 'tsoa';
import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { EachRecipeResponseDto } from '../interfaces/recipe/RecipeResponseDto';
import { TotalRecipeResponseDto } from '../interfaces/recipe/TotalRecipeResponseDto';
import { RecipeService } from '../services/RecipeService';
import { wrapSuccess } from '../utils/success';

@Route('/recipe')
@Tags('Recipe')
@(fluentProvide(RecipeController).done())
export class RecipeController extends Controller {
  constructor(@inject(RecipeService) private recipeService: RecipeService) {
    super();
  }

  @Security('jwt')
  @SuccessResponse(201, 'Created')
  @Response(404, 'Not Found - 이름에 해당하는 사용자 정보 없음')
  @Post('/')
  public async createRecipe(
    @FormField() food: string,
    @FormField() content: string,
    @FormField() ingredient: string,
    @Request() req: any,
    @UploadedFile() file?: Express.Multer.File
  ): Promise<PostBaseResponseDto> {
    try {
      const result = await this.recipeService.createRecipe(
        food,
        content,
        ingredient,
        req.user,
        file
      );

      this.setStatus(201);
      return wrapSuccess(result, '요리법 작성 성공', 201);
    } catch (e) {
      throw e;
    }
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
