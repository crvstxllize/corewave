export const languages = ['JavaScript','Python','C#','Java','Sql'];

export const descriptionText = 
  'CoreWave is uncluttered: choose a programming language, use templates to get started, or connect to a project and start coding now.';

export type Card = {  
  title: string;      // заголовок на карточке  
  subtitle: string;   // подзаголовок или иконка  
  text: string;       // основной текст  
};

export const cardsByLanguage: Record<string, Card[]> = {
  JavaScript: [
    { title: 'npm', subtitle: 'Supercharged with NPM', text: 'Use private packages…' },
    { title: '⚡', subtitle: 'The best frameworks', text: 'Custom environments built…' },
    { title: '🐙', subtitle: 'Integrated with GitHub', text: 'Import and run repos…' },
  ],
  Python: [ /* свои три карточки */ ],
  // … и т.д. для всех языков
};
