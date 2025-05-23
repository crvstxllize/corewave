// src/components/common/notification/Notification.tsx
'use client';

import React, { useEffect } from 'react';
import styles from './Notification.module.css';

interface NotificationProps {
  /** Текст уведомления, например "Successful" или "Failure" */
  message: string;
  /** 'success' или 'error' */
  type: 'success' | 'error';
  /** Коллбек для скрытия уведомления */
  onClose: () => void;
  /** Время жизни уведомления в мс (по умолчанию 5000) */
  duration?: number;
}

export default function Notification({ message, type, onClose, duration = 5000 }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  // Иконочные SVG-файлы лежат в public/icons/
  const iconSrc = type === 'success'
    ? '/icons/notification.svg'
    : '/icons/failure.svg';

  return (
    <div className={[styles.toast, styles[type]].join(' ')}>
      <img
        src={iconSrc}
        alt={type === 'success' ? 'Success icon' : 'Error icon'}
        className={styles.icon}
      />
      <span className={styles.text}>{message}</span>
    </div>
  );
}
