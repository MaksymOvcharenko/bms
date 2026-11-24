
'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import styles from "./local-switcher.module.css"
import { Locale, locales } from '@/config/i18n';
import { useSelectedBranch, withBranchSuffix } from '@/hooks/useSelectedBranch';

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const localeActive = useLocale();
  const branch = useSelectedBranch();

  const languages: Array<{code: Locale; label: string}> = [
    { code: 'pl', label: 'PL' },
    { code: 'uk', label: 'UA' },
    { code: 'en', label: 'EN' },
  ];

  // const handleLanguageChange = (locale: string) => {
  //   setIsOpen(false);
  //   router.replace(`/${locale}`);
  // };
const handleLanguageChange = async (locale: string) => {
  setIsOpen(false);
  const localePattern = new RegExp(`^/(${locales.join('|')})(?=/|$)`);
  let pathWithoutLocale = window.location.pathname.replace(localePattern, '') || '/';
  pathWithoutLocale = withBranchSuffix(pathWithoutLocale, 'krakow');
  const blogPostMatch = pathWithoutLocale.match(/^\/blog\/([^/]+)$/);

  if (blogPostMatch) {
    try {
      const query = new URLSearchParams({
        sourceLocale: localeActive,
        targetLocale: locale,
        slug: decodeURIComponent(blogPostMatch[1]),
      });
      const response = await fetch(`/api/localized-blog-path?${query}`);
      if (response.ok) {
        const data = await response.json();
        pathWithoutLocale = `/blog/${data.slug}`;
      }
    } catch {
      // Keep the current slug if Contentful is temporarily unavailable.
    }
  }

  pathWithoutLocale = withBranchSuffix(pathWithoutLocale, branch);

  // Always visit the explicit locale once. For the default Polish locale,
  // middleware then redirects /pl/... to the canonical URL without a prefix
  // and updates NEXT_LOCALE, preventing an old UK/EN cookie from taking over.
  const localizedPath = `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  window.location.assign(`${localizedPath}${window.location.search}${window.location.hash}`);
};

  return (
    <div className={styles.switcher}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.switcherBtn}
        aria-expanded={isOpen}
        aria-label="Choose language"
      >
        
        {/* <div className={styles.flag}><Flag code={languages.find((lang) => lang.code === localeActive)?.flag || 'UA'} width={52} height={52} /></div> */}
        <div className={styles.lang}>
          <span>{languages.find((lang) => lang.code === localeActive)?.label || 'PL'}</span>
          <ChevronDown size={24} />
        </div>
      </button>

      {isOpen && (
        <div className={styles.modal}>
          {languages.map(({ code, label }) => (
            <button
              type="button"
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={styles.modalBtn}
            >
              {/* <div className={styles.modalSpan}><Flag code={flag} width={20} height={20} /></div> */}
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
