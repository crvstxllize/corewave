// src/components/ui/catalog/courseCard/CourseCard.tsx

import Link from 'next/link'
import Image from 'next/image'
import styles from './CourseCard.module.css'

export interface CourseCardData {
  id: string
  title: string
  description: string
  icon: string
  disabled?: boolean
}

// Теперь только один дополнительный проп
interface CourseCardProps extends CourseCardData {
  revealed?: boolean;
}

export default function CourseCard({
  title,
  description,
  icon,
  disabled = false,
  revealed = false,
}: CourseCardProps) {
  const style = {
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
  };

  const classNames = [
    styles.card,
    revealed && disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <div className={styles.icon}>
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </>
  );

  if (disabled) {
    return (
      <div className={classNames} style={style}>
        {content}
      </div>
    );
  }
  return (
    <Link href="/login" className={classNames} style={style} prefetch={false}>
      {content}
    </Link>
  );
}
