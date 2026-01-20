'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import styles from './Navbar.module.css';

export default function LocaleToggel() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const nextLocale = locale === 'en' ? 'es' : 'en';

  function onToggle() {
    const newPath = pathname.replace(/^\/(en|es)(?=\/|$)/, `/${nextLocale}`);
    const qs = searchParams?.toString();
    router.push(qs ? `${newPath}?${qs}` : newPath);
  }

  return (
    <button type="button" onClick={onToggle} className={styles.localeToggle}>
      <span className={styles.localeCode}>{locale.toUpperCase()}</span>
      <span className={styles.localeSep}>|</span>
      <span className={styles.localeCode}>{nextLocale.toUpperCase()}</span>
    </button>
  );
}
