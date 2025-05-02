'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './DiagonalDivider.module.css';

interface DiagonalDividerProps {
  angle: number;           // угол линии
  top: string;             // смещение от верха (например "40vh")
  left?: string;           // смещение от левого края
  right?: string;          // или от правого края
  length?: string;         // длина линии (например "120%")
  thickness?: string;      // толщина (например "3px")
  color?: string;          // цвет линии
  origin?: string;         // точка поворота (например "100% 0")
  threshold?: number;      // IntersectionObserver.threshold
  rootMargin?: string;     // IntersectionObserver.rootMargin
}

export default function DiagonalDivider({
  angle,
  top,
  left,
  right,
  length = '100%',
  thickness = '3px',
  color = '#333333',
  origin = '0 0',
  threshold = 0,           // срабатываем сразу, как только хоть часть линии видна
  rootMargin = '0px',      // без дополнительного смещения
}: DiagonalDividerProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!lineRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(lineRef.current);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={lineRef}
      className={`${styles.divider} ${visible ? styles.visible : ''}`}
      style={{
        top,
        left,
        right,
        '--target-width': length,
        '--thickness': thickness,
        '--color': color,
        '--angle': `${angle}deg`,
        '--origin': origin,
      } as React.CSSProperties}
    />
  );
}
