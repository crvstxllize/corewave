import { openDb } from '../db/index.js';

export async function createProfile(userId, username) {
  const db = await openDb();
  await db.run(
    'INSERT INTO profiles (user_id, username) VALUES (?, ?)',
    userId, username
  );
}

export async function getProfileByUserId(userId) {
  const db = await openDb();
  return db.get(`
    SELECT
      u.id            AS userId,
      u.email         AS email,
      p.username      AS username,
      p.avatar_url    AS avatarUrl,
      p.registered_at AS registeredAt,
      p.country_code  AS country
    FROM users u
    JOIN profiles p ON p.user_id = u.id
    WHERE u.id = ?
  `, userId);
}
