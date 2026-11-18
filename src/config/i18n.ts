export const locales = ["pl", "uk", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

export const contentfulLocaleMap: Record<Locale, string> = {
  pl: "pl-PL",
  uk: "uk-UA",
  // Contentful currently has no English locale. Keep the site available until
  // en-US is added in Contentful, then change this value to "en-US".
  en: "pl-PL",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(path: string, locale: Locale) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale
    ? normalizedPath
    : `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}
