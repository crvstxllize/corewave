import bcrypt            from 'bcryptjs';
import config            from '../config/index.js';
import { findUserByEmail, createUser }       from '../models/userModel.js';
import { createProfile }                     from '../models/profileModel.js';
import { generateToken }                     from '../utils/token.js';
import { validateRegister, validateLogin }   from '../utils/validators.js';

export async function register(req, res, next) {
  try {
    const errMsg = validateRegister(req.body);
    if (errMsg) {
      return res.status(400).json({ success: false, message: errMsg });
    }

    const { username, email, password } = req.body;
    if (await findUserByEmail(email)) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    const hash   = await bcrypt.hash(password, 10);
    const userId = await createUser(email, hash);
    await createProfile(userId, username);

    return res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const errMsg   = validateLogin(req.body);
    if (errMsg) {
      return res.status(400).json({ success: false, message: errMsg });
    }

    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken({ userId: user.id });
    return res.json({ success: true, token, expiresIn: config.tokenExpires });
  } catch (err) {
    next(err);
  }
}
