// src/data/lessonSteps.tsx
import { ReactNode } from 'react'

export type StepType = 'theory' | 'dual-quiz' | 'multi-quiz'

export interface Step {
  id: string
  type: StepType
  content: ReactNode
  options?: string[]
  correctIndex?: number
}

const aboutThisLanguageSteps: Step[] = [
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <div className="theory-images">
          <img src="/imgs/London.svg" alt={`city = "London"`} />
        </div>
        <p>
          Показательная страница - шаблон TheoryStep.tsx 
          в котором я создал Картинку примера переменной
          и в котором я создал Код через html тэг который находится снизу этой страницы
        </p>
        <pre>
          <code>city = "London"</code>
        </pre>
      </>
    ),
  },
  {
    id: 'step-2',
    type: 'dual-quiz',
    content: (
      <>
        <pre>
          <code>DualQuizStep</code>
        </pre>
        <p>Показательная страница - шаблон DualQuizStep.tsx</p>
        <p>Снизу 3 варианта, где 2 неверных ответа и один верный <code></code>:</p>
      </>
    ),
    options: ['Неверно1', 'Правильно', 'Неверно2'],
    correctIndex: 1,
  },
  {
    id: 'step-3',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          People use code to send instructions to computers, but code will also be read by
          other people (and future you!).
        </p>
        <p>What should be the name of the variable that stores the user’s balance?</p>
      </>
    ),
    options: ['Balance', 'Gambling', 'Country'],
    correctIndex: 0,
  },
  // placeholders для шагов 4–7
  { id: 'step-4', type: 'theory', content: <p>— placeholder for step 4 —</p> },
  { id: 'step-5', type: 'dual-quiz', content: <p>— placeholder for step 5 —</p>, options: ['foo','bar'], correctIndex: 0 },
  { id: 'step-6', type: 'multi-quiz', content: <p>— placeholder for step 6 —</p>, options: ['A','B','C'], correctIndex: 2 },
  { id: 'step-7', type: 'theory', content: <p>— placeholder for final step 7 —</p> },
]

const whyPythonSteps: Step[] = [
  {
    id: 'step-1',
    type: 'theory',
    content: (
      <>
        <div className="theory-images">
          <img src="/imgs/London.svg" alt={`city = "London"`} />
        </div>
        <p>
          Think of a variable as a container (or a box) where you can store and retrieve
          data whenever needed. The variable’s name (in this case, <code>city</code>)
          helps us refer to the stored value.
        </p>
        <pre>
          <code>item = "bike"</code>
        </pre>
      </>
    ),
  },
  {
    id: 'step-2',
    type: 'dual-quiz',
    content: (
      <>
        <pre>
          <code>item = "bike"</code>
        </pre>
        <p>To create a variable, you just need to give it a name.</p>
        <p>Complete the code to create a variable named <code>item</code>:</p>
      </>
    ),
    options: ['shop', 'item'],
    correctIndex: 1,
  },
  {
    id: 'step-3',
    type: 'multi-quiz',
    content: (
      <>
        <p>
          People use code to send instructions to computers, but code will also be read by
          other people (and future you!).
        </p>
        <p>What should be the name of the variable that stores the user’s balance?</p>
      </>
    ),
    options: ['Balance', 'Gambling', 'Country'],
    correctIndex: 0,
  },
  // placeholders для шагов 4–7
  { id: 'step-4', type: 'theory', content: <p>— placeholder for step 4 —</p> },
  { id: 'step-5', type: 'dual-quiz', content: <p>— placeholder for step 5 —</p>, options: ['foo','bar'], correctIndex: 0 },
  { id: 'step-6', type: 'multi-quiz', content: <p>— placeholder for step 6 —</p>, options: ['A','B','C'], correctIndex: 2 },
  { id: 'step-7', type: 'theory', content: <p>— placeholder for final step 7 —</p> },
]


export const lessonSteps: Record<string, Step[]> = {
  'about-this-language': aboutThisLanguageSteps,
  'why-python': whyPythonSteps
  // 'java-introduction': javaIntroductionSteps,
}
