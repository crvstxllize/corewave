'use client'

import { useState } from 'react';                               
import { cardsByLanguage } from '@/data/landing/landingData'; 
import styles from './CardCarousel.module.css';

type CardCarouselProps = { language: string };

export default function CardCarousel({ language }: CardCarouselProps) {
  // получаем массив карточек для текущего языка
  const cards = cardsByLanguage[language];
  const [centerIndex, setCenterIndex] = useState(1);
  // анимационный класс: 'enter-left', 'enter-right', 'exit-left', 'exit-right'
  const [anim, setAnim] = useState<string>('');

  const prev = () => {
    setAnim('exit-right');
    setTimeout(() => {
      setCenterIndex((i) => (i - 1 + cards.length) % cards.length);
      setAnim('enter-left');
    }, 300);
  };
  const next = () => {
    setAnim('exit-left');
    setTimeout(() => {
      setCenterIndex((i) => (i + 1) % cards.length);
      setAnim('enter-right');
    }, 300);
  };

  // вычисляем три индекса: левый, центр, правый
  const leftIdx = (centerIndex - 1 + cards.length) % cards.length;
  const rightIdx = (centerIndex + 1) % cards.length;

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prev}>‹</button>

      {[leftIdx, centerIndex, rightIdx].map((idx, pos) => {
        const card = cards[idx];
        const isCenter = pos === 1;
        return (
          <div
            key={idx}
            className={`${styles.card} ${
              isCenter ? styles.active : styles.inactive
            } ${anim}`}
          >
            {/* здесь контент карточки (иконка, заголовок, текст) */}
          </div>
        );
      })}

      <button className={styles.arrow} onClick={next}>›</button>
    </div>
  );
}
