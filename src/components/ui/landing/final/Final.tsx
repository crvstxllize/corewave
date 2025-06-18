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
        threshold: 0.5, // когда 50% блока в зоне видимости
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
        Попробуй <span className={styles.highlight}>это сам.</span>
      </h2>
      <p className={styles.subtitle}>Ну… что ты скажешь об этом?)</p>
    </section>
  )
}
