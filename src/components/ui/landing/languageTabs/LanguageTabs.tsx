'use client'

import { useState, useRef, useEffect } from 'react';
import styles from './LanguageTabs.module.css';
import { languages, descriptionText } from '@/data/landing/landingData';
import CardCarousel from '../cardCarousel/CardCarousel';

export default function LanguageTabs() {
  const [activeLang, setActiveLang] = useState(languages[0]);
  // реф на контейнер табов
  const tabsRef = useRef<HTMLDivElement>(null);
  // стиль для «активной» подчеркивающей линии
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  // при монтировании и при смене activeLang вычисляем позицию и ширину таба
  useEffect(() => {
    const tabsEl = tabsRef.current;
    if (!tabsEl) return;
    const btn = Array.from(tabsEl.children)
      .find((el) => (el as HTMLElement).textContent === activeLang) as HTMLElement;
    if (btn) {
      setUnderlineStyle({ width: btn.offsetWidth, left: btn.offsetLeft });
    }
  }, [activeLang]);

  return (
    <section className={styles.container}>
      <div className={styles.tabs} ref={tabsRef}>
        {languages.map((lang) => (
          <button
            key={lang}
            className={`${styles.tab} ${activeLang === lang ? styles.active : ''}`}
            onClick={() => setActiveLang(lang)}
          >
            {lang}
          </button>
        ))}
        {/* фоновая линия */}
        <div className={styles.baseLine} />
        {/* подчеркивающая линия */}
        <div
          className={styles.highlightLine}
          style={{ width: underlineStyle.width, left: underlineStyle.left }}
        />
      </div>

      <p className={styles.description}>{descriptionText}</p>

      <CardCarousel language={activeLang} />
    </section>
  );
}
