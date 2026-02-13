"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./ProcessSteps.module.css";
import Container from "@/components/layout/Container";
import { useInView } from "@/lib/useInView";

export default function ProcessSteps() {
  const t = useTranslations("Process");

  const { ref, inView } = useInView();

  const steps = useMemo(() => {
    const raw = t.raw("steps");
    return Array.isArray(raw) ? raw : [];
  }, [t]);

  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);

  const preview = (i) => {
    if (!locked) setActive(i);
  };

  const select = (i) => {
    setActive(i);
    setLocked(true);
  };

  const reset = () => setLocked(false);

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.reveal} ${inView ? styles.in : ""}`}
      aria-label={t("ariaLabel")}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <Container>
        <div className={styles.head}>
          <div>
            <p className={styles.kicker}>{t("kicker")}</p>

            <h2 className={styles.h2}>{t("title")}</h2>
            <p className={styles.sub}>{t("sub")}</p>
          </div>

          <div className={styles.actions}>
            <span className={styles.hint}>
              {locked ? t("hintLocked") : t("hintUnlocked")}
            </span>

            <button
              type="button"
              className={styles.reset}
              onClick={reset}
              aria-disabled={!locked}
              disabled={!locked}
            >
              {t("reset")}
            </button>
          </div>
        </div>

        <div className={styles.shell} style={{ "--active": active }}>
          {/* timeline */}
          <div className={styles.timeline} aria-hidden="true">
            <span className={styles.track} />
            <span className={styles.fill} />
            <span className={styles.dot} />
          </div>

          {/* TOP OPTIONS (mini cards) */}
          <div className={styles.options} role="tablist" aria-label={t("optionsAria")}>
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  type="button"
                  className={`${styles.opt} ${isActive ? styles.optActive : ""}`}
                  onMouseEnter={() => preview(i)}
                  onFocus={() => preview(i)}
                  onClick={() => select(i)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className={styles.optTop}>
                    <span className={styles.optNum}>{s.n}</span>
                    <span className={styles.optDot} aria-hidden="true" />
                  </div>

                  <div className={styles.optMain}>
                    <p className={styles.optTitle}>{s.title}</p>
                    <p className={styles.optLead}>{s.lead}</p>
                  </div>

                  <div className={styles.optFoot}>
                    <span className={styles.optMicro}>
                      {locked && isActive ? t("selected") : t("clickToLock")}
                    </span>
                    <span className={styles.optArrow} aria-hidden="true">
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* STAGE (stack + blur behind) */}
          <div className={styles.stage} role="group" aria-label={t("stageAria")}>
            {steps.map((s, i) => {
              const isActive = i === active;
              const delta = i - active;
              const dist = Math.abs(delta);

              return (
                <button
                  key={s.title}
                  type="button"
                  className={`${styles.stageCard} ${
                    isActive ? styles.stageActive : styles.stageBehind
                  }`}
                  onMouseEnter={() => preview(i)}
                  onFocus={() => preview(i)}
                  onClick={() => select(i)}
                  style={{ "--delta": delta, "--dist": dist }}
                >
                  <div className={styles.stageTop}>
                    <span className={styles.stageNum}>{s.n}</span>
                    <span className={styles.stagePill}>
                      {locked && isActive ? t("pillLocked") : t("pillPreview")}
                    </span>
                  </div>

                  <h3 className={styles.stageTitle}>{s.title}</h3>
                  <p className={styles.stageLead}>{s.lead}</p>
                  <p className={styles.stageText}>{s.details}</p>

                  <div className={styles.outBox}>
                    <p className={styles.outHead}>{t("outputs")}</p>
                    <ul className={styles.outList}>
                      {s.outputs.map((x) => (
                        <li key={x} className={styles.outItem}>
                          <span className={styles.tick} aria-hidden="true" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
