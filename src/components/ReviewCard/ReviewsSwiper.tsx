"use client";

import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import s from "./Reviews.module.css";

// Якщо файл ReviewCard.tsx лежить поруч:
import ReviewCard, { reviewsUk, reviewsPl, type Review } from "../ReviewCard/ReviewCard";
// ^ шлях підправ, якщо інший

export default function Reviews() {
  const t = useTranslations("Reviews");
  const locale = useLocale();

  // вибираємо 9 відгуків під локаль
  const data: Review[] = (locale === "pl" ? reviewsPl : reviewsUk).slice(0, 9);

  return (
    <div className={s.section}>
      <div className={s.body}>
        <h3 className={s.title}>{t("title")}</h3>

        <Swiper
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          loop={data.length > 3}
          className={s.swiper}
          centeredSlides={false}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 10 },
            1280: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {data.map((review) => (
            <SwiperSlide key={review.id} className={s.slide}>
              <div className={s.cardWrap}>
                <ReviewCard review={review} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
