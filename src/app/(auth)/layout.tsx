import { ReactNode } from 'react';
import styles from './auth.module.css';
import Footer from '@/components/layouts/footer/auth/footer';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.authWrapper}>
      <main className={styles.content}>
        <div className={styles.authCard}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
