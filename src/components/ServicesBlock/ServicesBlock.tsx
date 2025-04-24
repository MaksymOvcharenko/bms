// components/ServicesBlock.tsx
import Link from "next/link";
import { client } from "@/lib/contentful";

const localeMap: Record<string, string> = {
  uk: "uk-UA",
  pl: "pl-PL",

};

interface ServicesBlockProps {
  locale: string;
}

export default async function ServicesBlock({ locale }: ServicesBlockProps) {
  const { items } = await client.getEntries({
    content_type: "blsServices",
    locale: localeMap[locale],
    select: ["fields.title,fields.slug"],
  });

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">Наші послуги</h2>
      <ul className="space-y-2">
        {items.map((item: any) => (
          <li key={item.fields.slug}>
            <Link
              href={`/${locale}/services/${item.fields.slug}`}
              className="text-blue-600 hover:underline"
            >
              {item.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
