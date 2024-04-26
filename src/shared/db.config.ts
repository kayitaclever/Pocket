import { registerAs } from '@nestjs/config';
import 'dotenv/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default registerAs('db', () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}));
