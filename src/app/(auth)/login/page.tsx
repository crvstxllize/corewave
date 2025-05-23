'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Login failed.');
      }

      // Сохраняем токен
      if (rememberMe) {
        localStorage.setItem('token', data.token);
      } else {
        sessionStorage.setItem('token', data.token);
      }

      // Перенаправляем на профиль
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/imgs/MyLogo.svg"
        alt="CoreWave logo"
        width={120}
        height={120}
        priority
      />

      <h1 className={styles.title}>Login to your Account</h1>

      <button
        type="button"
        className={styles.dividerButton}
      >
        <span>Sign in with Email</span>
      </button>

      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="gmail@abc.com"
            className={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••••••••••"
            className={styles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.options}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            <span>Remember Me</span>
          </label>
          <Link href="/auth/forgot" className={styles.forgot}>
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className={styles.submit}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className={styles.switch}>
        Not Registered Yet?{' '}
        <Link href="/register" className={styles.registerLink}>
          Create an account
        </Link>
      </p>
    </div>
  );
}
