import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand / Signature */}
          <div className={styles.brand}>
            <div className={styles.logoMark} aria-hidden="true">
              <span className={styles.node} />
              <span className={styles.node} />
              <span className={styles.node} />
              <span className={styles.linkLine} />
            </div>

            <div className={styles.brandText}>
              <p className={styles.brandName}>Zamor Data &amp; Models</p>
              <p className={styles.brandTag}>
                Scientific data analysis, modeling &amp; technical solutions.
              </p>

              <div className={styles.badges} aria-label="Capabilities">
                <span className={styles.badge}>Physics</span>
                <span className={styles.badge}>Data</span>
                <span className={styles.badge}>Code</span>
                <span className={styles.badge}>Reproducible</span>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.colTitle}>Contact</p>

              <div className={styles.item}>
                <p className={styles.label}>Email</p>
                <a className={styles.link} href="mailto:hello@zamordata.com">
                  hello@zamordata.com
                </a>
              </div>

              <div className={styles.item}>
                <p className={styles.label}>Location</p>
                <p className={styles.text}>Remote • Worldwide</p>
              </div>

              <div className={styles.item}>
                <p className={styles.label}>Response time</p>
                <p className={styles.text}>24–48 hours</p>
              </div>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Navigation</p>
              <nav className={styles.nav} aria-label="Footer navigation">
                <Link className={styles.navLink} href="/services">
                  Services
                </Link>
                <Link className={styles.navLink} href="/demos">
                  Demos
                </Link>
                <Link className={styles.navLink} href="/projects">
                  Projects
                </Link>
                <Link className={styles.navLink} href="/about">
                  About
                </Link>
                <Link className={styles.navLink} href="/contact">
                  Contact
                </Link>
              </nav>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>Social</p>

              <div className={styles.social}>
                <a
                  className={styles.socialLink}
                  href="https://www.linkedin.com/in/ricardo-zamora-80b714193/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  className={styles.socialLink}
                  href="https://github.com/ricardozamora99"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              <div className={styles.meta}>
                <p className={styles.metaTitle}>Working style</p>
                <p className={styles.metaText}>
                  Clear scope, clean deliverables, and documentation-first handoff.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Zamor Data &amp; Models</p>

          <div className={styles.bottomRight}>
            <span className={styles.smallNote}>
              Built for clarity • Minimal &amp; rigorous
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
