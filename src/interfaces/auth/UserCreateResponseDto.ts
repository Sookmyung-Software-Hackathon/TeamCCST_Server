import { SuccessResponse } from '../common/SuccessResponse';

export interface UserCreateResponseDto extends SuccessResponse {
  data: {
    id: number;
    name: string;
    accessToken: string;
  };
}
