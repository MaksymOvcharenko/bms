"use client";

import { useEffect, useState } from "react";
import styles from "./BMWPhotoSection.module.css";

const photos = [
  "/images/BMWPhotoSection/PASEK.jpg",
  "/images/BMWPhotoSection/PASEK2.jpg",
  
  // Додай свої фото сюди
];

const BMWPhotoSection = () => {

//   setCurrentIndex(0);

const [currentIndex, setCurrentIndex] = useState<number | null>(null); // Початково null

useEffect(() => {
  // Одразу активуємо перше фото з невеликою затримкою
  const initialTimeout = setTimeout(() => {
    setCurrentIndex(0);
  }, 10); // 100 мс затримки для спрацьовування transition

  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex + 1) % photos.length;
    });
  }, 4000);

  return () => {
    clearTimeout(initialTimeout);
    clearInterval(interval);
  };
}, []);
  return (
    <section className={styles.photoSection}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`${styles.photoSlide} ${index === currentIndex ? styles.active : ""}`}
          style={{ backgroundImage: `url(${photo})` }}
        />
      ))}
    </section>
  );
};

export default BMWPhotoSection;
