import 'reflect-metadata';
import './config/env';
import './config/keys';
import express from 'express';
import cors from 'cors';
import { RegisterRoutes } from './routes/routes';
import { ValidateError } from 'tsoa';
import { CustomError } from './interfaces/common/CustomError';
import { errorHandling } from './utils/error';
import keys from './config/keys';

const app = express();

const corsOrigin =
  keys.NODE_ENV === 'production'
    ? [keys.FRONT_URL]
    : ['http://localhost:3000', keys.FRONT_URL];

app.use(express.json({ limit: '100mb' }));

app.use(express.urlencoded({ limit: '100mb', extended: false }));

// app.use(
//   cors({
//     origin: corsOrigin,
//     credentials: true,
//     exposedHeaders: ['authorization']
//   })
// );
app.use(cors());

try {
  RegisterRoutes(app);
} catch (e) {
  express.request.next?.(e);
}

app.use(function errorHandler(
  err: any,
  req: express.Request,
  res: express.Response | any,
  next: express.NextFunction
) {
  let reason;
  let location;
  let status: number;

  if (err instanceof ValidateError) {
    const { status: localStatus, name, fields } = err;

    reason = name;
    const fieldKey = Object.keys(fields)[0];

    location = fields[fieldKey].message;
    status = localStatus;
  } else {
    const customError: CustomError = errorHandling(err);
    const { status: localStatus, error } = customError;

    reason = error.reason;
    location = error.location;
    status = localStatus;
  }

  if (status >= 500) {
    res.status(status).json({
      status,
      success: false,
      message: 'Internal Server Error'
    });
  } else {
    res.status(status).json({
      status,
      success: false,
      message: reason
    });
  }

  next();
});

export = app;
