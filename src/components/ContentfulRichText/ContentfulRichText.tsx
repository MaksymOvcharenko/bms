import { Fragment, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BLOCKS,
  Document,
  INLINES,
  MARKS,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./ContentfulRichText.module.css";

type ContentfulRichTextProps = {
  document: Document | null | undefined;
  variant?: "article" | "excerpt";
};

function renderTextWithBreaks(text: string) {
  return text.split(/\n+/).map((part, index, parts) => (
    <Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? <br /> : null}
    </Fragment>
  ));
}

export default function ContentfulRichText({
  document,
  variant = "article",
}: ContentfulRichTextProps) {
  if (!document) return null;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: unknown, children: ReactNode) => (
        <p className={styles.paragraph}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_node: unknown, children: ReactNode) => (
        <h2 className={styles.heading2}>{children}</h2>
      ),
      [BLOCKS.HEADING_2]: (_node: unknown, children: ReactNode) => (
        <h2 className={styles.heading2}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node: unknown, children: ReactNode) => (
        <h3 className={styles.heading3}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_node: unknown, children: ReactNode) => (
        <h3 className={styles.heading3}>{children}</h3>
      ),
      [BLOCKS.HEADING_5]: (_node: unknown, children: ReactNode) => (
        <h3 className={styles.heading3}>{children}</h3>
      ),
      [BLOCKS.HEADING_6]: (_node: unknown, children: ReactNode) => (
        <h3 className={styles.heading3}>{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (_node: unknown, children: ReactNode) => (
        <ul className={styles.list}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node: unknown, children: ReactNode) => (
        <ol className={styles.list}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: unknown, children: ReactNode) => (
        <li className={styles.listItem}>{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node: unknown, children: ReactNode) => (
        <blockquote className={styles.quote}>{children}</blockquote>
      ),
      [BLOCKS.HR]: () => <hr className={styles.rule} />,
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => {
        const href = String(node.data.uri || "");
        const isExternal = /^https?:\/\//.test(href);

        return isExternal ? (
          <a
            className={styles.link}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ) : (
          <Link className={styles.link} href={href || "#"}>
            {children}
          </Link>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = node.data.target;
        const file = asset?.fields?.file;
        const image = file?.details?.image;

        if (!file?.url || !file?.contentType?.startsWith("image/")) return null;

        return (
          <figure className={styles.figure}>
            <Image
              src={file.url.startsWith("//") ? `https:${file.url}` : file.url}
              alt={asset.fields.description || asset.fields.title || ""}
              width={image?.width || 1200}
              height={image?.height || 800}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 760px"
            />
            {asset.fields.description ? (
              <figcaption className={styles.caption}>
                {asset.fields.description}
              </figcaption>
            ) : null}
          </figure>
        );
      },
    },
    renderText: renderTextWithBreaks,
  };

  return (
    <div
      className={`${styles.root} ${
        variant === "excerpt" ? styles.excerpt : ""
      }`}
    >
      {documentToReactComponents(document, options)}
    </div>
  );
}
