

import Image from "next/image";
import Link from "next/link";
import styles from "./ShortBlog.module.css";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IoIosArrowForward } from "react-icons/io";

import { client } from "@/lib/contentful";
import { TfiMenuAlt } from "react-icons/tfi";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { contentfulLocaleMap, Locale, localizePath } from "@/config/i18n";

const POSTS_PER_PAGE = 3;

export default async function ShortBlog({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { page?: string };
}) {
  const locale = params.locale as Locale;
  unstable_setRequestLocale(locale);
  const currentPage = Number(searchParams?.page) || 1;
  const skip = (currentPage - 1) * POSTS_PER_PAGE;
  const t = await getTranslations({ locale, namespace: "Blog" });

  const { items, total } = await client.getEntries({
    content_type: "blsBlog",
    locale: contentfulLocaleMap[locale],
    order: "-fields.publishedDate" as any,
    skip,
    limit: POSTS_PER_PAGE,
  });
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
   <>
        <div className={styles.section}>
            <div className={styles.container}>
              <h1 className={styles.heading}>
              {t("blogSectionTitle")}
              </h1>
        
              <ul className={styles.list}>
                {items.map((post: any) => (
                    <li key={post.sys.id} className={styles.item}>
                        {post.fields.coverImage && (
                      <Image
                        src={`https:${post.fields.coverImage.fields.file.url}`}
                        alt={post.fields.title}
                        width={post.fields.coverImage.fields.file.details.image.width}
                        height={post.fields.coverImage.fields.file.details.image.height}
                        className={styles.image}
                      />
                    )}
                    <div className={styles.text}>
                        <Link href={localizePath(`/blog/${post.fields.slug}`, locale)}>
                          <h2 className={styles.title}>{post.fields.title}</h2>
                            </Link>
                           
                            <div className={styles.descriptions}>{documentToReactComponents(post.fields.description as Document)}</div>
                        {post.fields.publishedDate && (
                          <p className={styles.date}>
                          {new Date(post.fields.publishedDate).toLocaleDateString(locale)}
                                </p>
                                
                            )}
                            <Link href={localizePath(`/blog/${post.fields.slug}`, locale)} className={styles.link}>
                            <p>{t("readMore")} </p><IoIosArrowForward size={16} />
                            </Link>
                    </div >
                    
                  </li>
                ))}
              </ul>
        
              <div className={styles.pagination}>
                
                  <Link
                  
                    href={localizePath("/blog", locale)}
                    className={styles.pageLink}
                  >
                   <TfiMenuAlt /> {t("allArticles")}
                  </Link>
               
              </div>
                  {/* <div className={styles.pagination}>
      {currentPage > 1 && (
        <Link
          href={`/${params.locale}/blog?page=${currentPage - 1}`}
          className={styles.pageNav}
        >
          &lt; {params.locale === "pl" ? "Poprzednia" : "Попередня"}
        </Link>
      )}
    
      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter((page) => {
          return (
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1
          );
        })
        .reduce((acc: (number | "...")[], page, i, arr) => {
          if (i > 0 && typeof arr[i - 1] === "number" && page - (arr[i - 1] as number) > 1) {
            acc.push("...");
          }
          acc.push(page);
          return acc;
        }, [])
        .map((page, i) =>
          page === "..." ? (
            <span key={`dots-${i}`} className={styles.dots}>
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={`/${params.locale}/blog?page=${page}`}
              className={`${styles.pageLink} ${
                page === currentPage ? styles.active : ""
              }`}
            >
              {page}
            </Link>
          )
        )}
    
      {currentPage < totalPages && (
        <Link
          href={`/${params.locale}/blog?page=${currentPage + 1}`}
          className={styles.pageNav}
        >
          {params.locale === "pl" ? "Następna" : "Наступна"} &gt;
        </Link>
      )}
    </div> */}
    
            </div>
          </div>
         
   </>
  );
}
