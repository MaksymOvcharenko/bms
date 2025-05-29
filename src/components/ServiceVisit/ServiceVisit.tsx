import Image from "next/image";
import s from "./ServiceVisit.module.css";
import ServiceBtn from "../ServiceBtn/ServiceBtn";
import { useTranslations } from "next-intl";

const ServiceVisit = () => {
    const t = useTranslations('ServiceVisit');
  return (
    <div className={s.section}>
      <div className={s.body}>
        <Image
          src={"/images/visitCar.jpg"}
          width={330}
          height={330}
                  alt="Visita Servisova BLS Krakow"
                  className={s.img}
              ></Image>
              <div className={s.cont}>
                <h3 className={s.title}>{t('title')}</h3>
                <p className={s.descr}>{t('desc1')}
                </p>
                <p className={s.descr}>
            {t('desc2')}</p>
            <p className={s.descr}>
            {t('desc3')}</p>
                <div className={s.btn}><ServiceBtn /></div>
              </div>
              
      </div>
    </div>
  );
};

export default ServiceVisit;
