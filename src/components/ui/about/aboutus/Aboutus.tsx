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
          <h2 className={styles.title}>О CoreWave.</h2>
        )}
      </div>
      {step >= 3 && (
        <div className={styles.text}>
          <p className={step >= 3 ? styles.fadeIn : ''}>
            Как студент по разработке ПО, я хотел создать что-то практичное, что помогло бы новичкам и начинающим разработчикам приобрести реальные навыки в программировании, работе с базами данных, операционных системах и аппаратном обеспечении компьютеров.
          </p>
          <p className={step >= 4 ? styles.fadeIn : ''}>
            Этот проект — моя попытка объединить знания, технологии и удобство использования в едином учебном центре.
          </p>
          <p className={step >= 5 ? styles.fadeIn : ''}>
            CoreWave — это не просто образовательная платформа; это мой выпускной дипломный проект, призванный предоставить структурированное, доступное и интерактивное обучение IT для широкой аудитории.
          </p>
        </div>
      )}
    </section>
  )
}
