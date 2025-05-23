// components/ui/profile/breadcrumbs/Breadcrumbs.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  mapping?: Record<string, string>;
}

export default function Breadcrumbs({ mapping }: BreadcrumbsProps) {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((seg, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/');
    const label =
      mapping?.[seg] ??
      seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>
            Landing
          </Link>
        </li>

        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className={styles.item}>
            <span className={styles.sep}>&gt;</span>
            {i === crumbs.length - 1 ? (
              <span className={styles.current}>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className={styles.link}>
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
