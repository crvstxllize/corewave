// components/layouts/header/main/Header.tsx
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

export default function MainHeader() {
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
          <button className={styles.lang}>Kaz</button>
          <button className={styles.lang}>Rus</button>
          <button className={`${styles.lang} ${styles.active}`}>Eng</button>
        </div>

        {/* Навигация */}
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>ABOUT US</Link>
          <Link href="/catalog" className={styles.navLink}>CATALOG</Link>
          <Link href="/contact" className={styles.navLink}>CONTACT</Link>
        </nav>

        {/* Кнопка входа */}
        <Link href="/sign-in" className={styles.signIn}>SIGN IN</Link>
      </div>
    </header>
  )
}
