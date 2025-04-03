// import { client } from "@/lib/contentful";
// import Link from "next/link";

// const localeMap: Record<string, string> = {
//     uk: "uk-UA",
//     pl: "pl-PL",
//     en: "en-US",
// };

// export default async function BlogPage({ params }: { params: { locale: string } }) {
//     const { items } = await client.getEntries({
//         content_type: "bmsBlog",
//         locale: localeMap[params.locale], // 🟣 ВАЖЛИВО!
//     });

//     return (
//         <div>
//             <h1>Блог</h1>
//             <ul>
//                 {items.map((post: any) => (
//                     <li key={post.sys.id}>
//                         <Link href={`/${params.locale}/blog/${post.fields.slug}`}>
//                             {post.fields.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
import { client } from "@/lib/contentful";
import Link from "next/link";

const localeMap: Record<string, string> = {
    uk: "uk-UA",
    pl: "pl-PL",
    en: "en-US",
};

export default async function BlogPage({ params }: { params: { locale: string } }) {
    const { items } = await client.getEntries({
        content_type: "bmsBlog",
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
                            <img
                                src={post.fields.coverImage.fields.file.url}
                                alt={post.fields.title}
                                style={{ maxWidth: '300px', borderRadius: '8px' }}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
