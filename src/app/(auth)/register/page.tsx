import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function RegisterPage() {
  return (
    <>
      <Image
        className={styles.logo}
        src="/imgs/MyLogo.svg"
        alt="CoreWave logo"
        width={120}
        height={120}
        priority
      />

      <h1 className={styles.title}>Register page placeholder</h1>

      <p className={styles.placeholder}>
        Регистрация пока недоступна — ждём интеграции с бэкендом.
        <br />
        Проверьте эту страницу чуть позже!
        <br />
        С уважением, Болатов Нурсерик!
      </p>

      <Link href="/login" className={styles.backLink}>
        ← Вернуться к Login
      </Link>
    </>
  );
}
