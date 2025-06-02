// src/components/ui/course/header/CourseHeader.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CourseHeader.module.css';

interface Props {
  attempts: number;
  avatarUrl: string;
}

export default function CourseHeader({ attempts, avatarUrl }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Логотип */}
        <Link href="/">
          <Image
            src="/imgs/CoreWaveBlack.svg"
            alt="CoreWave"
            width={190}
            height={50}
            priority
          />
        </Link>

        {/* Спейс между логотипом и правым блоком */}
        <div className={styles.spacer} />

        {/* Правый блок: количество попыток + аватар */}
        <div className={styles.right}>
          <span className={styles.attempts}>
            Количество попыток: <strong>{attempts}</strong>
          </span>
          <Image
            src={avatarUrl}
            alt="User avatar"
            width={55}
            height={55}
            className={styles.avatar}
          />
        </div>
      </div>
    </header>
  );
}
