import React from 'react';
import styles from './LanguageTabs.module.css';
import { LanguageKey } from '@/data/landing/languages';

interface Props {
  tabs: LanguageKey[];
  active: LanguageKey;
  onChange: (lang: LanguageKey) => void;
}

export default function LanguageTabs({ tabs, active, onChange }: Props) {
  return (
    <div className={styles.tabs}>
      {tabs.map((lang) => (
        <button
          key={lang}
          className={`${styles.tab} ${active === lang ? styles.active : ''}`}
          onClick={() => onChange(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}