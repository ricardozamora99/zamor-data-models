import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Hero.module.css";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("Hero");

  return (
    <section className={styles.hero} aria-label={t("ariaLabel")}>
      {/* Background: gradients + bubbles */}
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.bubble} style={{ "--s": "26px", "--x": "10%", "--y": "22%", "--d": "0s" }} />
        <span className={styles.bubble} style={{ "--s": "18px", "--x": "18%", "--y": "62%", "--d": "-2s" }} />
        <span className={styles.bubble} style={{ "--s": "34px", "--x": "28%", "--y": "40%", "--d": "-5s" }} />
        <span className={styles.bubble} style={{ "--s": "22px", "--x": "44%", "--y": "18%", "--d": "-8s" }} />
        <span className={styles.bubble} style={{ "--s": "16px", "--x": "58%", "--y": "68%", "--d": "-3s" }} />
        <span className={styles.bubble} style={{ "--s": "28px", "--x": "70%", "--y": "30%", "--d": "-6s" }} />
        <span className={styles.bubble} style={{ "--s": "20px", "--x": "84%", "--y": "58%", "--d": "-9s" }} />
        <span className={styles.bubble} style={{ "--s": "40px", "--x": "92%", "--y": "26%", "--d": "-12s" }} />
      </div>

      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.card}>
          <p className={styles.kicker}>{t("kicker")}</p>

          <div className={styles.titleWrap}>
            <h1 className={styles.title}>
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h1>
            <span className={styles.accent} aria-hidden="true" />
          </div>

          <p className={styles.subtitle}>{t("subtitle")}</p>

          <div className={styles.actions}>
            <a className={styles.primary} href={`/${locale}/contact`}>
              {t("ctaPrimary")} <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
            <a className={styles.secondary} href={`/${locale}/projects`}>
              {t("ctaSecondary")}
            </a>
          </div>

          <div className={styles.meta} aria-label={t("metaAria")}>
            <span>{t("meta1")}</span><span className={styles.dot}>•</span>
            <span>{t("meta2")}</span><span className={styles.dot}>•</span>
            <span>{t("meta3")}</span><span className={styles.dot}>•</span>
            <span>{t("meta4")}</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <span className={styles.orbit} aria-hidden="true" />

          <Image
            src="/brand/ZDM2.png"
            alt={t("imageAlt")}
            width={900}
            height={900}
            priority
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}
