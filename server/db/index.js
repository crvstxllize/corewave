import sqlite3 from 'sqlite3';
import { open }  from 'sqlite';
import migrate  from './migrations/index.js';
import config   from '../config/index.js';

export async function initDb() {
  const db = await open({
    filename: config.dbFile,
    driver:   sqlite3.Database,
  });
  await migrate(db);
  return db;
}

export async function openDb() {
  return open({
    filename: config.dbFile,
    driver:   sqlite3.Database,
  });
}
