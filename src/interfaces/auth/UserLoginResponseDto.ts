import { SuccessResponse } from '../common/SuccessResponse';

export interface UserLoginResponseDto extends SuccessResponse {
  data: {
    name: string;
    email: string;
  };
}
