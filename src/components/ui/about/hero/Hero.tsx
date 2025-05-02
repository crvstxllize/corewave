// src/components/ui/about/hero/Hero.tsx
'use client'

import React, { useEffect, useState } from 'react'
import styles from './hero.module.css'

const RANDOM_CHARS = '!@#$%^&*()_+-=[]{}|;:<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function Hero() {
  const text = 'About us'

  // Массив текущих символов
  const [displayChars, setDisplayChars] = useState<string[]>(
    Array(text.length).fill(' ')
  )
  // Сколько символов уже «открыто»
  const [revealIndex, setRevealIndex] = useState(0)
  // Флаг старта анимации
  const [startTyping, setStartTyping] = useState(false)

  // Задержка перед запуском печати
  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!startTyping) return
    let isMounted = true

    const animateLetter = (i: number) =>
      new Promise<void>(resolve => {
        const flickerCount = 5
        const flickerSpeed = 150
        let step = 0
        const t = setInterval(() => {
          if (!isMounted) { clearInterval(t); return }
          if (step < flickerCount) {
            setDisplayChars(prev => {
              const cp = [...prev]
              cp[i] = RANDOM_CHARS[
                Math.floor(Math.random() * RANDOM_CHARS.length)
              ]
              return cp
            })
          } else {
            clearInterval(t)
            setDisplayChars(prev => {
              const cp = [...prev]
              cp[i] = text[i]
              return cp
            })
            resolve()
          }
          step++
        }, flickerSpeed)
      })

    ;(async () => {
      for (let i = 0; i < text.length; i++) {
        if (!isMounted) break

        if (text[i] === ' ') {
          setDisplayChars(prev => {
            const cp = [...prev]
            cp[i] = ' '
            return cp
          })
        } else {
          await animateLetter(i)
        }

        setRevealIndex(idx => idx + 1)
        // Пауза перед следующим символом
        await new Promise(res => setTimeout(res, 500))
      }
    })()

    return () => { isMounted = false }
  }, [startTyping])

  // Строим части строки
  const fixed = displayChars.slice(0, revealIndex).join('')
  const flicker =
    revealIndex < displayChars.length ? displayChars[revealIndex] : ''
  const suffix = displayChars.slice(revealIndex + 1).join('')

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        {fixed}
        {flicker}
        {/* Курсор показываем только пока revealIndex < text.length */}
        {revealIndex < text.length && (
          <span className={styles.cursor}>|</span>
        )}
        {suffix}
      </h1>
    </section>
  )
}
