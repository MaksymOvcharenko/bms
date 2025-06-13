"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import styles from "./ServiceCard.module.css";

type Service = {
  slug: string;
  translationKey: string;
  imageSrc: string;
};

const services: Service[] = [
  { slug: "mechanical", translationKey: "mechanicalService", imageSrc: "/images/services/mechaniczny.png" },
  { slug: "electrical", translationKey: "electricalService", imageSrc: "/images/services/uslugi-elektryczne.jpg" },
  { slug: "tuning", translationKey: "tuning", imageSrc: "/images/services/Tuning.jpg"},
  { slug: "coding", translationKey: "coding", imageSrc: "/images/services/kodowanie.jpg" },
  { slug: "conversion", translationKey: "conversion", imageSrc: "/images/services/konwersjausa-eu.jpg" },
  { slug: "inspection", translationKey: "inspection", imageSrc: "/images/services/przedzakupowy.JPG" },
  { slug: "diagnostics", translationKey: "diagnostics", imageSrc: "/images/services/diagnostyka.jpg" },
  { slug: "update", translationKey: "update", imageSrc: "/images/services/kodowanie.jpg" },
  { slug: "carEquipment", translationKey: "carEquipment", imageSrc: "/images/services/Doposazenie.jpg" },
  { slug: "crashRepair", translationKey: "crashRepair", imageSrc: "/images/services/powypadkowe.jpg" },
  { slug: "alarms", translationKey: "alarms", imageSrc: "/images/services/alarm.jpg" },
  { slug: "vulcanization", translationKey: "vulcanization", imageSrc: "/images/services/wulkanizacja.JPG" }
];

export default function ServicesCard() {
  const t = useTranslations("ServicesCard");
  const locale = useLocale();

  return (
   <section className={styles.section}>
        <div className={styles.grid}>
          {services.map(({ slug, translationKey, imageSrc }) => (
            <Link
              key={slug}
              href={`/${locale}/services/${slug}`}
              className={styles.card}
              style={{ backgroundImage: `url(${imageSrc})` }}
            >
              <div className={styles.overlay}>
                <h3 className={styles.title}>{t(translationKey)}</h3>
                <span className={styles.details}>{t("moreDetails")} →</span>
              </div>
            </Link>
          ))}
        </div>
   </section >
  );
}
