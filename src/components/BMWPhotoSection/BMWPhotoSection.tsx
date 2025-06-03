"use client";

import { useEffect, useState } from "react";
import styles from "./BMWPhotoSection.module.css";

const photos = [
  "/images/BMWPhotoSection/PASEK.jpg",
  "/images/BMWPhotoSection/PASEK2.jpg",
  
  // Додай свої фото сюди
];

const BMWPhotoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // 4 секунди
    return () => clearInterval(interval);
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
