import Link from 'next/link';
import styles from './WayLink.module.css';

export interface WayLinkItem {
  label: string;
  href?: string;
}

interface WayLinkProps {
  items: WayLinkItem[];
}

export default function WayLink({ items }: WayLinkProps) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className={styles.item}>
            {item.href && !isLast ? (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
            {!isLast && <span className={styles.separator}>&gt;</span>}
          </span>
        );
      })}
    </nav>
  );
}
