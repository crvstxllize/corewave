// components/layouts/footer/main/Footer.tsx
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />

      <div className={styles.madeBy}>
        Made by <span className={styles.author}>Crvstxlize</span>
      </div>

      <div className={styles.bottom}>
        <div className={styles.links}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/imgs/github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/imgs/twitter.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a
            href="https://discord.gg/yourserver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/imgs/discord.svg" alt="Discord" width={24} height={24} />
          </a>
        </div>

        <div className={styles.copy}>Copyright ©2025 Corewave</div>
      </div>
    </footer>
  )
}
