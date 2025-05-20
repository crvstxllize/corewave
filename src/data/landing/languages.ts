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
      title: 'Supercharged with NPM',
      description:
        'Use private packages, or any of the 1M+ public ones, to build powerful apps quickly.',
    },
    {
      icon: '/cardicon/lightning.svg',
      title: 'The best frameworks',
      description:
        'Custom environments built specifically for React, Vue, Angular, and many more.',
    },
    {
      icon: '/cardicon/github1.svg',
      title: 'Integrated with GitHub',
      description:
        'Import and run repos direct from GitHub. Or export your sandbox to a repo.',
    },
  ],
  Python: [
    {
      icon: '/cardicon/pypy.svg',
      title: 'Powered by PyPI',
      description:
        'Browse and install from 300k+ packages on the Python Package Index.',
    },
    {
      icon: '/cardicon/jupyter.svg',
      title: 'Jupyter-ready',
      description:
        'Run notebooks inline, explore data science and ML without any local setup.',
    },
    {
      icon: '/cardicon/git.svg',
      title: 'GitHub integration',
      description:
        'Push and pull repos, collaborate on notebooks in real time.',
    },
  ],
  'C#': [
    {
      icon: '/cardicon/dotnet.svg',
      title: 'Powered by .NET',
      description:
        'Spin up ASP.NET Core APIs or console apps in seconds without install.',
    },
    {
      icon: '/cardicon/blazor.svg',
      title: 'Blazor & Razor',
      description:
        'Build interactive SPA apps with C# and WebAssembly, right in the browser.',
    },
    {
      icon: '/cardicon/unity.svg',
      title: 'Unity scripting',
      description:
        'Experiment with Unity game s cripts live, tweak behaviors and see results.',
    },
  ],
  Java: [
    {
      icon: '/cardicon/Java.svg',
      title: 'Enterprise-ready',
      description:
        'Compile and run Java SE, JEE and microservices with Spring Boot.',
    },
    {
      icon: '/cardicon/spring.svg',
      title: 'Spring Boot',
      description:
        'Use preconfigured Spring environments to prototype robust backends.',
    },
    {
      icon: '/cardicon/android.svg',
      title: 'Android support',
      description:
        'Launch Android demos in-browser, test layouts and APK builds instantly.',
    },
  ],
  Sql: [
    {
      icon: '/icons/database.svg',
      title: 'Query Editor',
      description:
        'Write SQL queries against sample databases and see results live.',
    },
    {
      icon: '/icons/schema.svg',
      title: 'Schema Designer',
      description:
        'Visually build tables, relationships and constraints with our GUI tool.',
    },
    {
      icon: '/icons/chart.svg',
      title: 'Data Visualization',
      description:
        'Generate charts and dashboards from query results in a few clicks.',
    },
  ],
};
