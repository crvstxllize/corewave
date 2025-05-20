import React from 'react';
import { CardData } from '@/data/landing/languages';
import styles from './Carousel.module.css';

interface Props {
  cards: CardData[];
  selected: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Carousel({ cards, selected, onPrev, onNext }: Props) {
  const len = cards.length;
  const prevIdx = (selected + len - 1) % len;
  const nextIdx = (selected + 1) % len;

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={onPrev} aria-label="Previous">
        ‹
      </button>

      <div className={styles.cards}>
        {cards.map((card, idx) => {
          let posClass = styles.left;
          if (idx === selected) posClass = styles.center;
          else if (idx === nextIdx) posClass = styles.right;

          return (
            <div key={idx} className={`${styles.card} ${posClass}`}>
              <img src={card.icon} alt="" className={styles.icon} />
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.description}</p>
            </div>
          );
        })}
      </div>

      <button className={styles.arrow} onClick={onNext} aria-label="Next">
        ›
      </button>
    </div>
  );
}
