// src/data/catalog/courses.ts

import { TabId } from './tabs';

export type Level = 'Начальный' | 'Средний' | 'Продвинутый';

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
  // — Языки программирования —
  {
    id: 'python',
    tab: 'programming',
    level: 'Начальный',
    label: 'Python',
    title: 'Python',
    description:
      'Изучи основы Python: от переменных до базовых структур данных. Идеально для новичков, начинающих путь в программировании.',
    icon: '/logos/Python.svg',
  },
  {
    id: 'javascript',
    tab: 'programming',
    level: 'Начальный',
    label: 'JavaScript',
    title: 'JavaScript',
    description:
      'Начни кодить на JavaScript! Узнай, как создавать интерактивные веб-страницы и пойми базовые принципы программирования.',
    icon: '/logos/JavaScript.svg',
  },
  {
    id: 'csharp',
    tab: 'programming',
    level: 'Начальный',
    label: 'C#',
    title: 'C#',
    description:
      'Освой базовый синтаксис C#, объектно-ориентированное программирование и структуры данных. Отличный старт для создания игр и приложений.',
    icon: '/logos/C-sharp.svg',
  },
  {
    id: 'java',
    tab: 'programming',
    level: 'Начальный',
    label: 'Java',
    title: 'Java',
    description:
      'Изучи ключевые концепции Java: от синтаксиса до классов и методов. Отличный выбор для разработки Android и корпоративных приложений.',
    icon: '/logos/Java.svg',
  },
  {
    id: 'sql',
    tab: 'programming',
    level: 'Начальный',
    label: 'SQL',
    title: 'SQL',
    description:
      'Начни работать с базами данных! Изучи синтаксис SQL, фильтрацию и манипуляцию данными для реальных приложений.',
    icon: '/logos/Sql.svg',
  },

  // — Направления ИТ —
  {
    id: 'webdev',
    tab: 'directions',
    level: 'Начальный',
    label: 'Веб-разработка',
    title: 'Веб-разработка',
    description:
      'Изучи основы веб-разработки — от HTML и CSS до базового JavaScript. Создавай интерактивные сайты и получай навыки для старта.',
    icon: '/logos/WebLogo.svg',
  },
  {
    id: 'datascience',
    tab: 'directions',
    level: 'Начальный',
    label: 'Анализ данных',
    title: 'Анализ данных',
    description:
      'Освой основы Data Science: от сбора и обработки данных до визуализации и базовых методов машинного обучения.',
    icon: '/logos/DataScienceLogo.svg',
  },
  {
    id: 'cybersecurity',
    tab: 'directions',
    level: 'Начальный',
    label: 'Кибербезопасность',
    title: 'Кибербезопасность',
    description:
      'Защищай системы, укрепляй сети и опережай хакеров. Погрузись в мир кибербезопасности и изучи шифрование и этичный взлом.',
    icon: '/logos/SecurityLogo.svg',
  },
  {
    id: 'android',
    tab: 'directions',
    level: 'Начальный',
    label: 'Разработка Android',
    title: 'Разработка Android',
    description:
      'Воплоти идеи в мобильные приложения! Узнай, как создавать приложения для Android с нуля на Java и Kotlin.',
    icon: '/logos/AndroidLogo.svg',
  },
  {
    id: 'ai',
    tab: 'directions',
    level: 'Начальный',
    label: 'Искусственный интеллект',
    title: 'Искусственный интеллект',
    description:
      'Шагни в мир AI! Изучи основы машинного обучения, нейронных сетей и принятия решений на основе данных.',
    icon: '/logos/Artificial Intelligence.svg',
  },

  // — Компьютерные системы —
  {
    id: 'architecture',
    tab: 'systems',
    level: 'Начальный',
    label: 'Архитектура компьютеров',
    title: 'Архитектура компьютеров',
    description:
      'Пойми, как работают компьютеры в глубине! Изучи CPU, память и обработку данных. Открой принципы архитектуры.',
    icon: '/logos/Architecture.svg',
  },
  {
    id: 'os',
    tab: 'systems',
    level: 'Начальный',
    label: 'Операционные системы',
    title: 'Операционные системы',
    description:
      'Разбери внутреннюю работу ОС! Узнай, как операционные системы управляют процессами, памятью и хранилищем.',
    icon: '/logos/OS.svg',
  },
  {
    id: 'networks',
    tab: 'systems',
    level: 'Начальный',
    label: 'Компьютерные сети',
    title: 'Компьютерные сети',
    description:
      'Погрузись в мир сетей! Изучи, как данные передаются в интернете, и ключевые концепции: IP, DNS и TCP/IP.',
    icon: '/logos/Networks.svg',
  },
];
