// src/components/ui/landing/final/Final.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './final.module.css'

export default function Final() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // когда 10% блока в зоне видимости
      }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`${styles.final} ${visible ? styles.visible : ''}`}
    >
      <h2 className={styles.title}>
        Try <span className={styles.highlight}>it Yourself.</span>
      </h2>
      <p className={styles.subtitle}>So… What you tell about this?)</p>
    </section>
  )
}
