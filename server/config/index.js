import dotenv from 'dotenv';
dotenv.config();

export default {
  port:     process.env.PORT || 5000,
  jwtSecret:    'test',
  tokenExpires: process.env.TOKEN_EXPIRES_IN || '1h',
  dbFile:       process.env.DB_FILE    || './db/data.db',
};
