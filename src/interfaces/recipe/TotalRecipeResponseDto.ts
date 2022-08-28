import { SuccessResponse } from '../common/SuccessResponse';
export interface RecipeResponse {
  id: number;
  imageURL: string;
  title: string;
  writerInfo: string;
}

export interface TotalRecipeResponseDto extends SuccessResponse {
  data: RecipeResponse[];
}
