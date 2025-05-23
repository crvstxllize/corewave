'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!termsChecked) {
      setError('You must agree to the Terms of User.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, repeatPassword: confirmPassword })
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Registration failed.');
      }

      // Вывести уведомление и перенаправить на вход
      alert('Registration successful! Please log in.');
      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
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

      <h1 className={styles.title}>Create your Account</h1>
      <div className={styles.divider}>
        <span className={styles.dividerText}>Sign up with Email</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Name..."
            className={styles.input}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="mail@abc.com"
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

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Repeat Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="••••••••••••••••"
            className={styles.input}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={termsChecked}
            onChange={e => setTermsChecked(e.target.checked)}
          />
          <span>
            I agree to the&nbsp;
            <Link href="" className={styles.termsLink}>
              Terms of User
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className={styles.submit}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'} <span className={styles.arrow}>→</span>
        </button>
      </form>
    </div>
  );
}