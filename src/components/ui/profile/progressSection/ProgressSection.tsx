// src/components/ui/profile/progressSection/ProgressSection.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './ProgressSection.module.css';

export interface LanguageProgress {
  name: string;
  iconUrl: string;
  progress: number; // от 0 до 100
}

interface Props {
  languages: LanguageProgress[];
}

export default function ProgressSection({ languages }: Props) {
  const router = useRouter();

  // Преобразуем имя языка в slug для URL
  const toSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[#\+]/g, (m) => (m === '#' ? 'sharp' : 'plus'))
      .replace(/\s+/g, '-');

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Progress</h2>
      <p className={styles.subtitle}>Programming Languages:</p>

      <ul className={styles.list}>
        {languages.map((lang) => {
          const slug = toSlug(lang.name);
          return (
            <li key={lang.name} className={styles.item}>
              <img src={lang.iconUrl} alt={lang.name} className={styles.icon} />

              <div className={styles.barContainer}>
                <div className={styles.barBg}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${lang.progress}%` }}
                  />
                </div>
                <span className={styles.percentage}>
                  {lang.progress}% completed
                </span>
              </div>

              <button
                className={styles.showBtn}
                onClick={() => router.push(`/profile/${slug}`)}
              >
                <img src="/icons/Arrow.svg" alt="Go to course" />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
