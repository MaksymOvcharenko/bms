
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Locale, localizePath } from "@/config/i18n";
import styles from "./index.module.css";
import React from "react";

export const NavBar = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale() as Locale;


  return (
    <div className={styles.navbar}>
     <nav className={styles.nav}>
        <Link href={localizePath("/", locale)}><span>{t('home')}</span></Link>
        <Link href={`${localizePath("/", locale)}#soclink`}><span>{t('about')}</span></Link>
        <Link href={`${localizePath("/", locale)}#service`}><span>{t('services')}</span></Link>
        <Link href={`${localizePath("/", locale)}#gallery`}><span>{t('gallery')}</span></Link>
        <Link href={`${localizePath("/", locale)}#reviews`}><span>{t('reviews')}</span></Link>
        <Link href={`${localizePath("/", locale)}#contact`}><span>{t('contact')}</span></Link>
        <Link href={localizePath("/blog", locale)}><span>{t('blog')}</span></Link>
      </nav>
    </div>
  );
};
