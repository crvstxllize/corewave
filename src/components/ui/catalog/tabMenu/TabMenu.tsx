import React from 'react';
import { Tab } from '@/data/catalog/tabs';
import styles from './TabMenu.module.css';

interface TabMenuProps {
  tabs: Tab[];
  activeTabId: Tab['id'];
  onTabChange: (id: Tab['id']) => void;
}

export default function TabMenu({ tabs, activeTabId, onTabChange }: TabMenuProps) {
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{activeTab.label}</h1>

      <div className={styles.menu}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabItem} ${
              activeTabId === tab.id ? styles.active : ''
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className={styles.description}>{activeTab.description}</p>
    </div>
  );
}
