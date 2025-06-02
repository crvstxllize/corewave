// src/components/ui/course/lessonsection/LessonSection.tsx
'use client'

import React, { useMemo } from 'react'
import LessonCard from '../lessoncard/LessonCard'
import type { Chapter } from '@/data/dashboard/Course/lessonConfig'
import styles from './LessonSection.module.css'

interface Props {
  courseSlug: string        // теперь передаём здесь
  chapters: Chapter[]
}

export default function LessonSection({ courseSlug, chapters }: Props) {
  const unlockedCount = useMemo(() => {
    let count = 1
    for (let i = 0; i < chapters.length; i++) {
      if (i < count && chapters[i].lessons.every(l => l.completed)) {
        count++
      }
    }
    return Math.min(count, chapters.length)
  }, [chapters])

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
              {chap.lessons.map(lesson => (
                <LessonCard
                  key={lesson.slug}
                  title={lesson.title}
                  description={lesson.description}
                  iconUrl={lesson.iconUrl}
                  completed={lesson.completed}
                  href={`/profile/${courseSlug}/${lesson.slug}`}
                  disabled={locked}
                />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
