import express      from 'express';
import bodyParser   from 'body-parser';
import config       from './config/index.js';
import { initDb }   from './db/index.js';
import authRoutes   from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import authMiddleware from './middleware/auth.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());

(async () => {
  await initDb();
})();

app.use('/auth',    authRoutes);
app.use('/profile', authMiddleware, profileRoutes);

// глобальный обработчик ошибок
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`🔗 Backend running on http://localhost:${config.port}`);
});
