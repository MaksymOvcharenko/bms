'use client';

import styles from './SocialLinks.module.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { contact } from '@/config/contact';

export default function SocialLinks() {
  return (
    <div className={styles.socials}>
      <a aria-label="Facebook" href={contact.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a aria-label="Instagram" href={contact.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a aria-label="TikTok" href={contact.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      <a aria-label="Phone" href={contact.phoneHref}><FaPhoneAlt /></a>
      
    </div>
    
  );
}
