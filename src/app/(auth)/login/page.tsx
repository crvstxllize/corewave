'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
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

      <h1 className={styles.title}>Login to your Account</h1>

      {/* Дашевый, кликабельный разделитель */}
      <button
        type="button"
        className={styles.dividerButton}
        onClick={() => {
          /* TODO: здесь логика “Sign in with Email” */
        }}
      >
        <span>Sign in with Email</span>
      </button>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="gmail@abc.com"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            className={styles.input}
          />
        </div>

        {/* Remember Me + Forgot Password */}
        <div className={styles.options}>
          <label className={styles.checkboxContainer}>
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>
          <Link href="/auth/forgot" className={styles.forgot}>
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className={styles.submit}>
          Login
        </button>
      </form>

      <p className={styles.switch}>
        Not Registered Yet?{' '}
        <Link href="/register" className={styles.registerLink}>
          Create an account
        </Link>
      </p>
    </>
  );
}
