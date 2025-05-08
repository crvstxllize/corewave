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
        <h1 className={styles.heading}>Contacts</h1>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.title}>
              <span>Phone</span>{' '}
              <span className={styles.secondary}>number:</span>
            </p>
            <p className={styles.value}>+7 (777) 777 777</p>
          </div>

          <div className={styles.column}>
            <p className={styles.title}>
              <span>e-</span>
              <span className={styles.secondary}>mail:</span>
            </p>
            <p className={styles.value}>educorewave@gmail.com</p>
          </div>

          <div className={styles.column}>
            <p className={styles.title}>
              <span>For</span>{' '}
              <span className={styles.secondary}>cooperation</span>{' '}
              <span>and</span>{' '}
              <span className={styles.secondary}>advertising:</span>
            </p>
            <p className={styles.value}>corewave@icloud.com</p>
          </div>
        </div>

        <div className={styles.officeSection}>
          <h2 className={styles.officeHeading}>
            Office:
          </h2>
          <p className={styles.officeSubtitle}>
            Republic of Kazakhstan, Almaty:
          </p>
          <p className={styles.officeText}>
            st. Pushkina, h. Kalatushkina, 777th floor, 777 office
          </p>
        </div>
      </div>
    </main>
  )
}
