// src/components/layouts/footer/auth/footer.tsx
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>Copyright ©2025 CoreWave</p>
        <span className={styles.separator} />
        <nav className={styles.nav}>
          <a href="/about">About us</a>
          <a href="/catalog">Catalog</a>
          <a href="/contact">Contact</a>
          <a href="/">Landing</a>
        </nav>
      </div>
      <div className={styles.country}>
        <Image
          src="/icons/kz.png"
          alt="Kazakhstan"
          width={28}
          height={20}
          priority
        />
        <span>Kazakhstan</span>
      </div>
    </footer>
  );
}
