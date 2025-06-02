// // server/routes/courses.js
// import express from 'express';
// // импортируй свой слой работы с БД
// import db from '../db';

// const router = express.Router();

// // GET /api/courses/:slug
// router.get('/:slug', async (req, res) => {
//   const { slug } = req.params;
//   const userId = req.user.id; // Assuming ты уже написал middleware, который подставляет req.user

//   try {
//     // Вытаскиваешь из БД курс по slug
//     const course = await db.getCourseBySlug(slug);
//     if (!course) return res.status(404).json({ success: false, message: 'Course not found' });

//     // Вытаскиваешь прогресс и попытки пользователя
//     const progress = await db.getUserCourseProgress(userId, course.id);
//     const attempts = await db.getUserCourseAttempts(userId, course.id);

//     res.json({
//       success: true,
//       data: {
//         title: course.title,
//         iconUrl: course.icon_url,
//         percent: progress,
//         attempts,
//         chapters: course.chapters, // форматируй под свой формат
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// export default router;
