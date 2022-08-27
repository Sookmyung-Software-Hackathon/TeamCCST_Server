import jwt from 'jsonwebtoken';
import keys from '../config/keys';
import { DecodedJWT } from '../interfaces/common/Objects';

export const generateAccessJWT = (
  id: number,
  name: string
): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        id,
        name
      },
      keys.JWT_SECRET,
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

export const verifyToken = (token: any) => {
  try {
    const decoded = jwt.verify(token, keys.JWT_SECRET);

    const result: DecodedJWT = decoded as DecodedJWT;

    return result;
  } catch (e) {
    return undefined;
  }
};
