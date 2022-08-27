const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE as string;
const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD as string;
const MYSQL_USERNAME: string = process.env.MYSQL_USERNAME as string;
const DB: string = process.env.DB as string;
const JWT_SECRET: string = process.env.JWT_SECRET as string;
const NODE_ENV: string = (process.env.NODE_ENV as string) || 'development';

export = {
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_USERNAME,
  DB,
  JWT_SECRET,
  NODE_ENV
};
