// src/data/catalog/benefits.ts

export interface Benefit {
  id: string;
  icon: string;       // теперь путь к SVG
  title: string;
  highlight: string;  // часть заголовка, которую нужно выделить
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: 'foundation',
    icon: '/logos/ProgrammingIcon.svg',
    title: 'Надёжная основа программирования.',
    highlight: 'программирования',
    description:
      'Освой ключевые концепции, синтаксис и лучшие практики в ведущих языках программирования.',
  },
  {
    id: 'systems',
    icon: '/logos/SystemsIcon.svg',
    title: 'Понимание ИТ-систем.',
    highlight: 'ИТ-систем',
    description:
      'Узнай, как компьютеры, базы данных и сети взаимодействуют между собой.',
  },
  {
    id: 'problem',
    icon: '/logos/ProblemIcon.svg',
    title: 'Умение решать проблемы.',
    highlight: 'решать проблемы',
    description:
      'Развивай логическое мышление и навыки отладки, необходимые для программирования.',
  },
  {
    id: 'experience',
    icon: '/logos/ExperienceIcon.svg',
    title: 'Практический опыт.',
    highlight: 'опыт',
    description:
      'Решай реальные задачи по программированию и создавай практические проекты.',
  },
  {
    id: 'career',
    icon: '/logos/СareerIcon.svg',
    title: 'Карьерные навыки.',
    highlight: 'Карьерные',
    description:
      'Приобретай знания, которые подготовят тебя к работе в разработке ПО, кибербезопасности и не только.',
  },
  {
    id: 'learning',
    icon: '/logos/LearningIcon.svg',
    title: 'Удобное интерактивное обучение.',
    highlight: 'интерактивное обучение',
    description:
      'Вовлекайся в структурированные уроки, получай мгновенную обратную связь и продолжай учиться активно.',
  },
];