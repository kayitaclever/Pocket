import { registerAs } from '@nestjs/config';
import 'dotenv/config';
require('dotenv').config();

export default registerAs('app', () => ({
  nodeEnv: process.env.APP_ENV,
  name: process.env.APP_NAME,
  port: parseInt(process.env.APP_PORT, 10) || 9876,
}));
