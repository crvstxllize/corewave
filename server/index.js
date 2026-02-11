import 'dotenv/config';
import express      from 'express';
import config       from './config/index.js';
import { initDb }   from './db/index.js';
import authRoutes   from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import authMiddleware from './middleware/auth.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';

const app = express();
app.use(express.json());
const corsOrigins = (process.env.CORS_ORIGINS || 'http://localhost:3000')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({
  origin: corsOrigins,
  credentials: true
}));

app.use('/auth',    authRoutes);
app.use('/profile', authMiddleware, profileRoutes);

// глобальный обработчик ошибок
app.use(errorHandler);

async function startServer() {
  await initDb();
  console.log('SQLite initialized and migrations applied');

  app.listen(config.port, () => {
    console.log(`🔗 Backend running on http://localhost:${config.port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start backend', err);
  process.exit(1);
});
