'use client';

import { useState } from 'react';
import { tabs, type Tab } from '@/data/catalog/tabs';
import { courses, type Level } from '@/data/catalog/courses';

import WayLink, { WayLinkItem } from '@/components/ui/catalog/wayLink/WayLink';
import TabMenu from '@/components/ui/catalog/tabMenu/TabMenu';
import Divider from '@/components/ui/catalog/divider/Divider';
import FilterSidebar, {
  type FilterGroup,
  type FilterOption,
} from '@/components/ui/catalog/filterSidebar/FilterSidebar';

import CourseList from '@/components/ui/catalog/courseList/CourseList';
import { CourseCardData } from '@/components/ui/catalog/courseCard/CourseCard';

import Divider2 from '@/components/ui/catalog/divider2/Divider2';
import BenefitsSection from '@/components/ui/catalog/benefitsSection/BenefitsSection';
import Footer from '@/components/ui/about/footer/Footer';

import styles from './page.module.css';

export default function CatalogPage() {
  // Текущий активный таб
  const [activeTab, setActiveTab] = useState<Tab['id']>(tabs[0].id);

  // Выбранные фильтры
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<Level[]>([]);

  // 1) Берём все курсы для текущего таба
  const filteredByTab = courses.filter((c) => c.tab === activeTab);

  // 2) Формируем опции фильтров для сайдбара
  const categoryOptions: FilterOption[] = filteredByTab.map((c) => {
    let disabled = false;
    if (activeTab === 'directions') {
      disabled = !['webdev', 'datascience'].includes(c.id);
    } else if (activeTab === 'systems') {
      disabled = c.id !== 'architecture';
    }
    return {
      id: c.id,
      label: c.title,                       // <-- здесь остаётся просто "Python", "JavaScript" и т.д.
      checked: selectedCourses.includes(c.id),
      disabled,
    };
  });

  const levelOptions: FilterOption[] = (
    ['Introduction', 'Intermediate', 'Advanced'] as Level[]
  ).map((lvl) => ({
    id: lvl,
    label: lvl,
    checked: selectedLevels.includes(lvl),
    disabled: lvl !== 'Introduction',
  }));

  function toggleCourse(id: string) {
    setSelectedCourses((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }
  function toggleLevel(id: string) {
    const lvl = id as Level;
    setSelectedLevels((prev) =>
      prev.includes(lvl) ? prev.filter((x) => x !== lvl) : [...prev, lvl]
    );
  }

  const groups: FilterGroup[] = [
    {
      title: tabs.find((t) => t.id === activeTab)!.label,
      options: categoryOptions,
      onToggle: toggleCourse,
    },
    {
      title: `${tabs.find((t) => t.id === activeTab)!.label} levels`,
      options: levelOptions,
      onToggle: toggleLevel,
    },
  ];

  // 5) Данные для CourseList — здесь добавляем "Introduction to " к заголовку карточки
  const listData: CourseCardData[] = filteredByTab
    // фильтрация по выбранным курсам
    .filter((c) =>
      selectedCourses.length === 0 ? true : selectedCourses.includes(c.id)
    )
    // фильтрация по уровням
    .filter((c) =>
      selectedLevels.length === 0 ? true : selectedLevels.includes(c.level)
    )
    // и мапим в формат, который ждёт CourseList
    .map((c) => {
      const catOpt = categoryOptions.find((opt) => opt.id === c.id);
      return {
        id: c.id,
        icon: c.icon,
        title: `Introduction to ${c.title}`,  // <-- вот тут
        description: c.description,
        disabled: catOpt?.disabled ?? false,
      };
    });

  // Хлебные крошки
  const crumbs: WayLinkItem[] = [
    { label: 'Landing', href: '/' },
    { label: 'Course catalog:' },
  ];

  return (
    <>
      <WayLink items={crumbs} />

      <TabMenu
        tabs={tabs}
        activeTabId={activeTab}
        onTabChange={setActiveTab}
      />

      <Divider />

      <div className={styles.contentWrapper}>
        <FilterSidebar groups={groups} />
        <CourseList courses={listData} />
      </div>

      <Divider2 />

      <BenefitsSection />
      
      <Footer />

    </>
  );
}
