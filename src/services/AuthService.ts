import { getCustomRepository, getManager } from 'typeorm';
import { provideSingleton } from '../config/provideSingleton';
import { UserCreateDto } from '../interfaces/auth/UserCreateDto';
import { UserLoginDto } from '../interfaces/auth/UserLoginDto';
import { UserRepository } from '../repository/UserRepository';
import { generateError } from '../utils/error';
import { generateAccessJWT } from '../utils/jwtHandler';

@provideSingleton(AuthService)
export class AuthService {
  public async createUser(userCreateDto: UserCreateDto) {
    const userRepository = getCustomRepository(UserRepository);

    try {
      const newUser = userRepository.create(userCreateDto);

      await userRepository.save(newUser);
      const accessToken = await generateAccessJWT(
        newUser.id,
        userCreateDto.name
      );
      const data = {
        id: newUser.id,
        name: newUser.name,
        accessToken
      };

      return data;
    } catch (e) {
      throw e;
    }
  }

  public async loginUser(userLoginDto: UserLoginDto) {
    const userRepository = getCustomRepository(UserRepository);

    try {
      const user = await userRepository.findOne({
        name: userLoginDto.name
      });
      if (!user) throw generateError('Not Found');

      if (!(await user.isCorrectPassword(userLoginDto.password))) {
        throw generateError('Invalid');
      }

      const accessToken = await generateAccessJWT(user.id, user.name);

      const data = {
        id: user.id,
        name: user.name,
        accessToken
      };

      return data;
    } catch (e) {
      throw e;
    }
  }
}
