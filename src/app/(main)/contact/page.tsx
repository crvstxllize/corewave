'use client'

import React, { useEffect } from 'react'
import styles from './page.module.css'

export default function ContactPage() {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.divider} />

      <div className={styles.content}>
        <h1 className={styles.heading}>Контакты</h1>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.title}>
              <span>Номер</span>{' '}
              <span className={styles.secondary}>телефона:</span>
            </p>
            <p className={styles.value}>+7 (777) 777 777</p>
          </div>

          <div className={styles.column}>
            <p className={styles.title}>
              <span>Эл.</span>
              <span className={styles.secondary}>почта:</span>
            </p>
            <p className={styles.value}>educorewave@gmail.com</p>
          </div>

          <div className={styles.column}>
            <p className={styles.title}>
              <span>Для</span>{' '}
              <span className={styles.secondary}>сотрудничества</span>{' '}
              <span>и</span>{' '}
              <span className={styles.secondary}>рекламы:</span>
            </p>
            <p className={styles.value}>corewave@icloud.com</p>
          </div>
        </div>

        <div className={styles.officeSection}>
          <h2 className={styles.officeHeading}>Офис:</h2>
          <p className={styles.officeSubtitle}>Республика Казахстан, г. Алматы:</p>
          <p className={styles.officeText}>
            ул. Пушкина, 7 д. Калатушкина, 77 этаж, офис 777
          </p>
        </div>
      </div>
    </main>
  )
}
