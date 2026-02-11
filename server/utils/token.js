import jwt    from 'jsonwebtoken';
import config from '../config/index.js';

export function generateToken(payload) {
  if (!config.jwtSecret) {
    throw new Error('JWT_SECRET is not set. Check server/.env');
  }
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.tokenExpires
  });
}

export function verifyToken(token) {
  if (!config.jwtSecret) {
    throw new Error('JWT_SECRET is not set. Check server/.env');
  }
  return jwt.verify(token, config.jwtSecret);
}
