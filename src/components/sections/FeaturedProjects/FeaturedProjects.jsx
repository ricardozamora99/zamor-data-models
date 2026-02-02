"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import styles from "./FeaturedProjects.module.css";
import Container from "@/components/layout/Container";

export default function FeaturedProjects({ locale = "en" }) {
  const projects = useMemo(
    () => [
      {
        title: "Neutrino Mass & Leptogenesis Pipeline",
        desc:
          "Numerical pipeline to explore parameter space, solve Boltzmann equations, and match experimental constraints.",
        bullets: [
          "Adaptive parameter scans and tuning routines",
          "Reproducible plots + validation checks",
          "Research-grade Python tooling and documentation",
        ],
        images: [
          "/projects/Leptogenesis/plot1.png",
          "/projects/Leptogenesis/plot2.png",
          "/projects/Leptogenesis/plot3.png",
        ],
        ctaLabel: "View Projects",
        ctaHref: `/${locale}/projects`,
      },
      {
        title: "Leggett-Garg Inequality and Neutrino Oscillations",
        desc:
          "Study the quantum mechanics effects of the neutrino oscillations in the context of Leggett-Garg inequalities.",
        bullets: [
          "Detailed statistical analysis of experimental data",
          "Custom data processing pipelines",
          "Clear visualizations and reporting",
        ],
        images: [
            "/projects/LGinuos/plot1.png",
            "/projects/LGinuos/plot2.png",
            "/projects/LGinuos/plot3.png",
            "/projects/LGinuos/plot4.png",
        ],
        ctaLabel: "View Projects",
        ctaHref: `/${locale}/projects`,
      },
    ],
    [locale]
  );

  // --- OUTER (projects) slider ---
  const outerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  // --- INNER (images) slider state per project ---
  const [activeImage, setActiveImage] = useState(() =>
    projects.map(() => 0)
  );

  // Keep activeImage array in sync if number of projects changes
  useEffect(() => {
    setActiveImage((prev) => {
      if (prev.length === projects.length) return prev;
      return projects.map((_, i) => prev[i] ?? 0);
    });
  }, [projects.length]);

  // Update activeProject while scrolling outer
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const onScroll = () => {
      const width = el.clientWidth;
      const idx = Math.round(el.scrollLeft / width);
      setActiveProject(Math.max(0, Math.min(projects.length - 1, idx)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [projects.length]);

  const outerScrollTo = (idx) => {
    const el = outerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollTo({ left: idx * width, behavior: "smooth" });
  };

const prevProject = () => {
  const nextIdx = (activeProject - 1 + projects.length) % projects.length;
  outerScrollTo(nextIdx);
};

const nextProject = () => {
  const nextIdx = (activeProject + 1) % projects.length;
  outerScrollTo(nextIdx);
};


  // --- image controls ---
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
    <section className={styles.section}>


      <div className={styles.band}>
              <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Selected work — real pipelines, modeling, and research-grade tooling.
          </p>
        </div>
      </Container>
        {/* Outer arrows */}
        <button className={styles.arrowLeft} onClick={prevProject} aria-label="Previous project">
          ←
        </button>

        <div className={styles.outer} ref={outerRef}>
          {projects.map((p, pIdx) => {
            const imgIdx = activeImage[pIdx];
            const imgs = p.images;

            return (
              <div key={p.title} className={styles.slide}>
                <Container>
                  <div className={styles.grid}>
                    {/* Left text */}
                    <div className={styles.left}>
                      <h3 className={styles.projectTitle}>{p.title}</h3>
                      <p className={styles.projectDesc}>{p.desc}</p>

                      <ul className={styles.bullets}>
                        {p.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>

                      <a className={styles.cta} href={p.ctaHref}>
                        {p.ctaLabel} →
                      </a>
                    </div>

                    {/* Right image carousel */}
                    <div className={styles.right}>
                      <div className={styles.imageBox}>
                        {/* image */}
                        <img  key={`${pIdx}-${imgIdx}`} className={styles.image} src={imgs[imgIdx]} alt="" />

                        {/* inner arrows (only if more than 1 image) */}
                        {imgs.length > 1 && (
                          <>
                            <button
                              className={styles.imgArrowLeft}
                              onClick={() => prevImage(pIdx)}
                              aria-label="Previous image"
                            >
                              ←
                            </button>
                            <button
                              className={styles.imgArrowRight}
                              onClick={() => nextImage(pIdx)}
                              aria-label="Next image"
                            >
                              →
                            </button>

                            {/* inner dots */}
                            <div className={styles.imgDots} aria-label="Image navigation">
                              {imgs.map((_, i) => (
                                <button
                                  key={i}
                                  className={`${styles.imgDot} ${i === imgIdx ? styles.imgDotActive : ""}`}
                                  onClick={() => setImageIndex(pIdx, i)}
                                  aria-label={`Go to image ${i + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            );
          })}
        </div>

        <button className={styles.arrowRight} onClick={nextProject} aria-label="Next project">
          →
        </button>

        {/* Outer dots */}
        <div className={styles.dots} aria-label="Project navigation">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeProject ? styles.dotActive : ""}`}
              onClick={() => outerScrollTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
