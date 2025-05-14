import { useTranslations } from 'next-intl';
import styles from "./Footer.module.css"
import Image from 'next/image';
// import logo from '../../../public/images/bnslogo.png';
import logo from '../../../public/images/bnslogo.svg';
import { NavBar } from '../NavBar';
import SocialLinks from '../SocialLinks/SocialLinks';
export default function Footer() {
  const t = useTranslations('Footer');

  return (
      <div className={styles.footer}>
          <NavBar />
          <SocialLinks/>
         <Image 
        src={logo} 
        alt="BNS service" 
        width={86}
        height={72}
          />
          <p className={styles.footerText}>2025 © BLS SERVICE</p>
    </div>
  );
}
