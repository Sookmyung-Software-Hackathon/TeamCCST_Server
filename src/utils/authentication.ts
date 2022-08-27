import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import keys from '../config/keys';
import { generateError } from './error';
import { verifyToken } from './jwtHandler';

const extractAndDecodeToken = (req: express.Request) => {
  const err: any = generateError('Unauthorized');
  err.status = 401;

  try {
    const accessToken = req.headers.authorization?.split('Bearer ')[1];
    if (!accessToken) throw err;

    const decodedAccessToken = verifyToken(accessToken);
    if (!decodedAccessToken) throw err;

    return decodedAccessToken;
  } catch (e: any) {
    throw e;
  }
};

export const expressAuthentication = async (
  req: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> => {
  try {
    const decodedAccessToken = extractAndDecodeToken(req);

    if (securityName === 'jwt') {
      return Promise.resolve(decodedAccessToken);
    }
  } catch (e: any) {
    return Promise.reject(e);
  }
};
