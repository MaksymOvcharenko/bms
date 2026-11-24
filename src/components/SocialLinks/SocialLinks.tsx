'use client';

import styles from './SocialLinks.module.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { contact } from '@/config/contact';

type SocialLinksProps = {
  links?: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  showPhone?: boolean;
};

export default function SocialLinks({ links = contact.socials, showPhone = true }: SocialLinksProps) {
  return (
    <div className={styles.socials}>
      <a aria-label="Facebook" href={links.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a aria-label="Instagram" href={links.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a aria-label="TikTok" href={links.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      {showPhone ? <a aria-label="Phone" href={contact.phoneHref}><FaPhoneAlt /></a> : null}
      
    </div>
    
  );
}
