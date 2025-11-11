"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const y =
        window.scrollY || document.documentElement.scrollTop || 0;

      setVisible(y > 150); // показуємо після легкого скролу
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null; // нічого не рендеримо — нічого не плутає стиль

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    const el =
      document.scrollingElement || document.documentElement || document.body;

    el.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={styles.scrollButton}
      aria-label="Do góry"
    >
      ↑
    </button>
  );
}
