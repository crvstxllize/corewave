'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './header.module.css'

export default function MainHeader() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Линк на главную и логотип */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/imgs/corewave-logo.svg"
            alt="CoreWave"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Переключатель языков */}
        <div className={styles.langSwitcher}>
          <button className={styles.lang}>Қаз</button>
          <button className={styles.lang}>Рус</button>
          <button className={`${styles.lang} ${styles.active}`}>Eng</button>
        </div>

        {/* Навигация */}
        <nav className={styles.nav}>
          <Link
            href="/about"
            className={`${styles.navLink} ${
              pathname === '/about' ? styles.navLinkActive : ''
            }`}
          >
            О НАС
          </Link>
          <Link
            href="/catalog"
            className={`${styles.navLink} ${
              pathname === '/catalog' ? styles.navLinkActive : ''
            }`}
          >
            КАТАЛОГ
          </Link>
          <Link
            href="/contact"
            className={`${styles.navLink} ${
              pathname === '/contact' ? styles.navLinkActive : ''
            }`}
          >
            КОНТАКТЫ
          </Link>
        </nav>

        {/* Кнопка входа */}
        <Link href="/login" className={styles.signIn}>
          ВОЙТИ
        </Link>
      </div>
    </header>
  )
}
