import { openDb } from '../db/index.js';

export async function findUserByEmail(email) {
  const db = await openDb();
  return db.get('SELECT * FROM users WHERE email = ?', email);
}

export async function createUser(email, passwordHash) {
  const db     = await openDb();
  const result = await db.run(
    'INSERT INTO users (email, password_hash) VALUES (?, ?)',
    email, passwordHash
  );
  return result.lastID;
}
