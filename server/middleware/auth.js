import { verifyToken } from '../utils/token.js';

export default function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = header.replace(/^Bearer\s+/, '');
  try {
    const payload = verifyToken(token);
    req.user = { id: payload.userId };
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}
