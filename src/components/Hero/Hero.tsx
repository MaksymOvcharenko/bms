
import Link from "next/link";
import ServiceBtn from "../ServiceBtn/ServiceBtn";
import s from "./Hero.module.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { useTranslations } from "next-intl";
import { trackVisitClick } from "@/lib/gtmEvents";

export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className={s.section}>
        
      <video
              
              autoPlay
              muted
              // loop
              playsInline
              className={s.video}
              poster="/images/heroImgFallback.jpg" // fallback зображення
            >
              <source src="/videos/hero-bg-10m1.MOV" type="video/mp4" />
            </video>
            <video
              
              autoPlay
              muted
              // loop
              playsInline
              className={s.videodesktop}
              poster="/images/heroImgFallback.jpg" // fallback зображення
            >
              <source src="/videos/hero-bg-10d1.MOV" type="video/mp4" />
            </video>
      <div className={s.body}>
        <div>
           {/* <h1 className={s.title}>{t("title")}</h1> */}
          <h1 className={s.title}>{t("title1")}</h1>
          <h1 className={s.title}>{t("title2")}</h1>
          <h1 className={s.title}>{t("title3")}</h1>
        {/* <p className={s.descr}>{t("description")}</p> */}
        </div>
        <div className={s.btn}>
          <Link href="#service" className={s.btnLink} onClick={() => trackVisitClick("hero_visit")}>
            <TfiMenuAlt size={20} />
            <p>{t("services")}</p>
          </Link>
          <ServiceBtn />
        </div>
      </div>
    </div>
  );
};
