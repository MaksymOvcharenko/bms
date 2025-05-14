// app/[locale]/services/[slug]/page.tsx

import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import s from "./styles.module.css"
import Image from "next/image";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
const localeMap: Record<string, string> = {
  uk: "uk-UA",
  pl: "pl-PL",
  
};

export async function generateStaticParams() {
  const locales = Object.keys(localeMap);
  const allParams: { slug: string; locale: string }[] = [];

  for (const locale of locales) {
    const { items } = await client.getEntries({
      content_type: "blsServices",
      locale: localeMap[locale],
      select: ["fields.slug"],
    });

    items.forEach((item: any) => {
      if (typeof item.fields.slug === "string") {
        allParams.push({ slug: item.fields.slug, locale });
      }
    });
  }

  return allParams;
}

export const revalidate = 3600;

export default async function ServicePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { items } = await client.getEntries({
    content_type: "blsServices",
    "fields.slug": params.slug,
    locale: localeMap[params.locale],
  });

  const service: any = items[0];
  if (!service) return <h1>Послугу не знайдено</h1>;

  return (
    <>
      <div className={s.container}>
        <div className={s.content}>
          <h1 className="text-3xl font-bold mb-4">{service.fields.title}</h1>
          <div className={s.imageContainer}>
            <Image
              src={`https:${service.fields.image.fields.file.url}`}
              alt={service.fields.image.fields.title}
              className={s.image}
              width={416}
              height={224}
            />
          </div>
          <div>{documentToReactComponents(service.fields.contents as Document)}</div>
        </div >
      </div>
      <ContactInfoSection />
      <FollowSocLink/>
    </>
  );
}
