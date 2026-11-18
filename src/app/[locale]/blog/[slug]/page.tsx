

import { client } from "@/lib/contentful";
import { Document } from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import ShareButton from "@/components/ShareButton/ShareButton";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ContentfulRichText from "@/components/ContentfulRichText/ContentfulRichText";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { contentfulLocaleMap, Locale, locales, localizePath } from "@/config/i18n";

export async function generateStaticParams() {
  const allParams: { slug: string; locale: string }[] = [];

  for (const locale of locales) {
    const { items } = await client.getEntries({
      content_type: "blsBlog",
      locale: contentfulLocaleMap[locale],
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
  const locale = params.locale as Locale;
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });

  const { items: allPosts } = await client.getEntries({
    content_type: "blsBlog",
    locale: contentfulLocaleMap[locale],
    order: "-fields.publishedDate" as any, // каст до any, інакше TS буде скаржитися
  });

  const currentIndex = allPosts.findIndex(
    (post) => post.fields.slug === params.slug
  );

  const currentPost = allPosts[currentIndex];
  const prevPost = allPosts[currentIndex + 1]; // бо в Contentful order: -date (тобто найновіший перший)
  const nextPost = allPosts[currentIndex - 1];

  if (!currentPost) notFound();

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
            <Link href={localizePath("/blog", locale)}>← {t("back")}</Link>
          </div>
    
          <h1 className={styles.title}>{title}</h1>
    
          {publishedDate && (
            <p className={styles.date}>
              {new Date(publishedDate).toLocaleDateString(locale)}
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
    
          <ContentfulRichText document={content} />
    
          <div className={styles.navButtons}>
            {prevPost && (
              <Link href={localizePath(`/blog/${prevPost.fields.slug}`, locale)}>
                 <FaLongArrowAltLeft /> <p>{t("previousPost")}</p>
              </Link>
            )}
            <ShareButton />
            {nextPost && (
              <Link href={localizePath(`/blog/${nextPost.fields.slug}`, locale)}>
                <p>{t("nextPost")}</p> <FaLongArrowAltRight />
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
