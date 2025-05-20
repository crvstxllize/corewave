// src/app/(dashboard)/profile/page.tsx
'use client';

import React from 'react';
import DashboardHeader from '@/components/layouts/header/dashboard/header';
import Footer from '@/components/layouts/footer/dashboard/footer';
import styles from './profile.module.css';

export default function ProfilePage() {
  return (
    <div className={styles.pageRoot}>
      {/* 1) Хэдер */}
      <DashboardHeader />

      {/* 2) Spacer: тянет футер вниз */}
      <div className={styles.spacer} />

      {/* 3) Футер */}
      <Footer />
    </div>
  );
}
