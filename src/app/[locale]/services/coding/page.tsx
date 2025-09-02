// "use client";

// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import styles from "./ServiceSection.module.css";

// const ServiceSection = () => {
//   const t = useTranslations("Services.Mechanical");

//   return (
//     <section className={styles.container}>
//       {/* 1. Заголовок і вступ */}
//       <div className={styles.block}>
//         <h2>{t("engine.title")}</h2>
//         <Image
//           src="/images/services/mechanical/1.png"
//           alt="Silnik"
//           width={800}
//           height={500}
//         />
//         <p>{t("engine.desc1")}</p>
//         <p>{t("engine.desc2")}</p>
//       </div>

//       {/* 2. Серце — двигун */}
//       <div className={styles.block}>
//         <h3>{t("engineDetail.title")}</h3>
//         <Image
//           src="/images/services/mechanical/2.png"
//           alt="Engine detail"
//           width={800}
//           height={500}
//         />
//         <p>{t("engineDetail.text")}</p>
//       </div>

//       {/* 3. Підвіска */}
//       <div className={styles.block}>
//         <h3>{t("suspension.title")}</h3>
//         <Image
//           src="/images/services/mechanical/3.png"
//           alt="Suspension"
//           width={800}
//           height={500}
//         />
//         <p>{t("suspension.text")}</p>
//       </div>

//       {/* 4. Заміна оливи */}
//       <div className={styles.block}>
//         <h3>{t("oil.title")}</h3>
//         <Image
//           src="/images/services/mechanical/4.png"
//           alt="Oil change"
//           width={800}
//           height={500}
//         />
//         <p>{t("oil.text")}</p>
//       </div>

//       {/* 5. Вихлопна система */}
//       <div className={styles.block}>
//         <h3>{t("exhaust.title")}</h3>
//         <Image
//           src="/images/services/mechanical/5.png"
//           alt="Exhaust"
//           width={800}
//           height={500}
//         />
//         <p>{t("exhaust.text")}</p>
//           </div>
          
//     </section>
//   );
// };

// export default ServiceSection;
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./ServiceSection.module.css";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
import GradientBar from "@/components/Animations";

const ServiceSection = () => {
  const t = useTranslations("Services.Kodowanie");

  return (
    <>
        <section className={styles.container}>
          {/* 1 */}
          <div className={styles.block1}>
            <h2>{t("title")}</h2>
            <Image
              src="/images/uslugi/kodowanie/1.jpg"
              alt="Silnik"
              width={800}
              height={500}
            /> <GradientBar />
            {/* <p>{t("block1.title")}</p>
            <p>{t("block1.desc")}</p> */}
          </div>
    
          {/* 2 */}
          <div className={styles.block2}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/kodowanie/2.jpg"
                alt="Engine detail"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("block1.title")}</h3>
              <p>{t("block1.desc")}</p>
            </div>
          </div>
    
          {/* 3 */}
          <div className={styles.block3}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/kodowanie/3.jpg"
                alt="Suspension"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("block2.title")}</h3>
              <p>{t("block2.desc")}</p>
            </div>
          </div>
    
          {/* 4 */}
          <div className={styles.block4}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/kodowanie/4.jpg"
                alt="Oil change"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("block3.title")}</h3>
              <p>{t("block3.desc")}</p>
            </div>
          </div>
    
          {/* 5 */}
          <div className={styles.block5}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/uslugi/kodowanie/5.jpg"
                alt="Exhaust"
                width={800}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h3>{t("block4.title")}</h3>
              <p>{t("block4.desc")}</p>
            </div>
              </div>
              
          </section>
          <ContactInfoSection />
          <FollowSocLink />
    </>
  );
};

export default ServiceSection;
