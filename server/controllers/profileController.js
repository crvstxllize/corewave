import { getProfileByUserId } from '../models/profileModel.js';

export async function getProfile(req, res, next) {
  try {
    const profile = await getProfileByUserId(req.user.id);
    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    return res.json({ success: true, profile });
  } catch (err) {
    next(err);
  }
}
