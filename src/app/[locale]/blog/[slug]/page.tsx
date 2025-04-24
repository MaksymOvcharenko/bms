
import { client } from "../../../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

const localeMap: Record<string, string> = {
  uk: "uk-UA",
  pl: "pl-PL",
 
};

// 🟢 Генеруємо всі статики для кожної мови
// export async function generateStaticParams() {
//   const locales = Object.keys(localeMap);

//   const entriesByLocale = await Promise.all(
//     locales.map(async (locale) => {
//       const { items } = await client.getEntries({
//         content_type: "blsBlog",
//         locale: localeMap[locale],
//         select: ["fields.slug"],
//       });

//       return items.map((item: any) => ({
//         slug: item.fields.slug,
//         locale,
//       }));
//     })
//   );

//   return entriesByLocale.flat();
// }
export async function generateStaticParams() {
  const locales = Object.keys(localeMap);

  const allParams: { slug: string; locale: string }[] = [];

  for (const locale of locales) {
    const { items } = await client.getEntries({
      content_type: "blsBlog",
      locale: localeMap[locale],
      select: ["fields.slug"],
    });

    // додаємо кожен slug для цієї мови
    for (const item of items) {
      if (item.fields?.slug) {
        allParams.push({
          slug: String(item.fields.slug),
          locale,
        });
      }
    }
  }

  return allParams;
}

// 🟢 Переґенерація кожну годину
export const revalidate = 3600;

export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { items } = await client.getEntries({
    content_type: "blsBlog",
    "fields.slug": params.slug,
    locale: localeMap[params.locale],
  });

  const post: any = items[0];
  if (!post) return <h1>Пост не знайдено</h1>;

  return (
    <div>
      <Link href={`/${params.locale}/blog`}>← Назад до блогу</Link>

      <h1>{post.fields.title}</h1>

      {post.fields.publishedDate && (
        <p>Дата: {new Date(post.fields.publishedDate).toLocaleDateString()}</p>
      )}

      {post.fields.coverImage && (
        <Image
          src={`https:${post.fields.coverImage.fields.file.url}`}
          alt={post.fields.title}
          width={post.fields.coverImage.fields.file.details.image.width}
          height={post.fields.coverImage.fields.file.details.image.height}
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      )}

      <div style={{ marginTop: "20px" }}>
        {documentToReactComponents(post.fields.content as Document)}
      </div>
    </div>
  );
}
