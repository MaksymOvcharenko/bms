import { useTranslations } from "next-intl";
import SwiperComponent from "../Swiper/Swiper";
import s from "./Gallery.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const GalleryImg = [
  // "/images/gallery/gallery_1.jpg",
  "/images/gallery/gallery_3.jpg",

  "/images/gallery/gallery_6.jpg",
  "/images/gallery/gallery_9.jpg",
  "/images/gallery/gallery_13.jpg",

  "/images/gallery/gallery_14.jpg",
  "/images/gallery/gallery_15.jpg",
];
const Gallery = () => {
    const t = useTranslations('Gallery');
  return (
    <div className={s.section}>
          <div className={s.body}>
              <h3 className={s.title}>{t("title")}</h3>
        <SwiperComponent images={GalleryImg} />
        <div className={s.descr}>
          <p className={s.descrText}>{t("desc1")}</p>
        </div>
        <SocialLinks/>
      </div>
    </div>
  );
}; 

export default Gallery;
