import { SuccessResponse } from './SuccessResponse';

export interface PostBaseResponseDto extends SuccessResponse {
  data: {
    id: number;
  };
}
