'use client';

import { useEffect, useRef } from 'react';
import styles from './hero.module.css';

export default function Hero() {
  const typingRef   = useRef<HTMLDivElement>(null);
  const scrollBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // === ПЕЧАТЬ ===
    const sequences = [
      { base: '', words: ['How to start to learn Python?','or JavaScript?'], delay: 1000 },
      { base: '', words: ['Which direction in IT to choose?'],            delay: 1000 },
      { base: '', words: ['FrontEnd/BackEnd?','Data Science?'],            delay: 1000 },
      { base: '', words: ['Want to know about Processor?','The answer is provided below!'], delay: 3000 }
    ];
    let seqIndex = 0, wordIndex = 0, charIndex = 0;
    let isDeleting = false, isClearing = false;
    const container = typingRef.current!;
    
    function typeEffect() {
      const { base, words, delay } = sequences[seqIndex];
      const fullText = base + ' ' + words[wordIndex];
      
      if (isClearing) {
        setTimeout(() => {
          container.textContent = '';
          isClearing = false;
          seqIndex = (seqIndex + 1) % sequences.length;
          wordIndex = charIndex = 0;
          isDeleting = false;
          typeEffect();
        }, 500);
        return;
      }

      isDeleting ? charIndex-- : charIndex++;
      container.textContent = fullText.slice(0, charIndex);

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => isDeleting = true, delay);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex >= words.length) {
          wordIndex = 0;
          isClearing = true;
        }
      }

      setTimeout(typeEffect, isDeleting ? 80 : 120);
    }
    
    setTimeout(typeEffect, 2000);

    // === ПЛАВНЫЙ СКРОЛЛ ===
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function smoothScroll(distance: number, duration: number) {
      const start = window.scrollY;
      const startTime = performance.now();
      
      function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuad(progress);
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const btn = scrollBtnRef.current!;
    const handleClick = () => {
        // скроллим на 120% высоты экрана
        smoothScroll(window.innerHeight * 1.15, 2000);
      };
      btn.addEventListener('click', handleClick);
    
      return () => {
        btn.removeEventListener('click', handleClick);
      };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Текстовая печать + курсор */}
      <div className={styles.typingWrapper}>
        <div ref={typingRef} className={styles.typingContainer} />
        <div className={styles.cursor} />
      </div>

      {/* Скобки */}
      <div className={`${styles.bracket} ${styles.bracketLeft}`} />
      <div className={`${styles.bracket} ${styles.bracketRight}`} />

      {/* Индикатор скролла */}
      <div ref={scrollBtnRef} className={styles.scrollIndicator}>
        <div className={styles.arrow} />
      </div>
    </section>
  );
}
