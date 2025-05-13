
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./index.module.css";
import React from "react";

export const NavBar = () => {
  const t = useTranslations("Navigation");


  return (
    <div className={styles.navbar}>
     <nav className={styles.nav}>
        <Link href="/" ><span>{t('home')}</span></Link>
        <Link href="/about" ><span>{t('about')}</span></Link>
        <Link href="/services" ><span>{t('services')}</span></Link>
        <Link href="/gallery" ><span>{t('gallery')}</span></Link>
        <Link href="/reviews" ><span>{t('reviews')}</span></Link>
        <Link href="/contact" ><span>{t('contact')}</span></Link>
        <Link href="/blog" ><span>{t('blog')}</span></Link>
      </nav>
    </div>
  );
};
