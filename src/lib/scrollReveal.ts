export function initScrollReveal(selector = ".reveal") {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll<HTMLElement>(selector);

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // щоб анімація тільки раз
        }
      });
    },
    { threshold: 0.2 } // 20% елемента у в’юпорті = старт
  );

  elements.forEach((el) => observer.observe(el));
}
