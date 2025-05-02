// src/components/ui/about/mission/Mission.tsx
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
        {step >= 3 && <h2 className={styles.title}>Our mission.</h2>}
      </div>
      {step >= 4 && (
        <div className={styles.text}>
          <p>Our mission is to make learning IT accessible, understandable and interactive.</p>
          <p>We are creating an educational platform where everyone – from beginners to experienced developers – can learn the basics of programming, computer systems and new technologies.</p>
          <p>CoreWave — is a place where theory turns into practice. We inspire, educate and help you learn IT skills that are really in demand.</p>
        </div>
      )}
    </section>
  )
}
