'use client';

import styles from './SocialLinks.module.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { branches, contact } from '@/config/contact';
import { useSelectedBranch } from '@/hooks/useSelectedBranch';

type SocialLinksProps = {
  links?: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  showPhone?: boolean;
};

export default function SocialLinks({ links, showPhone = true }: SocialLinksProps) {
  const selectedBranch = useSelectedBranch();
  const activeLinks = links ?? branches[selectedBranch].socials;

  return (
    <div className={styles.socials}>
      <a aria-label="Facebook" href={activeLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a aria-label="Instagram" href={activeLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a aria-label="TikTok" href={activeLinks.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      {showPhone ? <a aria-label="Phone" href={contact.phoneHref}><FaPhoneAlt /></a> : null}
      
    </div>
    
  );
}
