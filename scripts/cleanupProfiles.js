// scripts/cleanupProfiles.js
import { fileURLToPath } from 'url';
import path from 'path';
import sqlite3 from 'sqlite3';
const { Database } = sqlite3.verbose();

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// Путь до вашей БД
const dbPath = path.resolve(__dirname, '../server/db/data.db');
const db = new Database(dbPath);

// Читаем аргументы из командной строки (node cleanupProfiles.js test test2 5)
const rawArgs = process.argv.slice(2);
if (rawArgs.length === 0) {
  console.log('Usage: node scripts/cleanupProfiles.js <username_or_id> [username_or_id] ...');
  process.exit(1);
}

// Будем считать, что чисто числовые аргументы — это id, всё остальное — username
const conditions = rawArgs.map(_ => isNaN(_) ? 'username = ?' : 'id = ?').join(' OR ');
const sql = `DELETE FROM profiles WHERE ${conditions}`;

// Выполняем удаление
db.run(sql, rawArgs, function(err) {
  if (err) {
    console.error('Ошибка при удалении:', err);
  } else {
    console.log(`✅ Удалено записей: ${this.changes}`);
    // Опционально: уплотнить файл
    db.run('VACUUM;', vacErr => {
      if (vacErr) console.error('VACUUM error:', vacErr);
      db.close();
    });
  }
});
