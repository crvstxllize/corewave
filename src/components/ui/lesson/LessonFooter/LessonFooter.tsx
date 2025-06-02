// components/ui/lesson/LessonFooter/LessonFooter.tsx
'use client'

import styles from './LessonFooter.module.css'
import { StepType } from '@/data/dashboard/Lesson/lessonSteps'

interface LessonFooterProps {
  stepType: StepType
  onNext: () => void       // для theory-шагов
  onCheck: () => void      // для quiz-шагов
  disableNext?: boolean
  disableCheck?: boolean
}

export default function LessonFooter({
  stepType,
  onNext,
  onCheck,
  disableNext,
  disableCheck,
}: LessonFooterProps) {
  const isQuiz = stepType === 'dual-quiz' || stepType === 'multi-quiz'

  return (
    <footer className={styles.footer}>
      {isQuiz ? (
        <button
          className={styles.checkBtn}
          onClick={onCheck}
          disabled={disableCheck}
        >
          Check
        </button>
      ) : (
        <button
          className={styles.nextBtn}
          onClick={onNext}
          disabled={disableNext}
        >
          Next
        </button>
      )}
    </footer>
  )
}
