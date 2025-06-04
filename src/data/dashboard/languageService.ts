// src/data/dashboard/languageService.ts
import type { LanguageProgress } from '@/components/ui/profile/progressSection/ProgressSection';

// 1) Мок-массив всегда рядом с сервисом
export const mockLanguages: LanguageProgress[] = [
  { name: 'Python',     iconUrl: '/logos/python.svg',     progress: 0 },
  { name: 'JavaScript', iconUrl: '/logos/JavaScript.svg', progress: 0 }, 
  { name: 'C#',         iconUrl: '/logos/C-sharp.svg',    progress: 0 },
  { name: 'Java',       iconUrl: '/logos/javadark.svg',   progress: 0 },
  { name: 'Sql',        iconUrl: '/logos/Sql.svg',        progress: 0 },
];

/**
 * Сейчас всегда возвращает мок.
 * Позже, когда будет готов бэкенд, можно раскомментировать ветку с fetch.
 */
export async function getLanguageProgress(): Promise<LanguageProgress[]> {
  return mockLanguages;

  // === когда будешь готовы к реальному API, раскомментируй это: ===
  //
  // const res = await fetch('/api/profile', { cache: 'no-store' });
  // if (!res.ok) throw new Error('Не удалось загрузить прогресс языков');
  // const json = await res.json();
  // return json.languages as LanguageProgress[];
}
