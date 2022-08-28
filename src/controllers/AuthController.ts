import { inject } from 'inversify';
import { fluentProvide } from 'inversify-binding-decorators';
import {
  Body,
  Controller,
  Post,
  Response,
  Route,
  SuccessResponse,
  Tags
} from 'tsoa';
import { UserCreateDto } from '../interfaces/auth/UserCreateDto';
import { UserCreateResponseDto } from '../interfaces/auth/UserCreateResponseDto';
import { UserLoginDto } from '../interfaces/auth/UserLoginDto';
import { UserLoginResponseDto } from '../interfaces/auth/UserLoginResponseDto';
import { AuthService } from '../services/AuthService';
import { wrapSuccess } from '../utils/success';

@Route('/auth')
@Tags('Auth')
@(fluentProvide(AuthController).done())
export class AuthController extends Controller {
  constructor(@inject(AuthService) private authService: AuthService) {
    super();
  }

  @SuccessResponse(201, 'Created')
  @Post('/signup')
  public async createUser(
    @Body() userCreateDto: UserCreateDto
  ): Promise<UserCreateResponseDto> {
    try {
      const result = await this.authService.createUser(userCreateDto);

      this.setStatus(201);
      return wrapSuccess(result, '회원가입 성공', 201);
    } catch (e) {
      throw e;
    }
  }

  @SuccessResponse(200, 'Success')
  @Response(404, 'Not Found - 이메일에 해당하는 사용자 정보 없음')
  @Response(409, 'Invalid - 비밀번호가 올바르지 않음')
  @Post('/signin')
  public async loginUser(
    @Body() userLoginDto: UserLoginDto
  ): Promise<UserLoginResponseDto> {
    try {
      const result = await this.authService.loginUser(userLoginDto);

      this.setStatus(200);
      return wrapSuccess(result, '로그인 성공', 200);
    } catch (e) {
      throw e;
    }
  }
}
