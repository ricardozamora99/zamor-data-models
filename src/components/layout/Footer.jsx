"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const locale = useLocale();
  const t = useTranslations("Footer");

  const l = (path) => `/${locale}${path}`;

  return (
    <footer className={styles.footer} aria-label={t("ariaLabel")}>
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
              <p className={styles.brandTag}>{t("tagline")}</p>

              <div className={styles.badges} aria-label={t("capsAria")}>
                <span className={styles.badge}>{t("badge1")}</span>
                <span className={styles.badge}>{t("badge2")}</span>
                <span className={styles.badge}>{t("badge3")}</span>
                <span className={styles.badge}>{t("badge4")}</span>
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.colTitle}>{t("contactTitle")}</p>

              <div className={styles.item}>
                <p className={styles.label}>{t("emailLabel")}</p>
                <a className={styles.link} href="mailto:hello@zamordata.com">
                  hello@zamordata.com
                </a>
              </div>

              <div className={styles.item}>
                <p className={styles.label}>{t("locationLabel")}</p>
                <p className={styles.text}>{t("locationValue")}</p>
              </div>

              <div className={styles.item}>
                <p className={styles.label}>{t("responseLabel")}</p>
                <p className={styles.text}>{t("responseValue")}</p>
              </div>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>{t("navTitle")}</p>
              <nav className={styles.nav} aria-label={t("navAria")}>
                <Link className={styles.navLink} href={l("/services")}>
                  {t("navServices")}
                </Link>
                <Link className={styles.navLink} href={l("/demos")}>
                  {t("navDemos")}
                </Link>
                <Link className={styles.navLink} href={l("/projects")}>
                  {t("navProjects")}
                </Link>
                <Link className={styles.navLink} href={l("/about")}>
                  {t("navAbout")}
                </Link>
                <Link className={styles.navLink} href={l("/contact")}>
                  {t("navContact")}
                </Link>
              </nav>
            </div>

            <div className={styles.col}>
              <p className={styles.colTitle}>{t("socialTitle")}</p>

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
                <p className={styles.metaTitle}>{t("metaTitle")}</p>
                <p className={styles.metaText}>{t("metaText")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Zamor Data &amp; Models</p>

          <div className={styles.bottomRight}>
            <span className={styles.smallNote}>{t("smallNote")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
