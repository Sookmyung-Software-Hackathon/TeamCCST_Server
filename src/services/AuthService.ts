import { getCustomRepository, getManager } from 'typeorm';
import { provideSingleton } from '../config/provideSingleton';
import { UserCreateDto } from '../interfaces/auth/UserCreateDto';
import { UserLoginDto } from '../interfaces/auth/UserLoginDto';
import { UserRepository } from '../repository/UserRepository';
import { generateError } from '../utils/error';

@provideSingleton(AuthService)
export class AuthService {
  public async createUser(userCreateDto: UserCreateDto) {
    const userRepository = getCustomRepository(UserRepository);

    try {
      const existCheckUser = await userRepository.findOne({
        email: userCreateDto.email
      });

      console.log(existCheckUser);
      if (existCheckUser) throw generateError('Duplicate');

      const newUser = userRepository.create(userCreateDto);

      await userRepository.save(newUser);

      const data = {
        id: newUser.id
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
        email: userLoginDto.email
      });
      if (!user) throw generateError('Not Found');

      if (!(await user.isCorrectPassword(userLoginDto.password))) {
        throw generateError('Invalid');
      }

      const data = {
        name: user.name,
        email: user.email
      };

      return data;
    } catch (e) {
      throw e;
    }
  }
}
