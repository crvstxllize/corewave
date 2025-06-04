// components/ui/lesson/Steps/DualQuizStep.tsx
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import styles from './DualQuizStep.module.css';

export default function DualQuizStep({ content, options, correctIndex, onAnswer }) {
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCheck = () => {
    if (choice === null) return;
    setChecked(true);
    const correct = choice === correctIndex;
    setIsCorrect(correct);

    if (correct) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        onAnswer(true);
      }, 3000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setTimeout(() => {
        onAnswer(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* 1) Блок контента (заголовок, текст, картинка и т.д.) */}
      <div className={`${styles.content} ${shake ? styles.shake : ''}`}>
        {content}
      </div>

      {/* 2) Новый «футер» — светло-серая полоса внизу */}
      <div className={styles.footer}>
        {/* 2.1) Кнопки-варианты */}
        <div className={styles.optionsWrapper}>
          {options.map((opt, i) => {
            let btnClass = styles.optBtn;
            if (checked) {
              if (i === correctIndex) {
                btnClass += ` ${styles.correct}`;
              } else if (i === choice) {
                btnClass += ` ${styles.incorrect}`;
              }
            } else if (choice === i) {
              btnClass += ` ${styles.selected}`;
            }

            return (
              <button
                key={i}
                className={btnClass}
                onClick={() => {
                  if (!checked) setChoice(i);
                }}
                disabled={checked}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* 2.2) Кнопка «Check» */}
        <button
          className={styles.checkBtn}
          onClick={handleCheck}
          disabled={choice === null || checked}
        >
          Check
        </button>
      </div>

      {/* 3) Конфетти-оверлей (если нужен) */}
      {showConfetti && (
        <div className={styles.confettiOverlay}>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
          />
        </div>
      )}
    </div>
  );
}
