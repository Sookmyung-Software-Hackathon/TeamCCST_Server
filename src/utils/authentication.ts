import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import keys from '../config/keys';
import { generateError } from './error';
import { verifyToken } from './jwtHandler';

const extractAndDecodeToken = (req: express.Request) => {
  const err: any = generateError('Unauthorized');
  err.status = 401;

  try {
    console.log('>>>>>>>>>>>>>>>>>>', req.headers);
    const accessToken = req.headers['authorization']?.split(' ').reverse()[0];
    console.log(accessToken);
    if (!accessToken) throw err;

    const decodedAccessToken = verifyToken(accessToken);
    console.log(decodedAccessToken);
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
