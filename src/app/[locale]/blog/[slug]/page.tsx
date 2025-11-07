"use client";

import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import ShareButton from "@/components/ShareButton/ShareButton";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const localeMap: Record<string, string> = {
  uk: "uk-UA",
  pl: "pl-PL",
};

export async function generateStaticParams() {
  const locales = Object.keys(localeMap);

  const allParams: { slug: string; locale: string }[] = [];

  for (const locale of locales) {
    const { items } = await client.getEntries({
      content_type: "blsBlog",
      locale: localeMap[locale],
      select: ["fields.slug"],
    });

    for (const item of items) {
      if (item.fields?.slug) {
        allParams.push({ slug: String(item.fields.slug), locale });
      }
    }
  }

  return allParams;
}

export const revalidate = 3600;

export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = localeMap[params.locale];

  const { items: allPosts } = await client.getEntries({
    content_type: "blsBlog",
    locale,
    order: "-fields.publishedDate" as any, // каст до any, інакше TS буде скаржитися
  });

  const currentIndex = allPosts.findIndex(
    (post) => post.fields.slug === params.slug
  );

  const currentPost = allPosts[currentIndex];
  const prevPost = allPosts[currentIndex + 1]; // бо в Contentful order: -date (тобто найновіший перший)
  const nextPost = allPosts[currentIndex - 1];

  if (!currentPost) return <h1>Пост не знайдено</h1>;

  const { title, content, coverImage, publishedDate } =
    currentPost.fields as {
      title: string;
      content: Document;
      coverImage: {
        fields: {
          file: { url: string; details: { image: { width: number; height: number } } };
          title: string;
        };
      };
      publishedDate: string;
    };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.back}>
            <Link href={`/${params.locale}/blog`}>{params.locale === "uk" ? "← Назад до блогу" : "← Powrót do bloga"}</Link>
          </div>
    
          <h1 className={styles.title}>{title}</h1>
    
          {publishedDate && (
            <p className={styles.date}>
              {new Date(publishedDate).toLocaleDateString(params.locale)}
            </p>
          )}
    
          {coverImage && (
            <Image
              src={`https:${coverImage.fields.file.url}`}
              alt={coverImage.fields.title}
              width={coverImage.fields.file.details.image.width}
              height={coverImage.fields.file.details.image.height}
              className={styles.image}
            />
          )}
    
          <div className={styles.content}>
            {documentToReactComponents(content)}
          </div>
    
          <div className={styles.navButtons}>
            {prevPost && (
              <Link href={`/${params.locale}/blog/${prevPost.fields.slug}`}>
                 <FaLongArrowAltLeft /> <p>{params.locale === "uk" ? "Попередній" : "Poprzednia"}</p>
              </Link>
            )}
            <ShareButton locale={params.locale as "uk" | "pl"} />
            {nextPost && (
              <Link href={`/${params.locale}/blog/${nextPost.fields.slug}`}>
                <p>{params.locale === "uk" ? "Наступний" : "Następna"}</p> <FaLongArrowAltRight />
              </Link>
            )}
          </div>
        </div>
      </div>
      <FollowSocLink />
      <ContactInfoSection />
    </>
  );
}
