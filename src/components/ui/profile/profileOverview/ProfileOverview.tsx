// src/components/ui/profile/profileOverview/ProfileOverview.tsx
'use client';

import React from 'react';
import styles from './ProfileOverview.module.css';

interface User {
  avatarUrl?: string;            // необязательный URL аватара
  username: string;
  registeredAt: string;          // ISO-строка даты
  completedCourses: number;
  flagUrl?: string;              // путь к изображению флага в public
}

interface Props {
  user: User;
}

export default function ProfileOverview({ user }: Props) {
  // Используем статическую заглушку, если avatarUrl пустой
  const placeholder = '/imgs/avatar.jpg';
  const avatarSrc = user.avatarUrl || placeholder;

  // Форматируем дату в dd.MM.yyyy
  const d = new Date(user.registeredAt);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className={styles.root}>
      <img
        src={avatarSrc}
        alt={`Avatar of ${user.username}`}
        className={styles.avatar}
      />

      <div className={styles.info}>
        <h2 className={styles.username}>
          {user.username}
          {user.flagUrl && (
            <img
              src={user.flagUrl}
              alt="User country flag"
              className={styles.flag}
            />
          )}
        </h2>

        <div className={styles.stats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Completed courses:</span>
            <span className={styles.statValue}>{user.completedCourses}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Date of registration:</span>
            <span className={styles.statValue}>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
