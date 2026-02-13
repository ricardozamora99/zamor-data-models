"use client";

import styles from "./ServicesGrid.module.css";
import Container from "@/components/layout/Container";
import { useInView } from "@/lib/useInView";
import { useLocale, useTranslations } from "next-intl";

export default function ServicesGrid() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const { ref, inView } = useInView({ threshold: 0.12 });

  // Services come from messages so EN/ES stays consistent
  const services = t.raw("items");
  const ITEMS = Array.isArray(services) ? services : [];

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.reveal} ${inView ? styles.revealIn : ""}`}
      aria-label={t("ariaLabel")}
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.kicker}>{t("kicker")}</p>

          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((s) => (
            <article
              key={s.title}
              className={styles.card}
              style={{ "--bg": `url(${s.img})` }}
            >
              <span className={styles.bg} aria-hidden="true" />

              <div className={styles.content}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <span className={styles.pill}>{t("pill")}</span>
                </div>

                <p className={styles.cardDesc}>{s.desc}</p>

                <div className={styles.tags} aria-label={t("tagsAria")}>
                  {s.tags?.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a className={styles.link} href={`/${locale}/services`}>
                  {t("seeDetails")} <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
