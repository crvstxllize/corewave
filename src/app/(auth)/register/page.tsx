'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function RegisterPage() {
  return (
    <>
      {/* Логотип-линк */}
      <Link href="/login" passHref>
        <Image
          className={styles.logo}
          src="/imgs/MyLogo.svg"
          alt="CoreWave logo"
          width={120}
          height={120}
          priority
        />
      </Link>

      {/* Заголовок */}
      <h1 className={styles.title}>Create your Account</h1>

      {/* Разделитель */}
      <div className={styles.divider}>
        <span className={styles.dividerText}>Sign up with Email</span>
      </div>

      <form className={styles.form}>
        {/* Username */}
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Name..."
            className={styles.input}
          />
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="mail@abc.com"
            className={styles.input}
          />
        </div>

        {/* Password */}
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            className={styles.input}
          />
        </div>

        {/* Repeat Password */}
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Repeat Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="••••••••••••••••"
            className={styles.input}
          />
        </div>

        {/* Terms checkbox */}
        <label className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span>
            I agree to the&nbsp;
            <Link href="" className={styles.termsLink}>
              Terms of User
            </Link>
          </span>
        </label>

        {/* Кнопка отправки, выровнена вправо */}
        <button type="submit" className={styles.submit}>
          Sign Up <span className={styles.arrow}>→</span>
        </button>
      </form>
    </>
  );
}
