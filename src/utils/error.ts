import { CustomError } from '../interfaces/common/CustomError';

export const errorHandling = (e: any): CustomError => {
  const result = {
    status:
      e.name === 'Bad Request'
        ? 400
        : e.name === 'Validation'
        ? 422
        : e.name === 'Unauthorized'
        ? 401
        : e.name === 'Forbidden' || e.name === 'Unauthenticated'
        ? 403
        : e.name === 'Not Found'
        ? 404
        : e.name === 'Duplicate' ||
          e.name === 'Invalid' ||
          e.name === 'Not Allowed'
        ? 409
        : 500,
    error: {
      reason: e.name,
      location: e.message
    }
  };

  return result;
};

export const generateError = (name: string, message?: string) => {
  const e: any = new Error();

  e.name = name;
  e.message = message || e.message;

  return e;
};
