
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Locale, localizePath } from "@/config/i18n";
import styles from "./index.module.css";
import React from "react";
import { useSelectedBranch, withBranchSuffix } from "@/hooks/useSelectedBranch";

export const NavBar = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale() as Locale;
  const branch = useSelectedBranch();
  const homePath = withBranchSuffix(localizePath("/", locale), branch);
  const blogPath = withBranchSuffix(localizePath("/blog", locale), branch);


  return (
    <div className={styles.navbar}>
     <nav className={styles.nav}>
        <Link href={homePath}><span>{t('home')}</span></Link>
        <Link href={`${homePath}#soclink`}><span>{t('about')}</span></Link>
        <Link href={`${homePath}#service`}><span>{t('services')}</span></Link>
        <Link href={`${homePath}#gallery`}><span>{t('gallery')}</span></Link>
        <Link href={`${homePath}#reviews`}><span>{t('reviews')}</span></Link>
        <Link href={`${homePath}#contact`}><span>{t('contact')}</span></Link>
        <Link href={blogPath}><span>{t('blog')}</span></Link>
      </nav>
    </div>
  );
};
