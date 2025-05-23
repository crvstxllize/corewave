export default async function migrate(db) {
  // Таблица пользователей
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      email          TEXT    UNIQUE NOT NULL,
      password_hash  TEXT    NOT NULL,
      created_at     TEXT    DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Таблица профилей
  await db.exec(`
    CREATE TABLE IF NOT EXISTS profiles (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id        INTEGER NOT NULL,
      username       TEXT    NOT NULL,
      avatar_url     TEXT    DEFAULT '',
      registered_at  TEXT    DEFAULT CURRENT_TIMESTAMP,
      country_code   TEXT    DEFAULT 'KZ',
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
  `);
}
