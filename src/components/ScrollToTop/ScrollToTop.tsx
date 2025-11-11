"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    console.log("[ScrollToTop] mounted");

    const handleScroll = () => {
      // Читаємо максимум з усіх варіантів
      const yWindow = window.scrollY ?? 0;
      const yDoc = document.documentElement?.scrollTop ?? 0;
      const yBody = (document.body as any)?.scrollTop ?? 0;
      const yScroll = document.scrollingElement?.scrollTop ?? 0;

      const y = Math.max(yWindow, yDoc, yBody, yScroll);

   

      setVisible(y > 250); // показуємо після ~1 секції
    };

    // 1) одразу перевіряємо
    handleScroll();

    // 2) слухачі на scroll (якщо працюють — добре)
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    // 3) резерв — інтервал, навіть якщо подія не прилетіла
    const intervalId = setInterval(handleScroll, 300);

    return () => {
      console.log("[ScrollToTop] cleanup");
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    console.log("[ScrollToTop] click -> scroll to top");

    // Плавний скрол вгору (якщо підтримується)
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }

    // Дубль на всякий випадок
    if (document.scrollingElement) {
      (document.scrollingElement as any).scrollTop = 0;
    }
    (document.documentElement as any).scrollTop = 0;
    (document.body as any).scrollTop = 0;
  };

  if (!visible) {
    // НІЧОГО не рендеримо, щоб не плутати
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={styles.scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import styles from "./ScrollToTop.module.css";

// export default function ScrollToTop() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const handleScroll = () => {
//       const y = document.scrollingElement?.scrollTop ?? 0;
//       setVisible(y > 250); // показуємо після ~1 секції
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     document.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     if (typeof window === "undefined") return;
//     document.scrollingElement?.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (!visible) return null;

//   return (
//     <button
//       type="button"
//       onClick={scrollToTop}
//       className={styles.scrollToTop}
//       aria-label="Scroll to top"
//     >
//       <FaArrowUp />
//     </button>
//   );
// }
