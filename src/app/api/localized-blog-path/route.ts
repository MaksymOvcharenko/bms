import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/contentful";
import { contentfulLocaleMap, isLocale } from "@/config/i18n";

export async function GET(request: NextRequest) {
  const sourceLocale = request.nextUrl.searchParams.get("sourceLocale") || "";
  const targetLocale = request.nextUrl.searchParams.get("targetLocale") || "";
  const slug = request.nextUrl.searchParams.get("slug") || "";

  if (!isLocale(sourceLocale) || !isLocale(targetLocale) || !slug) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  const source = await client.getEntries({
    content_type: "blsBlog",
    "fields.slug": slug,
    locale: contentfulLocaleMap[sourceLocale],
    limit: 1,
  });
  const entry = source.items[0];

  if (!entry) {
    return NextResponse.json({ slug });
  }

  const localizedEntry = await client.getEntry(entry.sys.id, {
    locale: contentfulLocaleMap[targetLocale],
  });

  return NextResponse.json({ slug: String(localizedEntry.fields.slug || slug) });
}
