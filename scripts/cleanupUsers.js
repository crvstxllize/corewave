// scripts/cleanupUsers.js
import { fileURLToPath } from 'url';
import path from 'path';
import sqlite3 from 'sqlite3';

// эмулируем __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../server/db/data.db');
const db     = new sqlite3.Database(dbPath);

// берём аргументы из командной строки:
// node scripts/cleanupUsers.js test@3 test@abc.com 7
const rawArgs = process.argv.slice(2);
if (rawArgs.length === 0) {
  console.log('Usage: node scripts/cleanupUsers.js <email_or_id> [...]');
  process.exit(1);
}

// чисто числовые — считаем id, остальное — email
const conditions = rawArgs
  .map(arg => isNaN(arg) ? 'email = ?' : 'id = ?')
  .join(' OR ');
const sql = `DELETE FROM users WHERE ${conditions}`;

db.run(sql, rawArgs, function(err) {
  if (err) {
    console.error('Ошибка при удалении пользователей:', err);
  } else {
    console.log(`✅ Удалено строк из users: ${this.changes}`);
    // освобождаем пространство в файле БД
    db.run('VACUUM;', vacErr => {
      if (vacErr) console.error('Ошибка VACUUM:', vacErr);
      db.close();
    });
  }
});
