import jwt    from 'jsonwebtoken';
import config from '../config/index.js';

export function generateToken(payload) {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.tokenExpires
  });
}

export function verifyToken(token) {
  return jwt.verify(token, config.jwtSecret);
}
