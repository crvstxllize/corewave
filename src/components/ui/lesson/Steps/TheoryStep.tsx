// components/ui/lesson/Steps/TheoryStep.tsx

import React from 'react';
import styles from './TheoryStep.module.css';

interface TheoryStepProps {
  /**
   * Любой контент: текст (p, h2, списки), изображения (<img>), кодовые блоки (<pre><code>…</code></pre>).
   * Если некоторого элемента нет — он просто не отобразится, но остальные элементы останутся в правильных позициях.
   */
  content: React.ReactNode;
  /** Обработчик нажатия кнопки «Next» */
  onNext: () => void;
}

export default function TheoryStep({ content, onNext }: TheoryStepProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {content}
      </div>

      <div className={styles.btnWrapper}>
        <button className={styles.nextBtn} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
