// components/ui/lesson/Steps/MultiQuizStep.tsx
import { useState } from 'react'
import styles from './MultiQuizStep.module.css'

interface Props {
  content: React.ReactNode
  options: string[]
  correctIndex: number
  onAnswer: (correct: boolean) => void
}

export default function MultiQuizStep({ content, options, correctIndex, onAnswer }: Props) {
  const [choice, setChoice] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    if (choice === null) return
    setChecked(true)
    onAnswer(choice === correctIndex)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {content}
      </div>

      <div className={styles.list}>
        {options.map((opt, i) => (
          <button
            key={i}
            className={
              `${styles.itemBtn} ` +
              (checked
                ? (i === correctIndex
                    ? styles.correct
                    : (i === choice ? styles.incorrect : ''))
                : (choice === i ? styles.selected : ''))
            }
            onClick={() => !checked && setChoice(i)}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        className={styles.checkBtn}
        disabled={choice === null}
        onClick={handleCheck}
      >
        Check
      </button>
    </div>
  )
}
