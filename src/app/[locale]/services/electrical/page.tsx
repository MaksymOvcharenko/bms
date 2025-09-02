

"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ServiceSection.module.css";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";

const ServiceSection = () => {
  const t = useTranslations("Services.Electrical");

  return (
    <>
        <section className={styles.container}>
          {/* 1 */}
          <div className={styles.block1}>
            <h2>{t("title")}</h2>
            <Image
              src="/images/uslugi/elektryczne/sq/1.jpg"
              alt="Silnik"
              width={800}
              height={500}
            />
            <p>{t("intro")}</p>
            
          </div>
    
          {/* 2 */}
          <div className={styles.block2}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/elektryczne/sq/2.jpg"
                alt="Engine detail"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("engine.title")}</h3>
              <p>{t("engine.desc")}</p>
            </div>
          </div>
    
          {/* 3 */}
          <div className={styles.block3}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/elektryczne/sq/3.jpg"
                alt="Suspension"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("suspension.title")}</h3>
              <p>{t("suspension.desc")}</p>
            </div>
          </div>
    
          {/* 4 */}
          <div className={styles.block4}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/elektryczne/sq/4.jpg"
                alt="Oil change"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("service.title")}</h3>
              <p>{t("service.desc")}</p>
            </div>
          </div>
    
          {/* 5 */}
          {/* <div className={styles.block5}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/elektryczne/sq/5.jpg"
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
              </div> */}
              
          </section>
          <ContactInfoSection />
          <FollowSocLink />
    </>
  );
};

export default ServiceSection;
