'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const l = (path) => `/${locale}${path}`;

  // ===== Hide on scroll down, show on scroll up
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY || 0;
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const lastY = lastYRef.current;
        const delta = y - lastY;
        const TH = 10;

        if (y < 40) {
          setHidden(false);
        } else if (delta > TH) {
          setHidden(true);
          setOpen(false);
        } else if (delta < -TH) {
          setHidden(false);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ===== Locale switch (same behavior as your LocaleToggle)
  const switchTo = (next) => {
    if (!pathname) return;
    const parts = pathname.split('/');
    parts[1] = next; // replace locale segment
    const nextPath = parts.join('/') || `/${next}`;
    router.push(nextPath);
  };

  return (
    <header className={`${styles.navbar} ${hidden ? styles.navbarHidden : ''}`}>
      <div className={styles.inner}>
        {/* LEFT: Logo */}
        <div className={styles.left}>
          <Link href={l('/')} className={styles.brand} onClick={() => setOpen(false)}>
            <img
              src="/brand/ZDM1.png"
              alt="Zamor Data & Models"
              className={styles.logo}
            />
          </Link>
        </div>

        {/* CENTER: Desktop links */}
        <nav className={styles.center} aria-label="Primary navigation">
          <Link href={l('/')} className={styles.link}>HOME</Link>
          <Link href={l('/services')} className={styles.link}>SERVICES</Link>
          <Link href={l('/demos')} className={styles.link}>DEMOS</Link>
          <Link href={l('/projects')} className={styles.link}>PROJECTS</Link>
          <Link href={l('/about')} className={styles.link}>ABOUT</Link>
          <Link href={l('/contact')} className={styles.link}>CONTACT</Link>
        </nav>

        {/* RIGHT: Locale toggle + Hamburger */}
        <div className={styles.right}>
          {/* Locale toggle — SAME STRUCTURE as your reference project */}
          <div className={styles.localeToggle} aria-label="Language switch">
            <span className={styles.cur}>{locale.toUpperCase()}</span>
            <span className={styles.sep}>|</span>

            <span className={styles.box}>
              <button
                type="button"
                className={`${styles.opt} ${locale === 'en' ? styles.active : ''}`}
                onClick={() => switchTo('en')}
                aria-label="Switch to English"
              >
                <span className={styles.flag} aria-hidden="true">🇺🇸</span>
                <span className={styles.txt}>EN</span>
              </button>

              <span className={styles.colon} aria-hidden="true">·</span>

              <button
                type="button"
                className={`${styles.opt} ${locale === 'es' ? styles.active : ''}`}
                onClick={() => switchTo('es')}
                aria-label="Cambiar a Español"
              >
                <span className={styles.flag} aria-hidden="true">🇪🇸</span>
                <span className={styles.txt}>ES</span>
              </button>
            </span>
          </div>

          <button
            className={styles.hamburger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <nav className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`} aria-label="Mobile navigation">
        <Link href={l('/')} className={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
        <Link href={l('/services')} className={styles.mobileLink} onClick={() => setOpen(false)}>Services</Link>
        <Link href={l('/demos')} className={styles.mobileLink} onClick={() => setOpen(false)}>Demos</Link>
        <Link href={l('/projects')} className={styles.mobileLink} onClick={() => setOpen(false)}>Projects</Link>
        <Link href={l('/about')} className={styles.mobileLink} onClick={() => setOpen(false)}>About</Link>
        <Link href={l('/contact')} className={styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
