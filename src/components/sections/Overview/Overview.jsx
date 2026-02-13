"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./Overview.module.css";
import Container from "@/components/layout/Container";
import { useInView } from "@/lib/useInView";

export default function Overview() {
  const t = useTranslations("Overview");

  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);

  // Pillars come from messages (EN/ES)
  const pillars = useMemo(() => {
    const raw = t.raw("pillars");
    return Array.isArray(raw) ? raw : [];
  }, [t]);

  const current = pillars[active] || pillars[0];

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.reveal} ${inView ? styles.in : ""}`}
      aria-label={t("ariaLabel")}
    >
      <Container>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <p className={styles.kicker}>{t("kicker")}</p>

            <h2 className={styles.title}>{t("title")}</h2>

            <p className={styles.desc}>{t("desc")}</p>

            {current && (
              <div className={styles.detail}>
                <div className={styles.detailTop}>
                  <span className={styles.pill}>{current.tag}</span>
                  <h3 className={styles.detailTitle}>{current.detailTitle}</h3>
                </div>

                <p className={styles.detailText}>{current.detail}</p>

                <ul className={styles.bullets}>
                  {current.bullets?.map((b) => (
                    <li key={b} className={styles.bullet}>
                      <span className={styles.check} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.progress} aria-hidden="true">
              <span
                className={styles.progressFill}
                style={{ transform: `translateX(${active * 100}%)` }}
              />
            </div>

            <div className={styles.cards} role="tablist" aria-label={t("pillarsAria")}>
              {pillars.map((p, i) => {
                const isActive = i === active;
                const isOpen = i === open;

                return (
                  <button
                    key={p.title}
                    type="button"
                    className={`${styles.card} ${isActive ? styles.active : ""} ${
                      isOpen ? styles.open : ""
                    } ${inView ? styles.cardIn : ""}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    role="tab"
                    aria-selected={isActive}
                    style={{ "--d": `${120 + i * 90}ms` }}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.icon} aria-hidden="true">
                        {i === 0 ? "◌" : i === 1 ? "◎" : "◍"}
                      </span>

                      <div className={styles.cardHead}>
                        <span className={styles.tag}>{p.tag}</span>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                      </div>
                    </div>

                    <p className={styles.cardText}>{p.short}</p>

                    <div className={styles.cardFoot}>
                      <span
                        className={styles.linkish}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpen((prev) => (prev === i ? null : i));
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpen((prev) => (prev === i ? null : i));
                          }
                        }}
                      >
                        {t("details")}
                      </span>

                      <span className={styles.arrow} aria-hidden="true">
                        →
                      </span>
                    </div>

                    {/* EXTRA content ONLY when open */}
                    <div className={styles.more} aria-hidden={!isOpen}>
                      <p className={styles.moreText}>{p.moreDetail}</p>

                      <ul className={styles.moreList}>
                        {p.moreBullets?.map((b) => (
                          <li key={b} className={styles.moreItem}>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
