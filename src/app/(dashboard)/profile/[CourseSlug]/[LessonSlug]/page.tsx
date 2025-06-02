// src/app/(dashboard)/profile/[CourseSlug]/[LessonSlug]/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'

import LessonHeader from '@/components/ui/lesson/LessonHeader/LessonHeader'
import LessonNav from '@/components/ui/lesson/LessonNav/LessonNav'
import LessonContent from '@/components/ui/lesson/LessonContent/LessonContent'

import { lessonSteps, Step } from '@/data/dashboard/Lesson/lessonSteps'
import { courseLessons, CourseKey, Lesson } from '@/data/dashboard/Course/lessonConfig'

import styles from './lesson.module.css'

export default function LessonPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  // 1. Достаём CourseSlug и LessonSlug из URL
  const CourseSlug = params?.CourseSlug as string
  const LessonSlug = params?.LessonSlug as string

  // Приводим CourseSlug к нижнему регистру, чтобы найти в courseLessons
  const courseKey = CourseSlug.toLowerCase() as CourseKey

  // 2. Ищем конфигурацию курса и урока в статическом объекте courseLessons
  const chapters = courseLessons[courseKey]
  if (!chapters) return <p>Курс не найден</p>

  // Вытягиваем все уроки из всех глав и находим нужный по slug
  const allLessons = chapters.flatMap(ch => ch.lessons)
  const lessonConfig = allLessons.find(l => l.slug === LessonSlug) as Lesson
  if (!lessonConfig) return <p>Урок не найден</p>

  // 3. Берём массив шагов (step) из моков lessonSteps
  const steps: Step[] = lessonSteps[LessonSlug] || []
  const totalSteps = steps.length

  // 4. Определяем initialIdx из query-параметра ?step=
  const raw = searchParams.get('step')
  const initialIdx = raw
    ? Math.min(Math.max(1, parseInt(raw, 10)), totalSteps) - 1
    : 0

  // 5. Локальные состояния
  // currentIdx — индекс текущего шага (0-based)
  const [currentIdx, setCurrentIdx] = useState<number>(initialIdx)

  // attempts — сколько попыток осталось (изначально 10)
  const [attempts, setAttempts] = useState<number>(10)

  // completed — массив флагов, какие шаги уже завершены
  // (например, если пользователь правильно ответил или прошёл «теорию»)
  const [completed, setCompleted] = useState<boolean[]>(
    Array(totalSteps).fill(false)
  )

  // 6. Синхронизируем URL-параметр ?step=… → local state
  useEffect(() => {
    const s = searchParams.get('step')
    if (s) {
      const idx = Math.min(Math.max(1, parseInt(s, 10)), totalSteps) - 1
      setCurrentIdx(idx)
    }
  }, [searchParams, totalSteps])

  // 7. Переход на указанный шаг (и замена URL без полной перезагрузки)
  const goStep = (idx: number) => {
    setCurrentIdx(idx)
    // обновляем только query-параметр, не скроллим страницу наверх
    router.replace(
      `/profile/${courseKey}/${LessonSlug}?step=${idx + 1}`,
      { scroll: false }
    )
  }

  // 8. Колбэк, который передаём в каждый step: пользователь ответил (правильно или нет)
  const handleAnswer = (correct: boolean) => {
    if (!correct) {
      // уменьшаем кол-во попыток, если ответ был неверный
      setAttempts(prev => Math.max(0, prev - 1))
    }

    // помечаем текущий шаг как завершённый (даже если ответ был неверный,
    // чтобы progress-линейка это зафиксировала; можно изменить логику,
    // если нужно помечать только «правильные» ответы)
    setCompleted(prev => {
      const copy = [...prev]
      copy[currentIdx] = true
      return copy
    })

    // Если есть следующий шаг, переходим на него
    if (currentIdx < totalSteps - 1) {
      goStep(currentIdx + 1)
    } else {
      // Если это был последний шаг, возвращаемся на страницу курса
      router.push(`/profile/${courseKey}`)
    }
  }

  // 9. Вычисляем прогресс (доля завершённых шагов)
  const progress = completed.filter(Boolean).length / totalSteps

  // 10. Текущий объект step
  const step = steps[currentIdx]

  return (
    <div className={styles.container}>
      {/* Шапка урока: «Назад к курсу» + отображение попыток */}
      <LessonHeader
        backHref={`/profile/${courseKey}`}
        attempts={attempts}
      />

      {/* Навигационная панель: заголовок, прогресс, кнопки Prev/Next */}
      <LessonNav
        title={lessonConfig.title}
        progress={progress}
        onPrev={() => currentIdx > 0 && goStep(currentIdx - 1)}
        onNext={() => {
          // В навигации кнопка «Next» всегда считается «правильным» ответом
          // (например, если текущий шаг – теория, или если вы хотите давать возможность
          // просто переключиться вперёд, даже не пройдя квиз). При желании здесь можно
          // сделать disableNext={true} для quiz-шагов.
          handleAnswer(true)
        }}
        disablePrev={currentIdx === 0}
        disableNext={currentIdx === totalSteps - 1}
      />

      {/*
        Основной контент – сам шаг.
        Ключевой момент: мы даём LessonContent prop `step` и `onAnswer`,
        а внутри LessonContent поймёт, какой именно Sub‐Component (Theory/
        DualQuiz/MultiQuiz) рендерить.
        Кроме того, чтобы каждый раз сбрасывалась внутренняя локальная
        state (choice/checked) у дочернего шага при смене номера шага,
        мы ставим key={currentIdx}. Тогда React будет размонтировать
        старый дочерний компонент и смонтировать новый.
      */}
      <LessonContent
        key={currentIdx}
        step={step}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
