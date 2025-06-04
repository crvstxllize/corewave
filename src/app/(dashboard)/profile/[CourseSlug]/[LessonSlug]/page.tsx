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

  // Найти конфиг урока
  const chapters = courseLessons[courseKey]
  if (!chapters) return <p>Курс не найден</p>

  const allLessons = chapters.flatMap(ch => ch.lessons)
  const lessonConfig = allLessons.find(l => l.slug === LessonSlug) as Lesson
  if (!lessonConfig) return <p>Урок не найден</p>

  const steps: Step[] = lessonSteps[LessonSlug] || []
  const totalSteps = steps.length

  const raw = searchParams.get('step')
  const initialIdx = raw
    ? Math.min(Math.max(1, parseInt(raw, 10)), totalSteps) - 1
    : 0

  // ───────────────────────────────────────────────────────────────────────────
  // 1) Узнаём userId из localStorage (или 'guest', если всё ещё нет)
  const storedUserId = localStorage.getItem('currentUserId')
  const userId = storedUserId ?? 'guest'

  // 2) Ключ в localStorage, под которым храним JSON { attempts, lastRefill }
  const attemptsKey = `user_${userId}_attemptsData`

  // 3) Функция, которая возвращает объект { attempts, lastRefill } из localStorage,
  //    или создаёт новый, если его там нет
  function loadAttemptsData(): { attempts: number; lastRefill: number } {
    const saved = localStorage.getItem(attemptsKey)
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as { attempts: number; lastRefill: number }
        return parsed
      } catch {
        // Если JSON повреждён, сбросим
      }
    }
    // Если нет данных – инициализируем
    const now = Date.now()
    const initial = { attempts: 10, lastRefill: now }
    localStorage.setItem(attemptsKey, JSON.stringify(initial))
    return initial
  }

  // 4) Состояние текущих попыток (число)
  const [globalAttempts, setGlobalAttempts] = useState<number>(() => {
    const { attempts, lastRefill } = loadAttemptsData()
    const hoursPassed = (Date.now() - lastRefill) / (1000 * 60 * 60)
    if (hoursPassed >= 1) {
      // Если прошёл час или больше – сбрасываем
      const resetData = { attempts: 10, lastRefill: Date.now() }
      localStorage.setItem(attemptsKey, JSON.stringify(resetData))
      return 10
    }
    return attempts
  })

  // 5) Состояние индекса текущего шага и массива флагов завершённых шагов
  const [currentIdx, setCurrentIdx] = useState<number>(initialIdx)
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    () => Array(totalSteps).fill(false)
  )
  // ───────────────────────────────────────────────────────────────────────────

  // Синхронизируем query-параметр step → currentIdx
  useEffect(() => {
    const s = searchParams.get('step')
    if (s) {
      const idx = Math.min(Math.max(1, parseInt(s, 10)), totalSteps) - 1
      setCurrentIdx(idx)
    }
  }, [searchParams, totalSteps])

  const goStep = (idx: number) => {
    setCurrentIdx(idx)
    router.replace(
      `/profile/${courseKey}/${LessonSlug}?step=${idx + 1}`,
      { scroll: false }
    )
  }

  const handleAnswer = (correct: boolean) => {
    // 6) При неверном ответе – уменьшаем attempts и сохраняем новый timestamp
    if (!correct) {
      setGlobalAttempts(prev => {
        // Прочитаем старый объект
        const data = loadAttemptsData()
        const next = Math.max(0, data.attempts - 1)
        const updated = { attempts: next, lastRefill: data.lastRefill }
        localStorage.setItem(attemptsKey, JSON.stringify(updated))
        return next
      })
    }

    // 7) Отмечаем текущий шаг как завершённый (для прогресса урока)
    setCompletedSteps(prev => {
      const copy = [...prev]
      copy[currentIdx] = true
      return copy
    })

    // 8) Если это не последний шаг – переходим к следующему
    if (currentIdx < totalSteps - 1) {
      goStep(currentIdx + 1)
    } else {
      // 9) Если последний шаг, то помечаем урок полностью завершённым
      localStorage.setItem(`user_${userId}_completed_${LessonSlug}`, 'true')
      // Сигнал курсу, чтобы обновил прогресс
      localStorage.setItem('course_update', Date.now().toString())
      router.push(`/profile/${courseKey}`)
    }
  }

  const progress = completedSteps.filter(Boolean).length / totalSteps
  const step = steps[currentIdx]

  return (
    <div className={styles.container}>
      {/* Шапка урока – показываем globalAttempts */}
      <LessonHeader
        backHref={`/profile/${courseKey}`}
        attempts={globalAttempts}
      />

      <LessonNav
        title={lessonConfig.title}
        progress={progress}
        onPrev={() => currentIdx > 0 && goStep(currentIdx - 1)}
        onNext={() => handleAnswer(true)}
        disablePrev={currentIdx === 0}
        disableNext={currentIdx === totalSteps - 1}
      />

      <LessonContent
        key={currentIdx}
        step={step}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
