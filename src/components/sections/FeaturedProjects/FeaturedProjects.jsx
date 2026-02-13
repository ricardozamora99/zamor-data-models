"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import styles from "./FeaturedProjects.module.css";
import Container from "@/components/layout/Container";
import { useInView } from "@/lib/useInView";

export default function FeaturedProjects() {
  const t = useTranslations("Featured");
  const locale = useLocale();

  const projects = useMemo(() => {
    const raw = t.raw("projects");
    const arr = Array.isArray(raw) ? raw : [];

    // attach locale-aware CTA href without duplicating it in messages
    return arr.map((p) => ({
      ...p,
      ctaHref: `/${locale}/projects`,
    }));
  }, [t, locale]);

  const { ref, inView } = useInView({ threshold: 0.12 });
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (inView) setRevealed(true);
  }, [inView]);

  const outerRef = useRef(null);
  const rafRef = useRef(0);

  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(() => projects.map(() => 0));

  useEffect(() => {
    setActiveImage((prev) => projects.map((_, i) => prev[i] ?? 0));
  }, [projects.length]);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const SNAP_EPS = 0.08;

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;

        const width = el.clientWidth || 1;
        const raw = el.scrollLeft / width;
        const idx = Math.round(raw);

        const target = idx * width;
        const dist = Math.abs(el.scrollLeft - target);

        if (dist <= width * SNAP_EPS) {
          const clamped = Math.max(0, Math.min(projects.length - 1, idx));
          setActiveProject((prev) => (prev === clamped ? prev : clamped));
        }
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [projects.length]);

  const outerScrollTo = useCallback((idx) => {
    const el = outerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: idx * width, behavior: "smooth" });
    setActiveProject(idx);
  }, []);

  const prevProject = () => {
    const nextIdx = (activeProject - 1 + projects.length) % projects.length;
    outerScrollTo(nextIdx);
  };

  const nextProject = () => {
    const nextIdx = (activeProject + 1) % projects.length;
    outerScrollTo(nextIdx);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject, projects.length]);

  const setImageIndex = (pIdx, imgIdx) => {
    setActiveImage((prev) => {
      const copy = [...prev];
      copy[pIdx] = imgIdx;
      return copy;
    });
  };

  const prevImage = (pIdx) => {
    const n = projects[pIdx].images.length;
    const nextIdx = (activeImage[pIdx] - 1 + n) % n;
    setImageIndex(pIdx, nextIdx);
  };

  const nextImage = (pIdx) => {
    const n = projects[pIdx].images.length;
    const nextIdx = (activeImage[pIdx] + 1) % n;
    setImageIndex(pIdx, nextIdx);
  };

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.reveal} ${revealed ? styles.revealIn : ""}`}
      aria-label={t("ariaLabel")}
    >
      <div className={styles.band}>
        <Container>
          <div className={styles.header}>
            <div className={styles.kicker}>{t("kicker")}</div>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.subtitle}>{t("subtitle")}</p>
          </div>
        </Container>

        <button
          className={styles.arrowLeft}
          onClick={prevProject}
          aria-label={t("prevCase")}
          type="button"
        >
          ←
        </button>

        <div className={styles.outer} ref={outerRef}>
          {projects.map((p, pIdx) => {
            const imgIdx = activeImage[pIdx];
            const imgs = p.images;
            const isActive = pIdx === activeProject;

            return (
              <div
                key={p.title}
                className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              >
                <Container>
                  <div className={styles.grid}>
                    <div className={styles.left}>
                      <div className={styles.eyebrow}>{p.eyebrow}</div>
                      <h3 className={styles.projectTitle}>{p.title}</h3>
                      <p className={styles.projectDesc}>{p.summary}</p>

                      <div className={styles.metaRow}>
                        <div className={styles.metaItem}>
                          <div className={styles.metaLabel}>{t("domain")}</div>
                          <div className={styles.metaValue}>{p.meta.domain}</div>
                        </div>

                        <div className={styles.metaItem}>
                          <div className={styles.metaLabel}>{t("stack")}</div>
                          <div className={styles.pills}>
                            {p.meta.stack.map((x) => (
                              <span key={x} className={styles.pill}>
                                {x}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className={styles.outcomes} aria-label={t("outcomesAria")}>
                        {p.outcomes.map((o) => (
                          <div key={o.label} className={styles.outcome}>
                            <span className={styles.outcomeLabel}>{o.label}</span>
                            <span className={styles.outcomeValue}>{o.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className={styles.caseGridLeft}>
                        <div className={styles.caseCard}>
                          <div className={styles.caseTitle}>{t("problem")}</div>
                          <p className={styles.caseText}>{p.case.problem}</p>
                        </div>

                        <div className={styles.caseCard}>
                          <div className={styles.caseTitle}>{t("approach")}</div>
                          <ul className={styles.caseList}>
                            {p.case.approach.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <a className={styles.cta} href={p.ctaHref}>
                        {p.ctaLabel} <span aria-hidden="true">→</span>
                      </a>
                    </div>

                    <div className={styles.right}>
                      <div className={styles.evidenceTop}>
                        <div className={styles.evidenceTitle}>{t("evidence")}</div>
                        <div className={styles.evidenceHint}>{t("evidenceHint")}</div>
                      </div>

                      <div className={styles.imageBox}>
                        <img
                          key={`${pIdx}-${imgIdx}`}
                          className={styles.image}
                          src={imgs[imgIdx]}
                          alt=""
                          loading="lazy"
                          draggable={false}
                        />

                        {imgs.length > 1 && (
                          <>
                            <button
                              className={styles.imgArrowLeft}
                              onClick={() => prevImage(pIdx)}
                              aria-label={t("prevFigure")}
                              type="button"
                            >
                              ←
                            </button>
                            <button
                              className={styles.imgArrowRight}
                              onClick={() => nextImage(pIdx)}
                              aria-label={t("nextFigure")}
                              type="button"
                            >
                              →
                            </button>

                            <div className={styles.imgDots} aria-label={t("figNavAria")}>
                              {imgs.map((_, i) => (
                                <button
                                  key={i}
                                  className={`${styles.imgDot} ${
                                    i === imgIdx ? styles.imgDotActive : ""
                                  }`}
                                  onClick={() => setImageIndex(pIdx, i)}
                                  aria-label={t("goToFigure", { n: i + 1 })}
                                  type="button"
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <div className={styles.proofRow}>
                        {p.meta.proof.map((x) => (
                          <div key={x} className={styles.proofChip}>
                            {x}
                          </div>
                        ))}
                      </div>

                      <div className={styles.caseGridRight}>
                        <div className={styles.caseCard}>
                          <div className={styles.caseTitle}>{t("validation")}</div>
                          <ul className={styles.caseList}>
                            {p.case.validation.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.caseCard}>
                          <div className={styles.caseTitle}>{t("deliverables")}</div>
                          <ul className={styles.caseList}>
                            {p.case.deliverables.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            );
          })}
        </div>

        <button
          className={styles.arrowRight}
          onClick={nextProject}
          aria-label={t("nextCase")}
          type="button"
        >
          →
        </button>

        <div className={styles.dots} aria-label={t("caseNavAria")}>
          {projects.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeProject ? styles.dotActive : ""}`}
              onClick={() => outerScrollTo(i)}
              aria-label={t("goToCase", { n: i + 1 })}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
