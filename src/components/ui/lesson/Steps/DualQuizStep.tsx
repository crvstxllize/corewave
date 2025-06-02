// components/ui/lesson/Steps/DualQuizStep.tsx
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import styles from './DualQuizStep.module.css';

interface DualQuizStepProps {
  /**
   * Любой ReactNode: текст, картинки, блоки <pre><code> и т.д.
   * При их отсутствии контент просто не будет отрисован.
   */
  content: React.ReactNode;
  /** Два варианта ответа */
  options: [string, string];
  /** Индекс правильного варианта: 0 или 1 */
  correctIndex: 0 | 1;
  /**
   * Колбэк, который информирует родителя:
   * передаём true, если ответ правильный, false — неверный.
   * Родитель используется для перехода на следующий шаг.
   */
  onAnswer: (correct: boolean) => void;
}

export default function DualQuizStep({
  content,
  options,
  correctIndex,
  onAnswer,
}: DualQuizStepProps) {
  // Индекс, который пользователь выбрал (0 или 1). null — ничего не выбрано.
  const [choice, setChoice] = useState<0 | 1 | null>(null);
  // Флаг — нажал ли пользователь кнопку “Check”.
  const [checked, setChecked] = useState(false);
  // Флаг, правильный ли ответ после нажатия “Check”.
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  // Флаг для анимации тряски контейнера.
  const [shake, setShake] = useState(false);
  // Флаг для отображения конфетти.
  const [showConfetti, setShowConfetti] = useState(false);

  // Обработчик клика по “Check”
  const handleCheck = () => {
    if (choice === null) return; // если ничего не выбрано — ничего не делаем

    setChecked(true);
    const correct = choice === correctIndex;
    setIsCorrect(correct);

    if (correct) {
      // Правильный: запускаем конфетти
      setShowConfetti(true);

      // Через 3 секунды скрываем конфетти и вызываем onAnswer(true)
      setTimeout(() => {
        setShowConfetti(false);
        onAnswer(true);
      }, 5000);
    } else {
      // Неправильный: трясём экран
      setShake(true);

      // Оставляем тряску на 600мс, затем гасим и через 3 сек вызываем onAnswer(false)
      setTimeout(() => setShake(false), 600);
      setTimeout(() => {
        onAnswer(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* 1) Контент (заголовки, текст, <pre><code>, картинки) */}
      <div className={`${styles.content} ${shake ? styles.shake : ''}`}>
        {content}
      </div>

      {/* 2) Кнопки-опции (две кнопки) */}
      <div className={styles.optionsWrapper}>
        {options.map((opt, idx) => {
          const i = idx as 0 | 1;

          // Определяем, какой класс дать кнопке:
          let btnClass = styles.optBtn;
          if (checked) {
            // Если уже нажали “Check”:
            if (i === correctIndex) {
              btnClass += ` ${styles.correct}`;   // правильный вариант — зелёный
            } else if (i === choice) {
              btnClass += ` ${styles.incorrect}`; // выбранный неверный — красный
            }
          } else if (choice === i) {
            // Если просто выбрали, но ещё не нажали “Check”:
            btnClass += ` ${styles.selected}`;    // фиолетовый фон
          }

          return (
            <button
              key={i}
              className={btnClass}
              onClick={() => {
                if (!checked) {
                  setChoice(i);
                }
              }}
              disabled={checked} // после “Check” выбор нельзя менять
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* 3) Серый фиксированный блок снизу с кнопкой “Check” */}
      <div className={styles.btnWrapper}>
        <button
          className={styles.checkBtn}
          onClick={handleCheck}
          disabled={choice === null || checked} // нельзя нажать без выбора или уже проверено
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
