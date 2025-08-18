"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ServiceSection.module.css";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";

const ServiceSection = () => {
  const t = useTranslations("Services.Electrical");

  const lightingList: string[] = t.raw("lighting.list");
  const modulesList: string[] = t.raw("modules.list");
  const powerList: string[] = t.raw("power.list");
  const sensorsList: string[] = t.raw("sensors.list");

  return (
    <>
      <section className={styles.container}>
        {/* 1 */}
        <div className={styles.block1}>
          <h2>{t("hero.title")}</h2>

          {/* Фото зверху */}
          <Image
                  src="/images/services/electrical/elektryk1.jpg"

            alt="Usługi elektryczne BMW"
            width={800}
            height={500}
          />

          <p>{t("hero.desc1")}</p>
          <p>{t("hero.desc2")}</p>
        </div>

        {/* 2 */}
        <div className={styles.block3}>
          <div className={styles.text}>
            <h3>{t("lighting.title")}</h3>
            <ul>
              {lightingList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
           {/* Фото внизу */}
          <div className={styles.imageWrapper}>
            <Image
                     src="/images/services/electrical/elektryk2.jpg"

              alt="Diagnostyka elektryczna BMW"
              width={800}
              height={500}
              className={styles.image}
            />
          </div>
        </div>

        {/* 3 */}
        <div className={styles.block3}>
          
        </div>

        {/* 4 */}
        <div className={styles.block4}>
          <div className={styles.text}>
            <h3>{t("power.title")}</h3>
            <ul>
              {powerList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5 */}
        <div className={styles.block5}>
          <div className={styles.text}>
            <h3>{t("sensors.title")}</h3>
            <ul>
              {sensorsList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t("outro")}</p>
          </div>

         
        </div>
      </section>

      <ContactInfoSection />
      <FollowSocLink />
    </>
  );
};

export default ServiceSection;

