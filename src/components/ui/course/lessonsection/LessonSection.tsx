// src/components/ui/course/lessonsection/LessonSection.tsx
'use client'

import React, { useMemo } from 'react'
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
  // Вычисляем, сколько глав разблокировано
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

  return (
    <section className={styles.root}>
      {chapters.map((chap, idx) => {
        const locked = idx >= unlockedCount
        return (
          <div key={idx} className={styles.chapterWrapper}>
            <h3 className={styles.chapterTitle}>{chap.title}</h3>
            <div
              className={styles.cards}
              style={{ opacity: locked ? 0.5 : 1 }}
            >
              {chap.lessons.map((lesson) => {
                const status = lessonStatuses.find(s => s.slug === lesson.slug)
                const isDone = status?.isDone ?? false

                return (
                  <LessonCard
                    key={lesson.slug}
                    title={lesson.title}
                    description={lesson.description}
                    iconUrl={lesson.iconUrl}
                    completed={isDone}
                    href={`/profile/${courseSlug}/${lesson.slug}`}
                    disabled={locked}
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
