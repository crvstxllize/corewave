// src/components/ui/course/CourseHero.tsx
import styles from './CourseHero.module.css';

interface Props {
  title: string;
  iconUrl: string;
  percent: number;     // от 0 до 100
}

export default function CourseHero({ title, iconUrl, percent }: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.top}>
        <img src={iconUrl} alt="" className={styles.icon} />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.barBackground}>
        <div
          className={styles.barFilled}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
