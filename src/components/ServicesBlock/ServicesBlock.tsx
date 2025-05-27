
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
