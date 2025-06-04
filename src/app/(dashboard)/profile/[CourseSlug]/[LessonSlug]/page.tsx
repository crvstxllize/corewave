// src/app/(dashboard)/profile/[CourseSlug]/[LessonSlug]/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'

import LessonHeader  from '@/components/ui/lesson/LessonHeader/LessonHeader'
import LessonNav     from '@/components/ui/lesson/LessonNav/LessonNav'
import LessonContent from '@/components/ui/lesson/LessonContent/LessonContent'

import { lessonSteps, Step } from '@/data/dashboard/Lesson/lessonSteps'
import { courseLessons, CourseKey, Lesson } from '@/data/dashboard/Course/lessonConfig'

import styles from './lesson.module.css'

export default function LessonPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const CourseSlug = params?.CourseSlug as string
  const LessonSlug = params?.LessonSlug as string
  const courseKey = CourseSlug.toLowerCase() as CourseKey

  // 1) Получаем конфиг курса и урока
  const chapters = courseLessons[courseKey]
  if (!chapters) return <p>Курс не найден</p>

  const allLessons = chapters.flatMap(ch => ch.lessons)
  const lessonConfig = allLessons.find(l => l.slug === LessonSlug) as Lesson
  if (!lessonConfig) return <p>Урок не найден</p>

  // 2) Загружаем шаги урока
  const steps: Step[] = lessonSteps[LessonSlug] || []
  const totalSteps = steps.length

  // 3) Вычисляем начальный индекс шага из query-параметра ?step=
  const raw = searchParams.get('step')
  const initialIdx = raw
    ? Math.min(Math.max(1, parseInt(raw, 10)), totalSteps) - 1
    : 0

  // ───────────────────────────────────────────────────────────────────────────
  // 4) Узнаем текущего userId из localStorage (если нет — «guest»)
  const storedUserId = localStorage.getItem('currentUserId')
  const userId = storedUserId ?? 'guest'

  // 5) Ключ в localStorage для хранения { attempts, lastRefill }
  const attemptsKey = `user_${userId}_attemptsData`

  // 6) Утилита для чтения / создания данных попыток
  function loadAttemptsData(): { attempts: number; lastRefill: number } {
    const saved = localStorage.getItem(attemptsKey)
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as { attempts: number; lastRefill: number }
        return parsed
      } catch {
        // Если JSON испорчен — сбросим ниже
      }
    }
    const now = Date.now()
    const initial = { attempts: 10, lastRefill: now }
    localStorage.setItem(attemptsKey, JSON.stringify(initial))
    return initial
  }

  // 7) Состояние: число оставшихся попыток
  const [globalAttempts, setGlobalAttempts] = useState<number>(() => {
    const { attempts, lastRefill } = loadAttemptsData()
    const hoursPassed = (Date.now() - lastRefill) / (1000 * 60 * 60)
    if (hoursPassed >= 1) {
      // Если прошёл час, сбросим на 10
      const resetData = { attempts: 10, lastRefill: Date.now() }
      localStorage.setItem(attemptsKey, JSON.stringify(resetData))
      return 10
    }
    return attempts
  })

  // 8) Состояние: индекс текущего шага и массив флагов завершённых шагов
  const [currentIdx, setCurrentIdx] = useState<number>(initialIdx)
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    () => Array(totalSteps).fill(false)
  )

  // 9) Флаг, чтобы штраф за неверный ответ снимался только один раз за шаг
  const [hasPenalizedThisStep, setHasPenalizedThisStep] = useState<boolean>(false)
  // ───────────────────────────────────────────────────────────────────────────

  // 10) Если попыток нет, сразу редиректим обратно на страницу курса
  useEffect(() => {
    if (globalAttempts <= 0) {
      router.replace(`/profile/${courseKey}`)
    }
  }, [globalAttempts, courseKey, router])

  // 11) Синхронизируем query-параметр step → currentIdx
  useEffect(() => {
    const s = searchParams.get('step')
    if (s) {
      const idx = Math.min(Math.max(1, parseInt(s, 10)), totalSteps) - 1
      setCurrentIdx(idx)
    }
    // При переходе на новый шаг сбрасываем флаг штрафа
    setHasPenalizedThisStep(false)
  }, [searchParams, totalSteps])

  // 12) Функция перехода на шаг по индексу
  const goStep = (idx: number) => {
    setCurrentIdx(idx)
    router.replace(
      `/profile/${courseKey}/${LessonSlug}?step=${idx + 1}`,
      { scroll: false }
    )
  }

  // 13) Обработчик ответа (правильного или нет)
  const handleAnswer = (correct: boolean) => {
    // 13.1) Если попыток нет — не делаем ничего
    if (globalAttempts <= 0) {
      return
    }

    // 13.2) Если ответ неверный и ещё не снимали штраф на этом шаге
    if (!correct && !hasPenalizedThisStep) {
      const data = loadAttemptsData()
      const next = Math.max(0, data.attempts - 1)
      const updated = { attempts: next, lastRefill: data.lastRefill }
      localStorage.setItem(attemptsKey, JSON.stringify(updated))
      setGlobalAttempts(next)
      setHasPenalizedThisStep(true)
    }

    // 13.3) Помечаем текущий шаг как завершённый (для прогресс-бара)
    setCompletedSteps(prev => {
      const copy = [...prev]
      copy[currentIdx] = true
      return copy
    })

    // 13.4) Если есть следующий шаг — переходим к нему
    if (currentIdx < totalSteps - 1) {
      goStep(currentIdx + 1)
    } else {
      // 13.5) Если это был последний шаг, помечаем весь урок завершённым
      localStorage.setItem(`user_${userId}_completed_${LessonSlug}`, 'true')
      // Сигнал курсу, чтобы обновил прогресс
      localStorage.setItem('course_update', Date.now().toString())
      router.push(`/profile/${courseKey}`)
    }
  }

  // 14) Вычисляем процент завершённых шагов
  const progress = completedSteps.filter(Boolean).length / totalSteps
  const step = steps[currentIdx]

  return (
    <div className={styles.container}>
      {/* Шапка урока (может быть показана, даже если попыток 0,
          но useEffect выше сразу редиректит обратно) */}
      <LessonHeader
        backHref={`/profile/${courseKey}`}
        attempts={globalAttempts}
      />

      {/* Навигация по шагам */}
      <LessonNav
        title={lessonConfig.title}
        progress={progress}
        onPrev={() => currentIdx > 0 && goStep(currentIdx - 1)}
        onNext={() => handleAnswer(true)}
        disablePrev={currentIdx === 0}
        disableNext={currentIdx === totalSteps - 1}
      />

      {/* Содержимое текущего шага */}
      <LessonContent
        key={currentIdx}
        step={step}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
