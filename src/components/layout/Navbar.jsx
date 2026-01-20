'use client'; // Makes this component run on the browser (Client Component). Needed because we use hooks.

import Link from 'next/link'; // Next.js link component for navigation without full page reload
import {useLocale} from 'next-intl'; // Hook from next-intl to know the current locale ('en' or 'es')
import LocaleToggel from './LocaleToggel'; // Our language switch button component

export default function Navbar() { // Navbar component (exported so other files can import it)
  const locale = useLocale(); // Reads the current locale from the URL/provider: 'en' or 'es'

  // Helper function: takes a path like "/services" and returns "/en/services" or "/es/services"
  const l = (path) => `/${locale}${path}`;

  return ( // JSX to render the navbar HTML
    <header> {/* Top area of the page */}
      <strong>Zamor Data & Models</strong>{' '} {/* Site title (bold). {' '} adds a space */}

      <nav style={{ display: 'inline-block', marginLeft: 12 }}> {/* Navigation links container */}
        {/* We manually add the locale prefix so links stay inside /en or /es */}
        <Link href={l('/')} style={{ marginRight: 10 }}>Home</Link>         {/* Goes to /en or /es */}
        <Link href={l('/services')} style={{ marginRight: 10 }}>Services</Link> {/* Goes to /en/services or /es/services */}
        <Link href={l('/demos')} style={{ marginRight: 10 }}>Demos</Link>       {/* Goes to /en/demos or /es/demos */}
        <Link href={l('/projects')} style={{ marginRight: 10 }}>Projects</Link> {/* Goes to /en/projects or /es/projects */}
        <Link href={l('/about')} style={{ marginRight: 10 }}>About</Link>       {/* Goes to /en/about or /es/about */}
        <Link href={l('/contact')}>Contact</Link>                               {/* Goes to /en/contact or /es/contact */}
      </nav>

      <span style={{ marginLeft: 12 }}> {/* Small wrapper to separate the toggle from the links */}
        <LocaleToggel /> {/* Button that switches /en <-> /es while staying on same page */}
      </span>
    </header>
  );
}
