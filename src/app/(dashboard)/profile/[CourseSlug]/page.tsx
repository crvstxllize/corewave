'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import CourseHeader  from '@/components/ui/course/header/CourseHeader'
import Breadcrumbs    from '@/components/ui/course/breadcrumbs/BreadCrumbs'
import CourseHero     from '@/components/ui/course/coursehero/CourseHero'
import SeparatorLine  from '@/components/ui/course/separatorline/SeparatorLine'
import LessonSection from '@/components/ui/course/lessonsection/LessonSection'

import { courseLessons, Chapter, CourseKey, Lesson } from '@/data/dashboard/Course/lessonConfig'

interface LessonStatus {
  slug: string
  isDone: boolean
}

export default function CoursePage() {
  const params = useParams()
  const CourseSlug = params?.CourseSlug as string
  const slug = CourseSlug.toLowerCase() as CourseKey

  const chapters: Chapter[] = courseLessons[slug] || []
  const allLessons: Lesson[] = chapters.flatMap(ch => ch.lessons)

  // ───────────────────────────────────────────────────────────────────────────
  // 1) Узнаём userId
  const storedUserId = localStorage.getItem('currentUserId')
  const userId = storedUserId ?? 'guest'

  // 2) Ключ для attemptsData
  const attemptsKey = `user_${userId}_attemptsData`

  // 3) Функция для чтения { attempts, lastRefill }
  function loadAttemptsData(): { attempts: number; lastRefill: number } {
    const saved = localStorage.getItem(attemptsKey)
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as { attempts: number; lastRefill: number }
        return parsed
      } catch {
        // JSON мог испортиться
      }
    }
    // Если нет – инициализируем
    const now = Date.now()
    const initial = { attempts: 10, lastRefill: now }
    localStorage.setItem(attemptsKey, JSON.stringify(initial))
    return initial
  }

  // 4) Состояние: глобальные попытки 
  const [globalAttempts, setGlobalAttempts] = useState<number>(() => {
    const { attempts, lastRefill } = loadAttemptsData()
    const hoursPassed = (Date.now() - lastRefill) / (1000 * 60 * 60)
    if (hoursPassed >= 1) {
      // Если ≥ 1 час, сбросить на 10 и обновить timestamp
      const resetData = { attempts: 10, lastRefill: Date.now() }
      localStorage.setItem(attemptsKey, JSON.stringify(resetData))
      return 10
    }
    return attempts
  })

  // 5) Состояние: статусы уроков и процент
  const [statuses, setStatuses] = useState<LessonStatus[]>([])
  const [percent, setPercent] = useState<number>(0)
  // ───────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    // 6) Сначала пересчитываем, какие уроки завершены (user_<userId>_completed_<slug>)
    const arr: LessonStatus[] = allLessons.map((lesson) => {
      const doneKey = `user_${userId}_completed_${lesson.slug}`
      const done = localStorage.getItem(doneKey) === 'true'
      return { slug: lesson.slug, isDone: done }
    })
    setStatuses(arr)

    const doneCount = arr.filter(s => s.isDone).length
    const total = arr.length
    setPercent(total > 0 ? Math.round((doneCount / total) * 100) : 0)

    // 7) Затем проверяем, не прошёл ли час с lastRefill – если да, сбрасываем attempts
    const { attempts, lastRefill } = loadAttemptsData()
    const hoursPassed = (Date.now() - lastRefill) / (1000 * 60 * 60)
    if (hoursPassed >= 1) {
      const resetData = { attempts: 10, lastRefill: Date.now() }
      localStorage.setItem(attemptsKey, JSON.stringify(resetData))
      setGlobalAttempts(10)
    } else {
      // Иначе просто читаем текущее число попыток
      setGlobalAttempts(attempts)
    }
  }, [CourseSlug, localStorage.getItem('course_update')])

  // 8) Выбираем файл-логотип для CourseHero
  const fileMap: Record<CourseKey, string> = {
    python:     'Python.svg',
    javascript: 'JavaScript.svg',
    csharp:     'Csharp.svg',
    java:       'Javadark.svg',
    sql:        'Sql.svg',
  }
  const logoFile = fileMap[slug] || 'default.svg'

  return (
    <div>
      {/* Шапка курса – показываем globalAttempts */}
      <CourseHeader attempts={globalAttempts} avatarUrl="/imgs/avatar.jpg" />
      <Breadcrumbs />
      <CourseHero
        title={`Introduction to ${CourseSlug}`}
        iconUrl={`/language-logos/${logoFile}`}
        percent={percent}
      />
      <SeparatorLine />
      <LessonSection
        courseSlug={slug}
        chapters={chapters}
        lessonStatuses={statuses}
      />
    </div>
  )
}
