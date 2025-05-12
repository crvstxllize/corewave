'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { benefits, type Benefit } from '@/data/catalog/benefits';
import styles from './BenefitsSection.module.css';

export default function BenefitsSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <h2
        className={`${styles.heading} ${inView ? styles.animateHeading : ''}`}
        style={{ '--delay': '2s' } as React.CSSProperties}
      >
        <span className={styles.headingGrey}>What will</span>{' '}
        <span className={styles.headingWhite}>you gain</span>{' '}
        <span className={styles.headingGrey}>from</span>{' '}
        <span className={styles.headingWhite}>this</span>{' '}
        <span className={styles.headingGrey}>courses</span>
        <span className={styles.headingWhite}>?</span>
      </h2>

      <div className={styles.grid}>
        {benefits.map((b, i) => (
          <article
            key={b.id}
            className={`${styles.card} ${inView ? styles.animateCard : ''}`}
            style={{ '--delay': `${3 + i * 0.3}s` } as React.CSSProperties}
          >
            <div className={styles.icon}>
              <Image src={b.icon} alt={b.title} width={32} height={32} />
            </div>
            <div className={styles.content}>
              {renderTitle(b)}
              <p className={styles.desc}>{b.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function renderTitle({ title, highlight }: Benefit) {
  const [before, after] = title.split(highlight);
  return (
    <h3 className={styles.title}>
      {before}
      <span className={styles.highlight}>{highlight}</span>
      {after}
    </h3>
  );
}
