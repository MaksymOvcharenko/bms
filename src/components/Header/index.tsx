// import { useTranslations } from 'next-intl';
// import Image from 'next/image';  // Імпортуємо компонент Image
// import LocalSwitcher from '../local-switcher';
// import styles from './index.module.css';
// import { NavBar } from '../NavBar';
// import logo from '../../../public/images/bnslogo.png'; // Імпортуємо логотип

// export default function Header() {
//   const t = useTranslations('Navigation');
 
//   return (
//     <header className={styles.header}>
//       <Image 
//         src={logo} 
//         alt="BNS service" 
//         width={86} // Встановіть необхідні розміри
//         height={72} // Встановіть необхідні розміри
//       />
      
    
//     </header>
//   );
// }
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LocalSwitcher from '../local-switcher';
import { NavBar } from '../NavBar';
import styles from './index.module.css';
// import logo from '../../../public/images/bnslogo.png';
import logo from '../../../public/images/bnslogo.svg';
import { IoIosMenu } from "react-icons/io";
import { RiMenuLine } from 'react-icons/ri';
import MobileMenu from '../MobMenu/MobMenu';
import SocialLinks from '../SocialLinks/SocialLinks';
export default function Header() {
  const t = useTranslations('Navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className={styles.header}>
      <Image 
        src={logo} 
        alt="BNS service" 
        width={86}
        height={72}
      />
       <nav className={styles.nav}>
    
        <NavBar />
        <LocalSwitcher />
      </nav>
      <div className={styles.socLink}><SocialLinks />
         <a href="tel:+4857777223" className={styles.socLinkTel}>+48 577772223</a></div>
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
       <RiMenuLine className={styles.mobMenu} color='#ffff' width={40} height={40} />
      </button>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

     
    </header>
  );
}