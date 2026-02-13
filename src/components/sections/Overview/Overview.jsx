"use client";

import { useMemo, useState } from "react";
import styles from "./Overview.module.css";
import Container from "@/components/layout/Container";
import { useInView } from "@/lib/useInView";

export default function Overview() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);

  const pillars = useMemo(
    () => [
      {
        tag: "Clarity",
        title: "Business-ready clarity",
        short: "Clean metrics, transparent logic, and decisions you can explain.",

        // LEFT panel (conceptual)
        detailTitle: "Built for decision-making",
        detail:
          "We define what matters, make assumptions explicit, and deliver outputs your team can trust and act on.",
        bullets: ["Clear KPIs", "Transparent logic", "Decision-ready outputs"],

        // DETAILS (expanded) — concrete deliverables
        moreDetail:
          "What you actually get: a clear package of results with context and decision support.",
        moreBullets: [
          "Business goals + success metrics documented",
          "Assumptions and limitations made explicit",
          "Simple explanations of what drives results",
          "Versioned outputs + clear changelog",
        ],
      },
      {
        tag: "Custom",
        title: "Custom solutions",
        short: "Tailored automation and analytics — no cookie-cutter templates.",

        // LEFT panel (conceptual)
        detailTitle: "Designed for your workflow",
        detail:
          "From reporting automation to operational dashboards: the approach adapts to your data, tools, and constraints.",
        bullets: ["Workflow automation", "Dashboards & reporting", "Fast iteration"],

        // DETAILS (expanded)
        moreDetail:
          "Custom means the solution fits your systems and your team — not the other way around.",
        moreBullets: [
          "Approach chosen for your data + team constraints",
          "Pipelines adapted to your formats and scale",
          "Automation built around real operational steps",
          "Iteration checkpoints with measurable progress",
        ],
      },
      {
        tag: "Delivery",
        title: "Reliable delivery",
        short: "Clean handoff: documentation, training, and maintainable tooling.",

        // LEFT panel (conceptual)
        detailTitle: "Usable, maintainable deliverables",
        detail:
          "You receive clean code, clear visuals, and documentation. Not just outputs — a tool your team can use and maintain.",
        bullets: ["Documentation", "Dashboards & reports", "Handover support"],

        // DETAILS (expanded)
        moreDetail:
          "Delivery focuses on adoption: clarity, maintainability, and a smooth handoff.",
        moreBullets: [
          "Structured codebase (clean + commented)",
          "Dashboards/plots ready for stakeholders",
          "Short usage guide + operational notes",
          "Next-step recommendations + limitations",
        ],
      },
    ],
    []
  );

  const current = pillars[active];

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.reveal} ${inView ? styles.in : ""}`}
      aria-label="Overview"
    >
      <Container>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <p className={styles.kicker}>WHAT IS THIS?</p>

            <h2 className={styles.title}>
              Data consulting for analytics, automation, and business-ready tools.
            </h2>

            <p className={styles.desc}>
              Zamor Data & Models helps teams turn complex data into dashboards, automated workflows,
              and reliable decision support — from analysis to deployment-ready tooling.
            </p>

            <div className={styles.detail}>
              <div className={styles.detailTop}>
                <span className={styles.pill}>{current.tag}</span>
                <h3 className={styles.detailTitle}>{current.detailTitle}</h3>
              </div>

              <p className={styles.detailText}>{current.detail}</p>

              <ul className={styles.bullets}>
                {current.bullets.map((b) => (
                  <li key={b} className={styles.bullet}>
                    <span className={styles.check} aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.progress} aria-hidden="true">
              <span
                className={styles.progressFill}
                style={{ transform: `translateX(${active * 100}%)` }}
              />
            </div>

            <div className={styles.cards} role="tablist" aria-label="Pillars">
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
                        Details
                      </span>

                      <span className={styles.arrow} aria-hidden="true">
                        →
                      </span>
                    </div>

                    {/* EXTRA content ONLY when open */}
                    <div className={styles.more} aria-hidden={!isOpen}>
                      <p className={styles.moreText}>{p.moreDetail}</p>

                      <ul className={styles.moreList}>
                        {p.moreBullets.map((b) => (
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
