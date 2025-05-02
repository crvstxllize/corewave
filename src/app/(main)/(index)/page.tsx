// src/app/(main)/index/page.tsx

import Hero from '../../../components/ui/landing/hero/Hero';
import Sections from '../../../components/ui/landing/sections/Sections';


export default function Page() {
  return (
    <main>
      <Hero />
      <Sections />
      {/* дальше — остальной контент страницы */}
    </main>
  );
}
