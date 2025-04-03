
import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Link from "next/link";

const localeMap: Record<string, string> = {
    uk: "uk-UA",
    pl: "pl-PL",
    en: "en-US",
};

export default async function BlogPostPage({ params }: { params: { locale: string, slug: string } }) {
    const { items } = await client.getEntries({
        content_type: "bmsBlog",
        "fields.slug": params.slug,
        locale: localeMap[params.locale],
    });

    const post = items[0];

    if (!post) return <h1>Пост не знайдено</h1>;

    return (
        <div>
            <Link href={`/${params.locale}/blog`}>← Назад до блогу</Link>
            <h1>{post.fields.title as any}</h1>
            {post.fields.publishedDate && <p>Дата: {post.fields.publishedDate as any}</p>}
            {post.fields.coverImage && (
                <img
                    src={post.fields.coverImage.fields.file.url}
                    alt={post.fields.title}
                    style={{ maxWidth: '100%', borderRadius: '8px' }}
                />
            )}
            <div style={{ marginTop: '20px' }}>
                {documentToReactComponents(post.fields.content as unknown as Document)}
            </div>
        </div>
    );
}
