import path from 'path';
import keys from './keys';

const config: any = {
  type: 'mysql',
  host: keys.DB,
  port: 3306,
  username: keys.MYSQL_USERNAME,
  password: keys.MYSQL_PASSWORD,
  database: keys.MYSQL_DATABASE,
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, '/../entity/**/*.{js,ts}')],
  migrations: [path.join(__dirname, '/../migration/**/*.{js,ts}')],
  cli: {
    entitiesDir: path.join(__dirname, '/../entity'),
    mirationsDir: path.join(__dirname, '/../migration')
  }
};

export = config;
