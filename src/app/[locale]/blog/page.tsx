
import { client } from "../../../lib/contentful";
import Image from "next/image";
import Link from "next/link";

const localeMap: Record<string, string> = {
    uk: "uk-UA",
    pl: "pl-PL",
    
};

export default async function BlogPage({ params }: { params: { locale: string } }) {
    const { items } = await client.getEntries({
        content_type: "blsBlog",
        locale: localeMap[params.locale],
    });

    return (
        <div>
            <h1>Блог</h1>
            <ul>
                {items.map((post: any) => (
                    <li key={post.sys.id} style={{ marginBottom: '20px' }}>
                        <Link href={`/${params.locale}/blog/${post.fields.slug}`}>
                            <h2>{post.fields.title}</h2>
                        </Link>
                        {post.fields.publishedDate && <p>Дата: {post.fields.publishedDate}</p>}
                        {post.fields.coverImage && (
                       
                              <Image
                                                src={`https:${post.fields.coverImage.fields.file.url}`}
                                                alt={post.fields.title}
                                                width={post.fields.coverImage.fields.file.details.image.width}
                                                height={post.fields.coverImage.fields.file.details.image.height}
                                                style={{ maxWidth: "100%", borderRadius: "8px" }}
                                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
