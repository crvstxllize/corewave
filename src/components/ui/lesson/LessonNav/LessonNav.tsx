// components/ui/lesson/LessonNav/LessonNav.tsx
'use client'

import Image from 'next/image'
import styles from './LessonNav.module.css'

interface LessonNavProps {
  title: string
  progress: number          // от 0 до 1
  onPrev: () => void
  onNext: () => void
  disablePrev?: boolean
  disableNext?: boolean
}

export default function LessonNav({
  title,
  progress,
  onPrev,
  onNext,
  disablePrev,
  disableNext
}: LessonNavProps) {
  return (
    <div className={styles.navContainer}>
      <h2 className={styles.navTitle}>{title}</h2>

      <div className={styles.controls}>
        <button
          onClick={onPrev}
          disabled={disablePrev}
          className={styles.arrowBtn}
          aria-label="Previous step"
        >
          <Image
            src="/icons/Left.svg"
            alt="Назад"
            width={24}
            height={24}
          />
        </button>

        <div className={styles.progressBar}>
          <div
            className={styles.fill}
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <button
          onClick={onNext}
          disabled={disableNext}
          className={styles.arrowBtn}
          aria-label="Next step"
        >
          <Image
            src="/icons/Right.svg"
            alt="Вперед"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  )
}
