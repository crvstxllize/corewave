'use client';

import React from 'react';
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
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Progress</h2>
      <p className={styles.subtitle}>Programming Languages:</p>

      <ul className={styles.list}>
        {languages.map((lang) => (
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

            <button className={styles.showBtn}>
              <img src="/icons/Arrow.svg" alt="" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
