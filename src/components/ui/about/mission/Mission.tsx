'use client'
import React, { useEffect, useState } from 'react'
import styles from './mission.module.css'

export default function Mission() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000)
    const t2 = setTimeout(() => setStep(2), 2800)
    const t3 = setTimeout(() => setStep(3), 3600)
    const t4 = setTimeout(() => setStep(4), 4200)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [])

  return (
    <section className={styles.mission}>
      <div className={styles.lineWrapper}>
        <div
          className={`${styles.vertLine} ${step >= 1 ? styles.animateVert : ''}`}
        />
        <div
          className={`${styles.horizLine} ${step >= 2 ? styles.animateHoriz : ''}`}
        />
        {step >= 3 && <h2 className={styles.title}>Наша миссия.</h2>}
      </div>
      {step >= 4 && (
        <div className={styles.text}>
          <p>Наша миссия сделать обучение IT максимально доступным, понятным и полностью интерактивным для кажого.</p>
          <p>Мы создаём образовательную платформу, где каждый – от абсолютных новичков до опытных разработчиков – может без проблем изучать полные основы программирования, компьютерных систем и новейших технологий.</p>
          <p>CoreWave — это место, где теория плавно превращается в практику. Мы вдохновляем, обучаем и помогаем тебе легко освоить полезные навыки IT, которые действительно востребованы.</p>
          <p></p>
        </div>
      )}
    </section>
  )
}
