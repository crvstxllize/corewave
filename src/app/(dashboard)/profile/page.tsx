// src/app/(dashboard)/profile/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import DashboardHeader from '@/components/layouts/header/dashboard/header';
import Breadcrumbs     from '@/components/ui/profile/breadcrumbs/Breadcrumbs';
import ProfileOverview from '@/components/ui/profile/profileOverview/ProfileOverview';
import ProfileEditForm from '@/components/ui/profile/profileEditForm/ProfileEditForm';
import ProgressSection, {
  LanguageProgress
} from '@/components/ui/profile/progressSection/ProgressSection';
import SeparatorLine   from '@/components/ui/profile/separatorLine/SeparatorLine';
import Footer          from '@/components/layouts/footer/dashboard/footer';

import styles from './profile.module.css';
import { courseLessons, Chapter } from '@/data/dashboard/Course/lessonConfig';

interface UserProfile {
  userId: number;
  email: string;
  username: string;
  registeredAt: string;
  country: string;
}

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  // Массив с прогрессом по языкам текущего пользователя
  const [languages, setLanguages] = useState<LanguageProgress[]>([]);

  // Считаем, что currentUserId может меняться после фетча
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  // ─────────────────────────────────────────────────────────────────
  // Эффект #1: фетчим профиль и сохраняем userId
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    fetch('http://localhost:5000/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) {
          if (res.status === 401) {
            router.push('/login');
            return;
          }
          throw new Error('Failed to fetch profile');
        }
        return res.json();
      })
      .then(data => {
        if (!data.success) {
          throw new Error(data.message || 'Failed to load profile');
        }
        // Сохраняем профиль в local state
        setProfile(data.profile);
        // Сохраняем userId в localStorage и в состояние
        const idString = String(data.profile.userId);
        localStorage.setItem('currentUserId', idString);
        setCurrentUserId(idString);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [router]);
  // ─────────────────────────────────────────────────────────────────


  // ─────────────────────────────────────────────────────────────────
  // Эффект #2: когда currentUserId появился (или изменился), пересчитываем прогресс языков
  useEffect(() => {
    if (!currentUserId) {
      // Пока userId нет (еще не фетчнули профиль), не вычисляем прогресс
      return;
    }

    const langs: LanguageProgress[] = [];

    // Для каждого языка (ключ langKey) в courseLessons
    Object.entries(courseLessons).forEach(([langKey, chapters]) => {
      let total = 0;
      let doneCount = 0;

      chapters.forEach((chapter: Chapter) => {
        chapter.lessons.forEach(lesson => {
          total += 1;
          // Читаем ключ вида user_<userId>_completed_<lessonSlug>
          const doneKey = `user_${currentUserId}_completed_${lesson.slug}`;
          if (localStorage.getItem(doneKey) === 'true') {
            doneCount += 1;
          }
        });
      });

      const progress = total > 0 ? Math.round((doneCount / total) * 100) : 0;

      // Подбираем нужный файл-логотип из public/language-logos
      let filename = '';
      switch (langKey) {
        case 'python':
          filename = 'Python.svg';
          break;
        case 'javascript':
          filename = 'JavaScript.svg';
          break;
        case 'csharp':
          filename = 'Csharp.svg';
          break;
        case 'java':
          filename = 'Javadark.svg';
          break;
        case 'sql':
          filename = 'Sql.svg';
          break;
        default:
          filename = 'default.svg';
      }

      langs.push({
        name: langKey.charAt(0).toUpperCase() + langKey.slice(1),
        iconUrl: `/language-logos/${filename}`,
        progress,
      });
    });

    setLanguages(langs);
  }, [currentUserId]);
  // ─────────────────────────────────────────────────────────────────


  if (loading) {
    return <div className={styles.loading}>Loading profile...</div>;
  }
  if (error || !profile) {
    return <div className={styles.error}>Error: {error || 'Unknown error'}</div>;
  }

  return (
    <div className={styles.pageRoot}>
      <DashboardHeader />

      <div className={styles.breadcrumbs}>
        <Breadcrumbs mapping={{ profile: 'Profile' }} />
      </div>

      <div className={styles.content}>
        {/* Левая колонка */}
        <div className={styles.left}>
          <div className={styles.overviewWrapper}>
            <ProfileOverview
              user={{
                username: profile.username,
                registeredAt: profile.registeredAt,
                completedCourses: 0,
                flagUrl: `/icons/${profile.country.toLowerCase()}.png`,
              }}
            />
          </div>
          <div className={styles.changeWrapper}>
            <ProfileEditForm />
          </div>
        </div>

        <SeparatorLine />

        {/* Правая колонка – прогресс */}
        <div className={styles.right}>
          <ProgressSection languages={languages} />
        </div>
      </div>

      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}
