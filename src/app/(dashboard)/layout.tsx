// src/app/(dashboard)/layout.tsx
import React from 'react';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboardRoot}>
      {children}
    </div>
  );
}
