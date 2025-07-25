
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ServiceSection.module.css";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";

const ServiceSection = () => {
  const t = useTranslations("Services.Mechanical");

  return (
    <>
        <section className={styles.container}>
          {/* 1 */}
          <div className={styles.block1}>
            <h2>{t("engine.title")}</h2>
            <Image
              src="/images/services/mechanical/1.png"
              alt="Silnik"
              width={800}
              height={500}
            />
            <p>{t("engine.desc1")}</p>
            <p>{t("engine.desc2")}</p>
          </div>
    
          {/* 2 */}
          <div className={styles.block2}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/services/mechanical/2.png"
                alt="Engine detail"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("engineDetail.title")}</h3>
              <p>{t("engineDetail.text")}</p>
            </div>
          </div>
    
          {/* 3 */}
          <div className={styles.block3}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/services/mechanical/3.png"
                alt="Suspension"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("suspension.title")}</h3>
              <p>{t("suspension.text")}</p>
            </div>
          </div>
    
          {/* 4 */}
          <div className={styles.block4}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/services/mechanical/4.png"
                alt="Oil change"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("oil.title")}</h3>
              <p>{t("oil.text")}</p>
            </div>
          </div>
    
          {/* 5 */}
          <div className={styles.block5}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/services/mechanical/5.png"
                alt="Exhaust"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("exhaust.title")}</h3>
              <p>{t("exhaust.text")}</p>
            </div>
              </div>
              
          </section>
          <ContactInfoSection />
          <FollowSocLink />
    </>
  );
};

export default ServiceSection;
