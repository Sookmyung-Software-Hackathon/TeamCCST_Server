import { SuccessResponse } from '../common/SuccessResponse';
export interface RecipeResponseDto {
  imageURL: string;
  writer: string;
  food: string;
  ingredient: string;
  content: string;
}
export interface EachRecipeResponseDto extends SuccessResponse {
  data: RecipeResponseDto;
}
