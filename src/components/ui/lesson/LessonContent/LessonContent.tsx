// components/ui/lesson/LessonContent.tsx
'use client'

import TheoryStep from '@/components/ui/lesson/Steps/TheoryStep'
import DualQuizStep from '@/components/ui/lesson/Steps/DualQuizStep'
import MultiQuizStep from '@/components/ui/lesson/Steps/MultiQuizStep'
import { Step } from '@/data/dashboard/Lesson/lessonSteps'

interface Props {
  step: Step
  onAnswer: (correct: boolean) => void
}

export default function LessonContent({ step, onAnswer }: Props) {
  switch (step.type) {
    case 'theory':
      return (
        <TheoryStep
          content={step.content}
          onNext={() => onAnswer(true)} // «true», потому что theory‐шаг всегда считается «пройденным»
        />
      )

    case 'dual-quiz':
      return (
        <DualQuizStep
          content={step.content}
          options={step.options! as [string, string]}
          correctIndex={step.correctIndex! as 0 | 1}
          onAnswer={onAnswer}
        />
      )

    case 'multi-quiz':
      return (
        <MultiQuizStep
          content={step.content}
          options={step.options!}
          correctIndex={step.correctIndex!}
          onAnswer={onAnswer}
        />
      )

    default:
      return null
  }
}
