// src/data/catalog/tabs.ts

export type TabId = 'programming' | 'directions' | 'systems';

export interface Tab {
  id: TabId;
  label: string;
  description: string;
}

export const tabs: Tab[] = [
  {
    id: 'programming',
    label: 'Programming languages',
    description:
      'Каждый язык открывает новые возможности—будь то веб‑разработка, анализ данных, создание игр или автоматизация процессов. Выбери один, начни кодить и строй своё будущее.',
  },
  {
    id: 'directions',
    label: 'IT directions',
    description:
      'Каждая область IT открывает новые горизонты—будь то веб‑разработка, программирование или работа с данными. Начни создавать современные и разнообразные цифровые продукты и стань профессионалом в своей сфере.',
  },
  {
    id: 'systems',
    label: 'Computer Systems',
    description:
      'Открой основу современного аппаратного обеспечение, операционных систем и сетей. Узнай, как компьютеры обрабатывают данные, как ОС управляют ресурсами и как сети соединяют весь мир.',
  },
];
