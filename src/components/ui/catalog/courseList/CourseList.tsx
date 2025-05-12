// src/components/ui/catalog/courseList/CourseList.tsx

import { useEffect, useState, useRef } from 'react';
import CourseCard, { CourseCardData } from '../courseCard/CourseCard';
import styles from './CourseList.module.css';

interface CourseListProps {
  courses: CourseCardData[];
}

export default function CourseList({ courses }: CourseListProps) {
  // Массив булевых – показывать ли карточку i
  const [revealed, setRevealed] = useState<boolean[]>(
    () => Array(courses.length).fill(false)
  );

  // Флаг первой загрузки
  const firstRender = useRef(true);

  useEffect(() => {
    // Сбросим видимость (при таб-чейндже и при монтировании)
    setRevealed(Array(courses.length).fill(false));

    const timers: number[] = [];

    if (firstRender.current) {
      // === Первая загрузка страницы ===
      firstRender.current = false;

      courses.forEach((_, idx) => {
        const t = window.setTimeout(() => {
          setRevealed((prev) => {
            const copy = [...prev];
            copy[idx] = true; // показываем карточку idx
            return copy;
          });
        }, 4000 + idx * 900); // 4s + 0.9s * idx
        timers.push(t);
      });
    } else {
      // === Смена таба ===
      // сразу показываем ВСЕ карточки без анимации
      setRevealed(Array(courses.length).fill(true));
    }

    // Очистка таймеров при анмаунте / таб-чейндже
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [courses]);

  return (
    <div className={styles.list}>
      {courses.map((course, i) => (
        <CourseCard
          key={course.id}
          {...course}
          revealed={revealed[i]}
        />
      ))}
    </div>
  );
}
