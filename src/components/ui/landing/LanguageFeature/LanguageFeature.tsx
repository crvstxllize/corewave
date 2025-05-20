'use client'

import { useState, useEffect } from 'react';
import { languages, LanguageKey } from '@/data/landing/languages';
import { languageDescriptions } from '@/data/landing/descriptions';
import LanguageTabs from '@/components/ui/landing/LanguageFeature/LanguageTabs';
import Carousel from '@/components/ui/landing/LanguageFeature/Carousel';
import styles from './LanguageFeature.module.css';

export default function LanguageFeature() {
  const keys = Object.keys(languages) as LanguageKey[];
  const [activeLang, setActiveLang] = useState<LanguageKey>(keys[0]);
  const [selectedIdx, setSelectedIdx] = useState(1);

  const cards = languages[activeLang];
  const desc  = languageDescriptions[activeLang];

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(`.${styles.fadeUp}`));
    const reveal = () => {
      const trigger = window.innerHeight * 0.9;
      els.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          el.classList.add(styles.visible);
        }
      });
    };

    // сразу проверить и подписаться на скролл
    reveal();
    window.addEventListener('scroll', reveal);
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section className={styles.root}>
      {/* 1. Вкладки + описание с анимацией */}
      <div className={styles.fadeUp}>
        <LanguageTabs
          tabs={keys}
          active={activeLang}
          onChange={(lang) => {
            setActiveLang(lang);
            setSelectedIdx(1);
          }}
        />
        <p className={styles.description}>{desc}</p>
      </div>

      {/* 2. Карусель с анимацией */}
      <div className={styles.fadeUp}>
        <Carousel
          cards={cards}
          selected={selectedIdx}
          onPrev={() => setSelectedIdx(i => (i + cards.length - 1) % cards.length)}
          onNext={() => setSelectedIdx(i => (i + 1) % cards.length)}
        />
      </div>
    </section>
  );
}
