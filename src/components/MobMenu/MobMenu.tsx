// 'use client';

// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// import styles from './MobMenu.module.css';
// import { IoClose } from 'react-icons/io5';
// import SocialLinks from '../SocialLinks/SocialLinks';
// import LocalSwitcher from '../local-switcher';

// interface Props {
//   onClose: () => void;
// }

// export default function MobileMenu({ onClose }: Props) {
//   const t = useTranslations('Navigation');

//   return (
//     <div className={styles.menu}>
//       <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
//         <IoClose size={40} />
//       </button>
//      <LocalSwitcher />
//       <nav className={styles.nav}>
//         <Link href="/" onClick={onClose}><span>{t('home')}</span></Link>
//         <Link href="/about" onClick={onClose}><span>{t('about')}</span></Link>
//         <Link href="/services" onClick={onClose}><span>{t('services')}</span></Link>
//         <Link href="/gallery" onClick={onClose}><span>{t('gallery')}</span></Link>
//         <Link href="/reviews" onClick={onClose}><span>{t('reviews')}</span></Link>
//         <Link href="/contact" onClick={onClose}><span>{t('contact')}</span></Link>
//         <Link href="/blog" onClick={onClose}><span>{t('blog')}</span></Link>
//       </nav>

//       <div className={styles.socLink}><SocialLinks /></div>
//     </div>
//   );
// }
'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './MobMenu.module.css';
import { IoClose } from 'react-icons/io5';
import SocialLinks from '../SocialLinks/SocialLinks';
import LocalSwitcher from '../local-switcher';
import { Locale, localizePath } from '@/config/i18n';
import BranchSwitcher from '../BranchSwitcher/BranchSwitcher';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const t = useTranslations('Navigation');
  const locale = useLocale() as Locale;

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
        <IoClose size={40} />
      </button>
   
    

      <nav className={styles.nav}>
      <div className={styles.switcher}><LocalSwitcher /><BranchSwitcher /></div>
        <Link href={localizePath("/", locale)} onClick={onClose}><span>{t('home')}</span></Link>
        <Link href={`${localizePath("/", locale)}#soclink`} onClick={onClose}><span>{t('about')}</span></Link>
        <Link href={`${localizePath("/", locale)}#service`} onClick={onClose}><span>{t('services')}</span></Link>
        <Link href={`${localizePath("/", locale)}#gallery`} onClick={onClose}><span>{t('gallery')}</span></Link>
        <Link href={`${localizePath("/", locale)}#reviews`} onClick={onClose}><span>{t('reviews')}</span></Link>
        <Link href={`${localizePath("/", locale)}#contact`} onClick={onClose}><span>{t('contact')}</span></Link>
        <Link href={localizePath("/blog", locale)} onClick={onClose}><span>{t('blog')}</span></Link>
      </nav>
 
      <div className={styles.socLink}><SocialLinks /></div>
    </div>
  );
}
