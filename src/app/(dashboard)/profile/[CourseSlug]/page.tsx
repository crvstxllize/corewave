// src/app/(dashboard)/profile/[CourseSlug]/page.tsx
import CourseHeader from '@/components/ui/course/header/CourseHeader'
import Breadcrumbs from '@/components/ui/course/breadcrumbs/BreadCrumbs'
import CourseHero from '@/components/ui/course/coursehero/CourseHero'
import SeparatorLine from '@/components/ui/course/separatorline/SeparatorLine'
import LessonSection from '@/components/ui/course/lessonsection/LessonSection'

import { getLanguageProgress } from '@/data/dashboard/languageService'
import type { LanguageProgress } from '@/components/ui/profile/progressSection/ProgressSection'

import {
  courseLessons,
  Chapter,
  CourseKey,
} from '@/data/dashboard/Course/lessonConfig'

interface CoursePageProps {
  params: {
    CourseSlug: string  // ← именно так, с заглавной
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  // достаём из URL
  const { CourseSlug } = params

  // приводим к нижнему регистру, чтобы искать в courseLessons
  const slug = CourseSlug.toLowerCase() as CourseKey

  // 1) Получаем прогресс (async)
  const languages: LanguageProgress[] = await getLanguageProgress()
  const lang = languages.find(l => l.name.toLowerCase() === slug)

  const percent = lang?.progress ?? 0
  const iconUrl = lang?.iconUrl  ?? '/icons/default.svg'
  const title   = `Introduction to ${lang?.name ?? CourseSlug}`

  // 2) Шаблонные данные
  const attempts  = 10
  const avatarUrl = '/imgs/avatar.jpg'

  // 3) Берём главы и уроки из конфига
  const chapters: Chapter[] = courseLessons[slug] || []

  return (
    <div>
      <CourseHeader attempts={attempts} avatarUrl={avatarUrl} />
      <Breadcrumbs />
      <CourseHero title={title} iconUrl={iconUrl} percent={percent} />
      <SeparatorLine />
      {/* Передаём сюда нижний регистр slug */}
      <LessonSection courseSlug={slug} chapters={chapters} />
    </div>
  )
}
