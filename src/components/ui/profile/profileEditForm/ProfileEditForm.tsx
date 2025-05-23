// components/ui/profile/profileEditForm/ProfileEditForm.tsx
'use client';

import React from 'react';
import styles from './ProfileEditForm.module.css';

export default function ProfileEditForm() {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Change:</h3>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your new Email-address"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="username" className={styles.label}>Username</label>
        <input
          id="username"
          type="text"
          placeholder="Your new Username"
          className={styles.input}
        />
      </div>

      <button
        type="button"
        className={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')}
      >
        Change This Account
      </button>
    </div>
  );
}
