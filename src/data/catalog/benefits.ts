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
    title: 'Strong Programming Foundation.',
    highlight: 'Programming',
    description:
      'Master core concepts, syntax, and best practices in top programming languages.',
  },
  {
    id: 'systems',
    icon: '/logos/SystemsIcon.svg',
    title: 'Understanding of IT Systems.',
    highlight: 'IT Systems',
    description:
      'Learn how computers, databases, and networks work together.',
  },
  {
    id: 'problem',
    icon: '/logos/ProblemIcon.svg',
    title: 'Problem-Solving Mindset.',
    highlight: 'Problem-Solving',
    description:
      'Develop logical thinking and debugging skills essential for coding.',
  },
  {
    id: 'experience',
    icon: '/logos/ExperienceIcon.svg',
    title: 'Hands-on Experience.',
    highlight: 'Experience',
    description:
      'Solve real-world coding challenges and build practical projects.',
  },
  {
    id: 'career',
    icon: '/logos/СareerIcon.svg',
    title: 'Career-Ready Skills.',
    highlight: 'Career-Ready',
    description:
      'Gain knowledge that prepares you for jobs in software development, cybersecurity, and more.',
  },
  {
    id: 'learning',
    icon: '/logos/LearningIcon.svg',
    title: 'Convenient Interactive Learning.',
    highlight: 'Interactive Learning',
    description:
      'Engage with structured lessons, instant feedback, and designed to keep you actively learning.',
  },
];
