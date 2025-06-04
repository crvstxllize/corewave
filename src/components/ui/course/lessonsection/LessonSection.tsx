// src/components/ui/course/lessonsection/LessonSection.tsx
'use client'

import React, { useMemo, useState, useEffect } from 'react'
import LessonCard from '../lessoncard/LessonCard'
import type { Chapter } from '@/data/dashboard/Course/lessonConfig'
import styles from './LessonSection.module.css'

interface LessonStatus {
  slug: string
  isDone: boolean
}

interface Props {
  courseSlug: string
  chapters: Chapter[]
  lessonStatuses?: LessonStatus[]
}

export default function LessonSection({
  courseSlug,
  chapters,
  lessonStatuses = [],
}: Props) {
  // 1) Вычисляем, сколько глав разблокировано по пройденным урокам
  const unlockedCount = useMemo(() => {
    let count = 1
    for (let i = 0; i < chapters.length; i++) {
      if (i < count) {
        const allDone = chapters[i].lessons.every((lesson) => {
          const status = lessonStatuses.find(s => s.slug === lesson.slug)
          return status?.isDone === true
        })
        if (allDone) count++
      }
    }
    return Math.min(count, chapters.length)
  }, [chapters, lessonStatuses])

  // 2) Подгружаем глобальные попытки текущего пользователя из localStorage
  const [globalAttempts, setGlobalAttempts] = useState<number>(10)

  useEffect(() => {
    const storedUserId = localStorage.getItem('currentUserId') ?? 'guest'
    const attemptsKey = `user_${storedUserId}_attemptsData`
    const saved = localStorage.getItem(attemptsKey)
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as { attempts: number; lastRefill: number }
        // Проверим, не нужно ли сбросить из‐за часа
        const hoursPassed = (Date.now() - parsed.lastRefill) / (1000 * 60 * 60)
        if (hoursPassed >= 1) {
          // Сбрасываем на 10 сразу, если прошёл час
          const resetData = { attempts: 10, lastRefill: Date.now() }
          localStorage.setItem(attemptsKey, JSON.stringify(resetData))
          setGlobalAttempts(10)
        } else {
          setGlobalAttempts(parsed.attempts)
        }
      } catch {
        setGlobalAttempts(0)
      }
    }
  }, [])

  return (
    <section className={styles.root}>
      {chapters.map((chap, idx) => {
        const lockedByChapter = idx >= unlockedCount
        return (
          <div key={idx} className={styles.chapterWrapper}>
            <h3 className={styles.chapterTitle}>{chap.title}</h3>
            <div
              className={styles.cards}
              style={{ opacity: lockedByChapter ? 0.5 : 1 }}
            >
              {chap.lessons.map((lesson) => {
                const status = lessonStatuses.find(s => s.slug === lesson.slug)
                const isDone = status?.isDone ?? false

                // Если попыток нет – полностью блокируем все карточки
                const disabledForAttempts = globalAttempts <= 0

                return (
                  <LessonCard
                    key={lesson.slug}
                    title={lesson.title}
                    description={lesson.description}
                    iconUrl={lesson.iconUrl}
                    completed={isDone}
                    href={`/profile/${courseSlug}/${lesson.slug}`}
                    // Дизейблим по двум причинам:
                    // 1) Если глава ещё не разблокирована
                    // 2) Если у пользователя 0 попыток
                    disabled={lockedByChapter || disabledForAttempts}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}
