import { SuccessResponse } from '../common/SuccessResponse';

export interface UserLoginResponseDto extends SuccessResponse {
  data: {
    id: number;
    name: string;
    accessToken: string;
  };
}
