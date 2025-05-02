'use client';
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react';
import DiagonalDivider from '../lines/DiagonalDivider';
import styles from './sections.module.css';

export default function Sections() {
  const introRef = useRef<HTMLElement>(null);
  const [introVisible, setIntroVisible] = useState(false);
  const dirRef      = useRef<HTMLElement>(null);
  const [dirVisible, setDirVisible] = useState(false);
  const socialRef = useRef<HTMLElement>(null);
  const [socialVisible, setSocialVisible] = useState(false);
  // 1 section
  useEffect(() => {
    if (!introRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -100px 0px',  // чуть раньше, чем полностью в зоне
        threshold: 0,                       // срабатываем при любом пересечении
      }
    );
    observer.observe(introRef.current);
    return () => observer.disconnect();
  }, []);
  // 2 section
  useEffect(() => {
      if (!dirRef.current) return;
      const obs2 = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setDirVisible(true);
            obs2.disconnect();
          }
        },
        { threshold: 0, rootMargin: '0px 0px -100px 0px' }
      );
      obs2.observe(dirRef.current);
      return () => obs2.disconnect();
    }, []);
    // 3 section
    useEffect(() => {
      if (!socialRef.current) return;
      const obs3 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSocialVisible(true);
            obs3.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );
      obs3.observe(socialRef.current);
      return () => obs3.disconnect();
    }, []);

  return (
    <div className={styles.wrapper}>
      {/* 1-я линия */}
      <DiagonalDivider
        angle={12.85}
        top="30vh"
        left="0"
        length="120%"
        thickness="3px"
        origin="0 0"
        color="#151515"
      />


      {/* === СЕКЦИЯ INTRO === */}
      <section
        ref={introRef}
        className={`${styles.introSection} ${
          introVisible ? styles.introVisible : ''
        }`}
      >
        <h2 className={styles.sloganLogo}>CoreWave</h2>
        <blockquote className={styles.quote}>
          <span className={styles.grayText}>"Surf the </span>
          <span className={styles.whiteText}>wave </span>
          <span className={styles.grayText}>of </span>
          <span className={styles.whiteText}>knowledge, </span><br/>
          <span className={styles.whiteText}>step </span>
          <span className={styles.grayText}>by </span>
          <span className={styles.whiteText}>step</span>
          <span className={styles.grayText}>."</span>
        </blockquote>
        <p className={styles.tagline}>
          Learn, practice, and reach new heights in IT with interactive learning
        </p>
        <a href="/catalog" className={styles.ctaButton}>&lt;/&gt; Start learning</a>
        {/* <Link href="/catalog" className={styles.ctaButton}>&lt;/&gt; Start learning </Link> */}
      </section>


      {/* 2-я линия */}
      <DiagonalDivider
        angle={-10}
        top="78vh"
        right="0"
        length="120%"
        thickness="3px"
        origin="100% 0"
        color="#151515"
      />


      {/* === СЕКЦИЯ CHOOSE DIRECTION === */}
      <section
        ref={dirRef}
        className={`${styles.directionSection} ${
          dirVisible ? styles.directionVisible : ''
        }`}
      >
        <div className={styles.directionInner}>
          <img
            src="/icons/graduate.svg"
            alt="Graduation cap"
            className={styles.directionIcon}
          />
          <div className={styles.directionContent}>
            <blockquote className={styles.directionTitle}>
            <span className={styles.grayText}>Choose a </span>
            <span className={styles.whiteText}>direction </span>
            <span className={styles.grayText}>in {'<'}</span>
            <span className={styles.whiteText}>IT</span>
            <span className={styles.grayText}>{'>'}</span>
            </blockquote>
            <p className={styles.directionText}>
              Find your path in IT, learn what really matters, and
              start building your dream career today
            </p>
            <a href="/catalog" className={styles.directionLink}>
              Catalog&nbsp;<span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>
      </section>


      {/* 3-я линия */}
      <DiagonalDivider
        angle={0}
        top="163vh"
        left="0"
        length="100%"
        thickness="3px"
        origin="0 0"
        color="#151515"
      />


      {/* === СЕКЦИЯ 3: SOCIAL & QUESTIONS === */}
      <section
        ref={socialRef}
        className={`${styles.socialQuestionsSection} ${
          socialVisible ? styles.socialVisible : ''
        }`}
      >
        {/* — Social networks */}
        <div className={styles.socialNetworks}>
          <blockquote className={styles.socialTitle}>
            <span className={styles.grayText}>Our </span>
            <span className={styles.whiteText}>social </span>
            <span className={styles.whiteText}>networks</span>
          </blockquote>
          <ul className={styles.socialList}>
            <li><a href="#" className={styles.socialLink1}>Instagram</a></li>
            <li><a href="#" className={styles.socialLink2}>Telegram</a></li>
            <li><a href="#" className={styles.socialLink3}>YouTube</a></li>
          </ul>
        </div>

        {/* — Разделитель */}
        <div className={styles.verticalDivider} />

        {/* — Questions or Error */}
        <div className={styles.questionsSection}>
          <div className={styles.questionsHeader}>
            <img src="/icons/headset.svg" alt="" className={styles.icon} />
            <blockquote className={styles.questionsTitle}>
            <span className={styles.whiteText}>Questions </span>
            <span className={styles.grayText}>or </span>
            <span className={styles.whiteText}>Error</span>
            <span className={styles.grayText}>?</span>
            </blockquote>
          </div>
          <ul className={styles.contactList}>
            <li>
              <img src="/icons/phone.svg" alt="" className={styles.contactIcon1} />
              <span className={styles.contactText1}>+7 (777) 777 77 77</span>
            </li>
            <li>
              <img src="/icons/mail.svg" alt="" className={styles.contactIcon2} />
              <span className={styles.contactText2}>educorewave@gmail.com</span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
