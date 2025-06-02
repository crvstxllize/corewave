// components/ui/lesson/LessonHeader/LessonHeader.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './LessonHeader.module.css'

interface LessonHeaderProps {
  backHref: string
  attempts: number
}

export default function LessonHeader({ backHref, attempts }: LessonHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Левая часть */}
        <Link href={backHref} className={styles.backLink}>
          <Image
            src="/icons/arrowBack.svg"
            alt="Back"
            width={40}
            height={40}
            className={styles.arrow}
          />
          <span className={styles.backText}>Назад к курсу</span>
        </Link>

        {/* Правая часть */}
        <div className={styles.attempts}>
          <span className={styles.attemptsLabel}>Количество попыток:</span>
          <strong className={styles.attemptsCount}>{attempts}</strong>
        </div>
      </div>
    </header>
  )
}
