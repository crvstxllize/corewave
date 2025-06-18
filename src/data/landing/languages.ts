export type CardData = {
  icon: string;
  title: string;
  description: string;
};

export type LanguageKey = 'JavaScript' | 'Python' | 'C#' | 'Java' | 'Sql';

export const languages: Record<LanguageKey, CardData[]> = {
  JavaScript: [
    {
      icon: '/cardicon/npm.svg',
      title: 'Ускорено c NPM',
      description:
        'Используй приватные пакеты или любые из 1M+ публичных для быстрого создания мощных приложений.',
    },
    {
      icon: '/cardicon/lightning.svg',
      title: 'Лучшие фреймворки',
      description:
        'Специальные окружения для React, Vue, Angular и многих других.',
    },
    {
      icon: '/cardicon/github1.svg',
      title: 'Интеграция с GitHub',
      description:
        'Импортируй и запускай репозитории прямо из GitHub либо экспортируй свою песочницу в репозиторий.',
    },
  ],
  Python: [
    {
      icon: '/cardicon/pypy.svg',
      title: 'Питание от PyPI',
      description:
        'Устанавливай из 300k+ пакетов на Python Package Index для любых задач.',
    },
    {
      icon: '/cardicon/jupyter.svg',
      title: 'Готовность Jupyter',
      description:
        'Запускай блокноты inline и исследуй ML и дата-сайенс без локальной настройки.',
    },
    {
      icon: '/cardicon/git.svg',
      title: 'GitHub-связь',
      description:
        'Пушь и пулль репозитории, работай над ноутбуками вместе в реальном времени.',
    },
  ],
  'C#': [
    {
      icon: '/cardicon/dotnet.svg',
      title: 'Работает на .NET',
      description:
        'Запускай ASP.NET Core API и консольные приложения за секунды без установки.',
    },
    {
      icon: '/cardicon/blazor.svg',
      title: 'Blazor & Razor',
      description:
        'Создавай интерактивные SPA-приложения на C# и WebAssembly прямо в браузере.',
    },
    {
      icon: '/cardicon/unity.svg',
      title: 'Скрипты Unity',
      description:
        'Экспериментируй со скриптами Unity на лету и сразу смотри результат.',
    },
  ],
  Java: [
    {
      icon: '/cardicon/Java.svg',
      title: 'Готово к энтерпрайзу',
      description:
        'Компилируй и запускай Java SE, JEE и микросервисы на Spring Boot.',
    },
    {
      icon: '/cardicon/spring.svg',
      title: 'Spring Boot',
      description:
        'Используй готовые Spring-окружения для быстрого прототипирования бэкендов.',
    },
    {
      icon: '/cardicon/android.svg',
      title: 'Поддержка Android',
      description:
        'Запускай Android-демо прямо в браузере и мгновенно тестируй макеты и сборки APK.',
    },
  ],
  Sql: [
    {
      icon: '/icons/database.svg',
      title: 'Редактор запросов',
      description:
        'Пиши SQL-запросы к примерам баз и сразу смотри результаты.',
    },
    {
      icon: '/icons/schema.svg',
      title: 'Конструктор схем',
      description:
        'Визуально создавай таблицы, связи и ограничения с помощью GUI.',
    },
    {
      icon: '/icons/chart.svg',
      title: 'Визуализация данных',
      description:
        'Строь графики и дашборды из результатов запросов в пару кликов.',
    },
  ],
};
