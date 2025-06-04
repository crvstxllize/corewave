// components/ui/lesson/Steps/MultiQuizStep.tsx
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import styles from './MultiQuizStep.module.css';

interface Props {
  content: React.ReactNode;
  options: string[];
  correctIndex: number;
  onAnswer: (correct: boolean) => void;
}

export default function MultiQuizStep({
  content,
  options,
  correctIndex,
  onAnswer,
}: Props) {
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
      // Показываем конфетти и через 3 сек. вызываем onAnswer(true)
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        onAnswer(true);
      }, 3000);
    } else {
      // Запускаем «тряску» на 600ms, а затем через 3 сек. вызываем onAnswer(false)
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setTimeout(() => {
        onAnswer(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* 1) Блок «content» */}
      <div className={`${styles.content} ${shake ? styles.shake : ''}`}>
        {content}
      </div>

      {/* 2) Список опций */}
      <div className={`${styles.list} ${shake ? styles.shake : ''}`}>
        {options.map((opt, i) => {
          let btnClass = styles.itemBtn;
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

      {/* 3) Фиксированная кнопка «Check» внизу */}
      <div className={styles.btnWrapper}>
        <button
          className={styles.checkBtn}
          onClick={handleCheck}
          disabled={choice === null || checked}
        >
          Check
        </button>
      </div>

      {/* 4) Конфетти при правильном ответе */}
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
