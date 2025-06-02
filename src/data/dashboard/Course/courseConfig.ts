export interface CourseConfig {
  title: string;
  iconUrl: string;
  percent: number;
}

export const courseConfig: Record<string, CourseConfig> = {
  python: {
    title: 'Introduction to Python',
    iconUrl: '/logos/Python.svg',
    percent: 0,
  },
  javascript: {
    title: 'Introduction to JavaScript',
    iconUrl: '/logos/Javascript.svg',
    percent: 0,
  },
  Csharp: {
    title: 'Introduction to C#',
    iconUrl: '/logos/C-sharp.svg',
    percent: 0,
  },
  java: {
    title: 'Introduction to Java',
    iconUrl: '/logos/Javadark.svg',
    percent: 0,
  },
   sql: {
    title: 'Introduction to Sql',
    iconUrl: '/logos/Sql.svg',
    percent: 0,
  },
};