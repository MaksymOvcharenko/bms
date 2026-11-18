// app/[locale]/services/[slug]/page.tsx

import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import s from "./styles.module.css"
import Image from "next/image";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
import { notFound } from "next/navigation";
import { contentfulLocaleMap, Locale, locales } from "@/config/i18n";

export async function generateStaticParams() {
  const allParams: { slug: string; locale: string }[] = [];

  for (const locale of locales) {
    const { items } = await client.getEntries({
      content_type: "blsServices",
      locale: contentfulLocaleMap[locale],
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
    locale: contentfulLocaleMap[params.locale as Locale],
  });

  const service: any = items[0];
  if (!service) notFound();

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
      
      <FollowSocLink />
      <ContactInfoSection />
    </>
  );
}
