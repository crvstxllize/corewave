// src/components/ui/about/aboutSection/AboutSection.tsx
'use client'
import React, { useEffect, useState } from 'react'
import styles from './aboutus.module.css'

export default function AboutSection() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000)  // рисуем линию слева→справа
    const t2 = setTimeout(() => setStep(2), 3600)  // показываем заголовок
    const t3 = setTimeout(() => setStep(3), 4200)  // первый абзац
    const t4 = setTimeout(() => setStep(4), 4800)  // второй абзац
    const t5 = setTimeout(() => setStep(5), 5400)  // третий абзац
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.lineWrapper}>
        <div
          className={`${styles.horizLine} ${step >= 1 ? styles.animateHoriz : ''}`}
        />
        {step >= 2 && (
          <h2 className={styles.title}>About CoreWave.</h2>
        )}
      </div>
      {step >= 3 && (
        <div className={styles.text}>
          <p className={step >= 3 ? styles.fadeIn : ''}>
            As a software development student, I wanted to build something practical,
            something that could help beginners and aspiring developers gain real skills
            in programming, databases, operating systems, and computer hardware.
          </p>
          <p className={step >= 4 ? styles.fadeIn : ''}>
            This project is my attempt to combine knowledge, technology, and usability
            into a single learning hub.
          </p>
          <p className={step >= 5 ? styles.fadeIn : ''}>
            CoreWave — is more than just an educational platform—it’s my final-year
            diploma project, designed to bring structured, accessible, and interactive
            IT learning to a wider audience.
          </p>
        </div>
      )}
    </section>
  )
}
