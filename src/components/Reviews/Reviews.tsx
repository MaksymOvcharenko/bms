import { useTranslations } from "next-intl";
import SwiperComponent from "../Swiper/Swiper";
import s from "./Reviews.module.css";

const reviewsImg = [
  "/images/reviews/review1.jpg",
  "/images/reviews/review2.png",

  "/images/reviews/review3.png",
  "/images/reviews/review1.jpg",
  "/images/reviews/review2.png",

  "/images/reviews/review3.png",
];
const Reviews = () => {
    const t = useTranslations('Reviews');
  return (
    <div className={s.section}>
          <div className={s.body}>
              <h3 className={s.title}>{t("title")}</h3>
        <SwiperComponent images={reviewsImg} />
      </div>
    </div>
  );
}; 

export default Reviews;
