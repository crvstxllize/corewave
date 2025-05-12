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
      'Each language opens new possibilities—whether it’s web development, data science, game creation, or automation. Pick one, start coding, and build your future.',
  },
  {
    id: 'directions',
    label: 'IT directions',
    description:
      'Every IT field opens up new horizons—whether it’s web development, programming or working with data. Master key technologies, start creating digital products and become a professional in your field.',
  },
  {
    id: 'systems',
    label: 'Computer Systems',
    description:
      'Discover the backbone of modern computing—hardware, operating systems, and networks. Learn how computers process information, how OS manage resources, and how networks connect the world.',
  },
];
