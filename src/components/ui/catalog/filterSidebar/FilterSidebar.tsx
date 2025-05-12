// src/components/ui/catalog/filterSidebar/FilterSidebar.tsx

import React from 'react';
import styles from './FilterSidebar.module.css';

export interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
}

export interface FilterGroup {
  title: string;
  options: FilterOption[];
  onToggle: (id: string) => void;
}

interface FilterSidebarProps {
  groups: FilterGroup[];
}

export default function FilterSidebar({ groups }: FilterSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {groups.map((group, idx) => {
        // делаем первую букву названия группы строчной
        const prettyTitle =
          group.title.charAt(0).toLowerCase() + group.title.slice(1);

        return (
          <div key={group.title} className={styles.group}>
            <p className={styles.title}>
              <span className={styles.available}>Available</span>{' '}
              <span className={styles.highlight}>{prettyTitle}</span>:
            </p>
            <ul className={styles.options}>
              {group.options.map((opt) => (
                <li key={opt.id} className={styles.option}>
                  <label
                    className={`${styles.labelWrapper} ${
                      opt.disabled ? styles.disabled : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={opt.checked}
                      disabled={opt.disabled}
                      onChange={() =>
                        !opt.disabled && group.onToggle(opt.id)
                      }
                      className={styles.checkbox}
                    />
                    <span className={styles.labelText}>{opt.label}</span>
                  </label>
                </li>
              ))}
            </ul>

            {idx === 0 && <div className={styles.separator} />}
          </div>
        );
      })}
    </aside>
  );
}
