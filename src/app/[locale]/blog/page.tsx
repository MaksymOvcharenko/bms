
// import { client } from "../../../lib/contentful";
// import Image from "next/image";
// import Link from "next/link";

// const localeMap: Record<string, string> = {
//     uk: "uk-UA",
//     pl: "pl-PL",
    
// };

// export default async function BlogPage({ params }: { params: { locale: string } }) {
//     const { items } = await client.getEntries({
//         content_type: "blsBlog",
//         locale: localeMap[params.locale],
//     });

//     return (
//         <div>
//             <h1>Ekspercka wiedza i inspiracje motoryzacyjne</h1>
//             <ul>
//                 {items.map((post: any) => (
//                     <li key={post.sys.id} style={{ marginBottom: '20px' }}>
//                         <Link href={`/${params.locale}/blog/${post.fields.slug}`}>
//                             <h2>{post.fields.title}</h2>
//                         </Link>
//                         {post.fields.publishedDate && <p>Дата: {post.fields.publishedDate}</p>}
//                         {post.fields.coverImage && (
                       
//                               <Image
//                                                 src={`https:${post.fields.coverImage.fields.file.url}`}
//                                                 alt={post.fields.title}
//                                                 width={post.fields.coverImage.fields.file.details.image.width}
//                                                 height={post.fields.coverImage.fields.file.details.image.height}
//                                                 style={{ maxWidth: "100%", borderRadius: "8px" }}
//                                             />
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
import { client } from "../../../lib/contentful";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

const localeMap: Record<string, string> = {
  uk: "uk-UA",
  pl: "pl-PL",
};

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const skip = (currentPage - 1) * POSTS_PER_PAGE;

  const { items, total } = await client.getEntries({
    content_type: "blsBlog",
    locale: localeMap[params.locale],
    skip,
    limit: POSTS_PER_PAGE,
  });

  const headingText =
  params.locale === "uk"
    ? "Експертні знання та натхнення для автолюбителів"
    : "Ekspercka wiedza i inspiracje motoryzacyjne";

const readMoreText = params.locale === "uk" ? "Читати далі" : "Czytaj więcej";
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <div className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
          {headingText}
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
                    <Link href={`/${params.locale}/blog/${post.fields.slug}`}>
                      <h2 className={styles.title}>{post.fields.title}</h2>
                        </Link>
                       
                        <div className={styles.descriptions}>{documentToReactComponents(post.fields.description as Document)}</div>
                    {post.fields.publishedDate && (
                      <p className={styles.date}>
                      {new Date(post.fields.publishedDate).toLocaleDateString("uk-UA")}
                            </p>
                            
                        )}
                        <Link href={`/${params.locale}/blog/${post.fields.slug}`} className={styles.link}>
                        <p>{readMoreText} </p><IoIosArrowForward size={16} />
                        </Link>
                </div >
                
              </li>
            ))}
          </ul>
    
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`/${params.locale}/blog?page=${page}`}
                className={`${styles.pageLink} ${
                  page === currentPage ? styles.active : ""
                }`}
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
}
