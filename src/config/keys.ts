const PORT: string = process.env.PORT as string;
const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE as string;
const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD as string;
const MYSQL_USERNAME: string = process.env.MYSQL_USERNAME as string;
const DB: string = process.env.DB as string;
const JWT_SECRET: string = process.env.JWT_SECRET as string;
const ACCESS_KEY_ID: string = process.env.ACCESS_KEY_ID as string;
const SECRET_KEY: string = process.env.SECRET_KEY as string;
const BUCKET: string = process.env.BUCKET as string;
const NODE_ENV: string = (process.env.NODE_ENV as string) || 'development';

export = {
  PORT,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_USERNAME,
  DB,
  JWT_SECRET,
  ACCESS_KEY_ID,
  SECRET_KEY,
  BUCKET,
  NODE_ENV
};
