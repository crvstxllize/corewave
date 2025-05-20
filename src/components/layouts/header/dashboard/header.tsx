'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const langs = ['Kaz', 'Rus', 'Eng'];

export default function DashboardHeader() {
  const [activeLang, setActiveLang] = useState<string>('Eng');

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

        {/* Переключатель языков */}
        <div className={styles.langSwitcher}>
          {langs.map((lang) => (
            <button
              key={lang}
              className={`${styles.lang} ${activeLang === lang ? styles.active : ''}`}
              onClick={() => setActiveLang(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
