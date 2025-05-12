// src/components/ui/catalog/divider2/Divider2.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './Divider2.module.css';

export default function Divider2() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number;
    const onScroll = () => {
      const { top } = el.getBoundingClientRect();
      // когда верх линии попадает в видимую область окна:
      if (top <= window.innerHeight) {
        // ждем 1 секунду, потом показываем
        timeoutId = window.setTimeout(() => setVisible(true), 500);
        window.removeEventListener('scroll', onScroll);
      }
    };

    // вешаем и сразу проверяем (на случай, если линия изначально уже в зоне видимости)
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.divider} ${visible ? styles.visible : ''}`}
    />
  );
}
