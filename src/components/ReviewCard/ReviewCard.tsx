"use client";

import Image from "next/image";
import styles from "./ReviewCard.module.css";
import { FaGoogle } from "react-icons/fa";

/** Тип відгуку */
export type Review = {
  id: string;
  author: string;
  rating: number;   // 1..5
  date: string;     // "2025-10-31" або "Листопад 2024"
  text: string;
  reviewUrl: string;
  avatar?: string;  // опц., url аватарки автора
  photo?: string;   // опц., фото з відгуку
};

/** Пропси картки */
type Props = { review: Review };

/** 9 прикладів — заміниш своїми */
export const reviewsUk: Review[] = [
  {
    id: "uk-1",
    author: "Андрей Георгий",
    rating: 5,
    date: "2025-05-04",
    text: "Налаштували мені мою автоматичну коробку передач та зробили їй прошивку xHP Stage 2 всього за день у BLS Service Kraków. Тепер X5 G05 M50i іде неперевершено.Дякую за професійний ремонт BMW! Рекомендую цей автосервіс.",
    reviewUrl: "https://maps.app.goo.gl/6m3fvPDAYeroFg946",
    avatar: "/images/reviews/ava1ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Ivan Sytnik",
    rating: 5,
    date: "2024-07-14",
    text: "Обслуговував BMW X1 F48 — заміна мастила та діагностика ходової. Швидко, чітко, зрозуміло. Рекомендую!",
    reviewUrl: "https://maps.app.goo.gl/KdJaXoMrPkbiHFDu5",
    avatar: "/images/reviews/ava2ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Pendeosi",
    rating: 5,
    date: "2025-06-13",
    text: "Проблеми з електрикою BMW G30 530i xDrive усунули за годину в BLS Service Kraków. Персонал уважний, сервіс професійний. Рекомендую для ремонту BMW!",
    reviewUrl: "https://maps.app.goo.gl/vRr24aDJGoUxVzs29",
    avatar: "/images/reviews/ava3ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Нікіта Клименко",
    rating: 5,
    date: "2025-08-24",
    text: "Замінив ланцюг на BMW 320d G20. Все зробили за день, ще й з гарантією. Дуже задоволений.",
    reviewUrl: "https://maps.app.goo.gl/PTmVyLdBWcjxkEnQ9",
    avatar: "/images/reviews/ava4ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Chep",
    rating: 5,
    date: "2024-08-05",
    text: "Діагностика двигуна моєї BMW X4M F98 LCi пройшла швидко. Знайшли причину і одразу полагодили. Рекомендую!",
    reviewUrl: "https://maps.app.goo.gl/vXVZfueFfFDmDZm97",
    avatar: "/images/reviews/ava5ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Сергей Антонюк",
    rating: 5,
    date: "2025-08-08",
    text: "Провели механічну діагностику моєї BMW F30 335i - авто блищить. Дуже задоволений!",
    reviewUrl: "https://maps.app.goo.gl/UzDFx2EXC8nFT3ZK6",
    avatar: "/images/reviews/ava6ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Телетьон Станіслав",
    rating: 5,
    date: "2025-05-05",
    text: "Мастило та фільтр замінили якісно в BLS Service Kraków, ще й порадили, коли наступне ТО на моїй BMW G16 M850i xDrive. Приємний досвід обслуговування BMW!",
    reviewUrl: "https://maps.app.goo.gl/i48xec9wf1zGDK616",
    avatar: "/images/reviews/ava7ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Alexander Yarmakov",
    rating: 5,
    date: "2025-03-17",
    text: "Нові гальмівні колодки встановили швидко в моєму BMW X7 G07 в BLS Service Kraków. Усе без клопоту, гальма працюють чітко. Рекомендую сервіс!",
    reviewUrl: "https://maps.app.goo.gl/iuc9KTWqamXCfoMC8",
    avatar: "/images/reviews/ava8ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
   {
    id: "uk-1",
    author: "Korosta Oparish",
    rating: 5,
    date: "2025-07-14",
    text: "Замінили гальмівні колодки та диски в X5M F85 на станції BLS Service Kraków. Робота на вищому рівні, гальма працюють ідеально. Професійний автосервіс для BMW!",
    reviewUrl: "https://maps.app.goo.gl/XFMrsmGCt8akLkV78",
    avatar: "/images/reviews/ava9ua.png",
    photo: "/images/reviews/photo-1.jpg",
  },
  // ... додай ще 8
];

export const reviewsPl: Review[] = [
  {
    id: "pl-1",
    author: "Oleh",
    rating: 5,
    date: "2025-02-07",
    text: "Bardzo zadowolony z usług tego warsztatu samochodowego! Mechanicy są profesjonalni, wszystko dokładnie wyjaśnili i szybko naprawili problem z samochodem. Ceny są przejrzyste, żadnych ukrytych kosztów. Szczególnie doceniam terminowość i indywidualne podejście do klienta. Teraz wiem, gdzie się zgłosić w razie potrzeby naprawy lub serwisu auta. Gorąco polecam!",
    reviewUrl: "https://maps.app.goo.gl/Mm1xPLXvDWRLReR27",
    avatar: "/images/reviews/ava1pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
  {
    id: "pl-1",
    author: "Radek",
    rating: 5,
    date: "2024-12-15",
    text: "Do ekipy BLS service wpadłem przypadkowo szukając serwisu dla swojego BMW i teraz wypadałoby ich polecić bo naprawdę jest za co. Wszyscy tam mają niesamowicie dobre podejście do klienta, są bardzo kompetentni i bezproblemowi. Przede wszystkim widać że kochają i pasjonują się samochodami a nie robią rzeczy na siłę żeby tylko zarobić. Jasno i klarownie przedstawiają wszystkie koszty, jest pełny wgląd w części które zamawiają i do tego zawsze się można napić pysznej kawki czekając na samochód! Napewno serwis w którym zostanę na lata. Pozdrawiam, Radek.",
    reviewUrl: "https://maps.app.goo.gl/5xx9BBp1CjWJBgKD6",
    avatar: "/images/reviews/ava2pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
   {
    id: "pl-1",
    author: "Evgen Gusar",
    rating: 5,
    date: "2025-09-15",
    text: "BMW 530d F10 po serwisie odzyskał moc. Jasne zasady, bez ukrytych kosztów.",
    reviewUrl: "https://maps.app.goo.gl/y1vqbQj8Jv7WyK418",
    avatar: "/images/reviews/ava3pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
  {
    id: "pl-1",
    author: "Mohammad Harbotli",
    rating: 5,
    date: "2025-01-17",
    text: "Mieszkam w Cannes (Francja). byłem w trzech krajach z problemem z układem chłodzenia mojego BMW X5 M F15. Wszyscy tańczyli z diagnozą wymiany silnika. Cała nadzieja została utracona. Po zweryfikowanej diagnozie w serwisie BLS niezależny dealer BMW stwierdził rozszczelnienie układu chłodzenia. Chłodnica została wymieniona i problem zniknął. Wielkie dzięki dla fachowców i kompetentnych mechaników. Polecam do regularnej konserwacji miłośnikom swoich BMW.",
    reviewUrl: "https://maps.app.goo.gl/gckcZiE1V3iqPBvq7",
    avatar: "/images/reviews/ava4pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
   {
    id: "pl-1",
    author: "Cifrotex Cifrotex",
    rating: 5,
    date: "2025-09-13",
    text: "BMW 530d F10 po serwisie odzyskał moc. Jasne zasady, bez ukrytych kosztów.",
    reviewUrl: "https://maps.app.goo.gl/6QSMUf43mfCKXL4f7",
    avatar: "/images/reviews/ava5pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
  {
    id: "pl-1",
    author: "Ruslana Tretak",
    rating: 5,
    date: "2025-05-09",
    text: "Naprawa elektryki w BLS Service Kraków zajęła godzinę. Wszystko działa bez zarzutu u mnie w BMW F36 430 xDrive. Profesjonalny serwis BMW!",
    reviewUrl: "https://maps.app.goo.gl/drmEqKw2Vio9ZScAA",
    avatar: "/images/reviews/ava6pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
  {
    id: "pl-1",
    author: "Yana Ml",
    rating: 5,
    date: "2025-05-09",
    text: "Komputerowa diagnostyka silnika mojej BMW X5 F15 35iX precyzyjna i szybka. Od razu wiedzieli, co naprawić.",
    reviewUrl: "https://maps.app.goo.gl/KStmFA8AT9fnowmF8",
    avatar: "/images/reviews/ava7pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
  {
    id: "pl-1",
    author: "Moma",
    rating: 5,
    date: "2025-06-27",
    text: "Wymiana opon przebiegła bardzo sprawnie w mojej BMW F23 M240iX. Fachowa obsługa, uczciwa cena.",
    reviewUrl: "https://maps.app.goo.gl/KStmFA8AT9fnowmF8",
    avatar: "/images/reviews/ava8pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
  {
    id: "pl-1",
    author: "Maks Szczypior",
    rating: 5,
    date: "2025-06-27",
    text: "Polecam chłopaków! Znają się wyjątkowo dobrze na BMW, nie wiem czy czasem nie są lepsi od dealerów autoryzowanych serwisów BMW, bo oferują dużo więcej usług niż jest w stanie zaoferować dealer, a do tego - w rozsądnych cenach ☝️Od teraz, przyjeżdżam na serwis tylko tutaj",
    reviewUrl: "https://maps.app.goo.gl/VfSeYvxthnFDDyFi8",
    avatar: "/images/reviews/ava9pl.png",
    photo: "/images/reviews/photo-2.jpg",
  },
  // ... додай ще 8
];

/** Картка відгуку (клік веде на реальний відгук у Google) */
export default function ReviewCard({ review }: Props) {
  const { author, rating, date, text, reviewUrl, avatar, photo } = review;

  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
      aria-label={`Відкрити відгук ${author} у Google`}
    >
      <article className={styles.card}>
        <header className={styles.header}>
          <div className={styles.authorBox}>
            <div className={styles.avatar}>
              {avatar ? (
                <Image
                  src={avatar}
                  alt={author}
                  width={40}
                  height={40}
                  className={styles.avatarImg}
                />
              ) : (
                <div className={styles.avatarFallback}>
                  {author?.charAt(0) ?? "•"}
                </div>
              )}
            </div>

            <div className={styles.authorMeta}>
              <div className={styles.authorName}>{author}</div>

              <div className={styles.starsRow} aria-label={`${rating} з 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={i < rating ? styles.starActive : styles.star}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className={styles.date}>{date}</span>
              </div>
            </div>
          </div>
        </header>

        <p className={styles.text}>{text}</p>

    
        <footer className={styles.footer}>
          
            <FaGoogle />
          
          <span className={styles.openText}>Open in Google</span>
        </footer>
      </article>
    </a>
  );
}
