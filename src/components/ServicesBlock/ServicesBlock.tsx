// // components/ServicesBlock.tsx
// import Link from "next/link";
// import { client } from "@/lib/contentful";

// const localeMap: Record<string, string> = {
//   uk: "uk-UA",
//   pl: "pl-PL",

// };

// interface ServicesBlockProps {
//   locale: string;
// }


// export default async function ServicesBlock({ locale }: ServicesBlockProps) {
//   const { items } = await client.getEntries({
//     content_type: "blsServices",
//     locale: localeMap[locale],
//     select: ["fields.title,fields.slug"],
//   });

//   return (
//     <section className="my-10">
//       <h2 className="text-2xl font-bold mb-4">Наші послуги</h2>
//       <ul className="space-y-2">
//         {items.map((item: any) => (
//           <li key={item.fields.slug}>
//             <Link
//               href={`/${locale}/services/${item.fields.slug}`}
//               className="text-blue-600 hover:underline"
//             >
//               {item.fields.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
// import Link from "next/link";
// import { client } from "@/lib/contentful";

// const localeMap: Record<string, string> = {
//   uk: "uk-UA",
//   pl: "pl-PL",
// };

// const categoryNames: Record<number, Record<string, string>> = {
//   1: { uk: "Базові послуги", pl: "Podstawowe usługi" },
//   2: { uk: "Балансування / розвал-сходження", pl: "Wyważenie i ustawienie zbieżności kół" },
//   3: { uk: "Шини", pl: "Montaż i demontaż opon" },
//   4: { uk: "Інше", pl: "Inne usługi" },
//   5: { uk: "Модифікації", pl: "Zaawansowane modyfikacje" },
// };

// interface ServicesBlockProps {
//   locale: string;
// }

// export default async function ServicesBlock({ locale }: ServicesBlockProps) {
//   const { items } = await client.getEntries({
//     content_type: "blsServices",
//     locale: localeMap[locale],
//     select: ["fields.title", "fields.slug", "fields.category"],
//   });

//   // Групуємо послуги за категоріями
//   const grouped = items.reduce((acc: Record<number, any[]>, item: any) => {
//     const cat = item.fields.category || 0;
//     if (!acc[cat]) acc[cat] = [];
//     acc[cat].push(item);
//     return acc;
//   }, {});

//   return (
//     <section className="my-10 px-4">
//       <h2 className="text-2xl font-bold mb-6">
//         {locale === "uk" ? "Наші послуги" : "Nasze usługi"}
//       </h2>

//       {Object.entries(grouped).map(([catKey, services]) => (
//         <div key={catKey} className="mb-8">
//           <h3 className="text-lg font-semibold mb-2">
//             {categoryNames[Number(catKey)]?.[locale] || `Категорія ${catKey}`}
//           </h3>

//           <ul className="space-y-1">
//             {services.map((item) => (
//               <li key={item.fields.slug}>
//                 <Link
//                   href={`/${locale}/services/${item.fields.slug}`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   {item.fields.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </section>
//   );
// }
import Link from "next/link";
import { client } from "@/lib/contentful";
import styles from "./ServicesBlock.module.css";
import { FaChevronDown } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";

const localeMap: Record<string, string> = {
  uk: "uk-UA",
  pl: "pl-PL",
};

const categoryNames: Record<number, Record<string, string>> = {
  1: { uk: "Базові послуги", pl: "Podstawowe usługi" },
  2: { uk: "Балансування / розвал-сходження", pl: "Wyważenie i ustawienie zbieżności kół" },
  3: { uk: "Шини", pl: "Montaż i demontaż opon" },
  4: { uk: "Інше", pl: "Inne usługi" },
  5: { uk: "Модифікації", pl: "Zaawansowane modyfikacje" },
};

interface ServicesBlockProps {
  locale: string;
}

export default async function ServicesBlock({ locale }: ServicesBlockProps) {
  const { items } = await client.getEntries({
    content_type: "blsServices",
    locale: localeMap[locale],
    select: ["fields.title", "fields.slug", "fields.category"],
  });

  const grouped = items.reduce((acc: Record<number, any[]>, item: any) => {
    const cat = item.fields.category || 0;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          {locale === "uk" ? "Сервіс від А до Я" : "Serwis od A do Z"}
        </h2>
  
        {Object.entries(grouped).map(([catKey, services]) => (
          <details key={catKey} className={styles.categoryBlock}>
            <summary className={styles.categoryTitle}>
              <span>{categoryNames[Number(catKey)]?.[locale] || `Категорія ${catKey}`}</span>
              <FaChevronDown className={styles.icon} />
            </summary>
  
            <ul className={styles.serviceList}>
              {services.map((item) => (
                <li key={item.fields.slug} className={styles.serviceItem}>
                  <GiSpanner size={16} />
                  <Link href={`/${locale}/services/${item.fields.slug}`}>
                    {item.fields.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </section>
    </div >
  );
}
