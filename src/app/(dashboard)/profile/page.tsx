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
// Правильный импорт из services, а не из data/dashboard
import { getLanguageProgress, mockLanguages } from '@/data/dashboard/languageService';


interface UserProfile {
  userId: number;
  email: string;
  username: string;
  registeredAt: string;
  country: string;
  // если сервер вернёт completedCourses, можно его сюда прописать
  // completedCourses?: number;
}

export default function ProfilePage() {
  const router = useRouter();

  // профиль
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  // сразу инициализируем языки моками, чтобы не было "мигания" пустоты
  const [languages, setLanguages] = useState<LanguageProgress[]>(mockLanguages);

  useEffect(() => {
    // 1) проверяем, есть ли токен
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // 2) подгружаем прогресс языков (сейчас мок)
    getLanguageProgress()
      .then(setLanguages)
      .catch((e) => console.error('Ошибка загрузки языков:', e));

    // 3) фетчим данные профиля
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
        setProfile(data.profile);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return <div className={styles.loading}>Loading profile...</div>;
  }
  if (error || !profile) {
    return <div className={styles.error}>Error: {error || 'Unknown error'}</div>;
  }

  return (
    <div className={styles.pageRoot}>
      {/* Header */}
      <DashboardHeader />

      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Breadcrumbs mapping={{ profile: 'Profile' }} />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.overviewWrapper}>
            <ProfileOverview
              user={{
                username: profile.username,
                registeredAt: profile.registeredAt,
                completedCourses: 0, // позже можно взять из profile.completedCourses
                flagUrl: `/icons/${profile.country.toLowerCase()}.png`,
              }}
            />
          </div>
          <div className={styles.changeWrapper}>
            <ProfileEditForm />
          </div>
        </div>

        <SeparatorLine />

        <div className={styles.right}>
          {/* Передаём прогресс языков */}
          <ProgressSection languages={languages} />
        </div>
      </div>

      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}
