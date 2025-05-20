// src/app/(main)/index/page.tsx

import Hero from '../../../components/ui/landing/hero/Hero';
import Sections from '../../../components/ui/landing/sections/Sections';
import LanguageFeature from '../../../components/ui/landing/LanguageFeature/LanguageFeature';
import Final from '../../../components/ui/landing/final/Final';
import Footer from '../../../components/ui/landing/footer/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <Sections />
      <LanguageFeature />
      <Final />
      <Footer />
      {/* дальше — остальной контент страницы */}
    </main>
  );
}
