// src/app/(main)/about/page.tsx
import React from 'react'
import Hero from '../../../components/ui/about/hero/Hero'
import Marquee from '../../../components/ui/about/marquee/Marquee'
import Mission from '../../../components/ui/about/mission/Mission'
import Aboutus from '../../../components/ui/about/aboutus/Aboutus'
import Final from '../../../components/ui/about/final/Final'
import Footer from '../../../components/ui/about/footer/Footer'
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <Hero />
      <Marquee text="CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave — CoreWave —"/>
      <Mission />
      <Aboutus />
      <Final />
      <Footer />
    </main>
  )
}
