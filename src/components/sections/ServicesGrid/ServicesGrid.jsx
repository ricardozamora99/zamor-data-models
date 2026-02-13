"use client";

import styles from "./ServicesGrid.module.css";
import Container from "@/components/layout/Container";
import { useInView } from "@/lib/useInView";

const SERVICES = [
  {
    title: "Data Analysis & Modeling",
    desc: "Structured analysis and custom models to extract insight from complex datasets.",
    tags: ["Python", "Statistics", "Modeling"],
    img: "/services/ser01.png",
  },
  {
    title: "Data Visualization & Communication",
    desc: "Clear visual narratives that translate technical results into understandable insight.",
    tags: ["Visualization", "Dashboards", "Reporting"],
    img: "/services/ser02.png",
  },
  {
    title: "Computational Tools & Automation",
    desc: "Custom tools and scripts to automate workflows and reduce repetitive technical tasks.",
    tags: ["Python", "Automation", "Pipelines"],
    img: "/services/ser03.png",
  },
  {
    title: "Technical Web Interfaces",
    desc: "Interactive interfaces to present data, models, and results in a usable format.",
    tags: ["Web", "Interfaces", "Visualization"],
    img: "/services/ser04.png",
  },
  {
    title: "Technical Consulting & Method Review",
    desc: "Independent review, validation, and guidance for technically demanding projects.",
    tags: ["Consulting", "Validation", "Strategy"],
    img: "/services/ser05.png",
  },
  {
    title: "Reporting & Documentation",
    desc: "Structured documentation so results remain clear, reproducible, and extendable.",
    tags: ["Documentation", "Reproducibility", "Handover"],
    img: "/services/ser06.png",
  },
];

export default function ServicesGrid({ locale = "en" }) {
  const { ref, inView } = useInView({ threshold: 0.12 });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.reveal} ${
        inView ? styles.revealIn : ""
      }`}
      aria-label="Services"
    >
      <Container>
        <div className={styles.header}>
          {/* ✅ small phrase like other sections */}
          <p className={styles.kicker}>WHAT I DO</p>

          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            Structured technical work — from analysis and modeling to automation and delivery.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={styles.card}
              style={{ "--bg": `url(${s.img})` }}
            >
              <span className={styles.bg} aria-hidden="true" />

              <div className={styles.content}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <span className={styles.pill}>Service</span>
                </div>

                <p className={styles.cardDesc}>{s.desc}</p>

                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>

                <a className={styles.link} href={`/${locale}/services`}>
                  See details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
