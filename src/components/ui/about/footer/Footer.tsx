// ui/about/final/Footer.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import styles from './footer.module.css'

export default function Footer() {
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
      { root: null, rootMargin: '0px', threshold: 0.1 }
    )

    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <footer
      ref={ref}
      className={`${styles.footer} ${visible ? styles.visible : ''}`}
    >
      {/* 1) линия */}
      <div className={styles.lineContainer}>
        <div className={styles.line} />
      </div>

      {/* 2) Made by */}
      <div className={styles.madeBy}>
        Made by <span className={styles.author}>Crvstxlize</span>
      </div>

      {/* 3) Ссылки + копирайт */}
      <div className={styles.bottom}>
        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/join"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/Github.svg"
                alt="GitHub"
                width={24}
                height={24}
                draggable={false}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/Twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                draggable={false}
              />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/Discord.svg"
                alt="Discord"
                width={24}
                height={24}
                draggable={false}
              />
            </a>
          </li>
        </ul>
        <div className={styles.copy}>Copyright © 2025 Corewave</div>
      </div>
    </footer>
  )
}
