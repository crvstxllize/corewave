// src/components/ui/course/lessoncard/LessonCard.tsx
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './LessonCard.module.css'

export interface LessonCardProps {
  title: string
  description: string
  iconUrl: string
  completed: boolean
  href: string
  disabled?: boolean
}

export default function LessonCard({
  title,
  description,
  iconUrl,
  completed,
  href,
  disabled = false,
}: LessonCardProps) {
  const router = useRouter()
  return (
    <div
      className={styles.card}
      onClick={() => !disabled && router.push(href)}
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <img src={iconUrl} alt="" className={styles.icon} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div
        className={styles.sidebar}
        style={{ backgroundColor: completed ? '#BD3ECD' : '#000' }}
      />
    </div>
  )
}
