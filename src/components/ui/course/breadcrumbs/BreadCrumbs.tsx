'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './BreadCrumbs.module.css';

export default function CourseBreadcrumbs() {
  // Говорим: уверен, что это string
  const { CourseSlug } = useParams() as { CourseSlug: string };

  const language =
    CourseSlug.charAt(0).toUpperCase() + CourseSlug.slice(1);

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <Link href="/" className={styles.link}>Landing</Link>
      <span className={styles.sep}>&gt;</span>

      <Link href="/profile" className={styles.link}>Profile</Link>
      <span className={styles.sep}>&gt;</span>

      <span className={styles.current}>{`${language}(Introduction)`}</span>
    </nav>
  );
}
