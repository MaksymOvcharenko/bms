
import Link from "next/link";
import ServiceBtn from "../ServiceBtn/ServiceBtn";
import s from "./Hero.module.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className={s.section}>
          {/* <video
              
        autoPlay
        muted
        loop
        playsInline
        className={s.video}
        poster="/images/heroImgFallback.jpg" // fallback зображення
      >
        <source src="/videos/hero-bg-4.mp4" type="video/mp4" />
      </video> */}
      <video
              
              autoPlay
              muted
              loop
              playsInline
              className={s.video}
              poster="/images/heroImgFallback.jpg" // fallback зображення
            >
              <source src="/videos/hero-bg-6.mp4" type="video/mp4" />
            </video>

      <div className={s.body}>
        <div>
        <h1 className={s.title}>{t("title")}</h1>
        <p className={s.descr}>{t("description")}</p>
        </div>
        <div className={s.btn}>
          <Link href="#service" className={s.btnLink}>
            <TfiMenuAlt size={20} />
            <p>{t("services")}</p>
          </Link>
          <ServiceBtn />
        </div>
      </div>
    </div>
  );
};
