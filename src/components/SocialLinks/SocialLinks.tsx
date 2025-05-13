'use client';

import styles from './SocialLinks.module.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className={styles.socials}>
      <a href="https://www.facebook.com/BLSserviceKrakow" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://www.instagram.com/bls_service_krakow/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.tiktok.com/@bls_service_krakow" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      <a href="tel:+4857777223"><FaPhoneAlt /></a>
      
    </div>
    
  );
}
