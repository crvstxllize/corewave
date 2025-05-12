// src/data/catalog/courses.ts

import { TabId } from './tabs';

export type Level = 'Introduction' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  tab: TabId;
  level: Level;
  /** короткое имя для фильтра */
  label: string;
  /** полный заголовок для карточки */
  title: string;
  description: string;
  /** Путь к SVG-иконке из public/logos */
  icon: string;
}

export const courses: Course[] = [
  // — Programming languages —
  {
    id: 'python',
    tab: 'programming',
    level: 'Introduction',
    label: 'Python',
    title: 'Python',
    description:
      'Learn the fundamentals of Python, from variables to basic data structures. Perfect for beginners starting their coding journey.',
    icon: '/logos/Python.svg',
  },
  {
    id: 'javascript',
    tab: 'programming',
    level: 'Introduction',
    label: 'JavaScript',
    title: 'JavaScript',
    description:
      'Start coding with JavaScript! Learn how to create interactive web experiences and understand the core principles of programming.',
    icon: '/logos/JavaScript.svg',
  },
  {
    id: 'csharp',
    tab: 'programming',
    level: 'Introduction',
    label: 'C#',
    title: 'C#',
    description:
      'Master the basics of C#: syntax, object-oriented programming, and data structures. A great start for building games and applications.',
    icon: '/logos/C-sharp.svg',
  },
  {
    id: 'java',
    tab: 'programming',
    level: 'Introduction',
    label: 'Java',
    title: 'Java',
    description:
      'Explore the core concepts of Java, from syntax to classes and methods. A great start for Android development and enterprise apps.',
    icon: '/logos/Java.svg',
  },
  {
    id: 'sql',
    tab: 'programming',
    level: 'Introduction',
    label: 'SQL',
    title: 'SQL',
    description:
      'Start working with databases! Learn SQL syntax, filtering, and data manipulation for real-world applications.',
    icon: '/logos/Sql.svg',
  },

  // — IT directions —
  {
    id: 'webdev',
    tab: 'directions',
    level: 'Introduction',
    label: 'Web-Development',
    title: 'Web-Development',
    description:
      'Learn the fundamentals of web development, from HTML and CSS to JavaScript basics. Build interactive websites and gain the skills needed to start your journey.',
    icon: '/logos/WebLogo.svg',
  },
  {
    id: 'datascience',
    tab: 'directions',
    level: 'Introduction',
    label: 'Data Science',
    title: 'Data Science',
    description:
      'Learn the fundamentals of Data Science, from data collection and processing to visualization and basic machine learning concepts.',
    icon: '/logos/DataScienceLogo.svg',
  },
  {
    id: 'cybersecurity',
    tab: 'directions',
    level: 'Introduction',
    label: 'CyberSecurity',
    title: 'CyberSecurity',
    description:
      'Defend systems, secure networks, and outsmart hackers. Dive into the world of cybersecurity, where you’ll master encryption and ethical hacking.',
    icon: '/logos/SecurityLogo.svg',
  },
  {
    id: 'android',
    tab: 'directions',
    level: 'Introduction',
    label: 'Android Development',
    title: 'Android Development',
    description:
      'Turn your ideas into mobile apps! Learn how to build Android applications from scratch using Java/Kotlin.',
    icon: '/logos/AndroidLogo.svg',
  },
  {
    id: 'ai',
    tab: 'directions',
    level: 'Introduction',
    label: 'Artificial Intelligence',
    title: 'Artificial Intelligence',
    description:
      'Step into the world of AI! Learn the fundamentals of machine learning, neural networks, and data-driven decision-making.',
    icon: '/logos/Artificial Intelligence.svg',
  },

  // — Computer Systems —
  {
    id: 'architecture',
    tab: 'systems',
    level: 'Introduction',
    label: 'Computer Architecture',
    title: 'Computer Architecture',
    description:
      'Understand how computers work at their core! Learn about CPUs, memory, and data processing. Explore the principles of computer architecture.',
    icon: '/logos/Architecture.svg',
  },
  {
    id: 'os',
    tab: 'systems',
    level: 'Introduction',
    label: 'Operating Systems',
    title: 'Operating Systems',
    description:
      'Uncover the inner workings of operating systems! Learn how OS manage processes, memory, and storage.',
    icon: '/logos/OS.svg',
  },
  {
    id: 'networks',
    tab: 'systems',
    level: 'Introduction',
    label: 'Computer Networks',
    title: 'Computer Networks',
    description:
      'Dive into the world of computer networks! Learn how data travels across the internet, explore key networking concepts like IP, DNS, and TCP/IP.',
    icon: '/logos/Networks.svg',
  },
];
