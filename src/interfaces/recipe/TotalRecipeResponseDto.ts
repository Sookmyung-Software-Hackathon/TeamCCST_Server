import { SuccessResponse } from '../common/SuccessResponse';
export interface RecipeResponse {
  imageURL: string;
  title: string;
  writerInfo: string;
}

export interface TotalRecipeResponseDto extends SuccessResponse {
  data: RecipeResponse[];
}
