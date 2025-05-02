// src/components/ui/about/marquee/Marquee.tsx
'use client'
import React, { useEffect, useState } from 'react'
import styles from './marquee.module.css'

interface MarqueeProps {
  text: string
  speed?: number      // длительность цикла в секундах
  delayMs?: number    // задержка старта в миллисекундах
}

export default function Marquee({
  text,
  speed = 25,
  delayMs = 0
}: MarqueeProps) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setPlaying(true), delayMs)
    return () => clearTimeout(timer)
  }, [delayMs])

  return (
    <div className={styles.marquee}>
      <div
        className={`${styles.track} ${playing ? styles.play : ''}`}
        style={{ animationDuration: `${speed}s`, animationDelay: `${delayMs}ms` }}
      >
        <span>{text}</span><span aria-hidden="true">{text}</span>
      </div>
    </div>
  )
}
