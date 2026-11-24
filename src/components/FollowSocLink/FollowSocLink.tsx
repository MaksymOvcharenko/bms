'use client';

import React from 'react'
import s from './FollowSocLink.module.css'
import Image from 'next/image'
import car from '../../../public/images/mobileSoc.png' // Імпортуємо логотип
import { useTranslations } from 'next-intl'
import { branches, contact } from '@/config/contact';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { useSelectedBranch } from '@/hooks/useSelectedBranch';
const FollowSocLink = () => {
    const t = useTranslations('FollowSocLink');
    const selectedBranch = useSelectedBranch();
    const isWarsaw = selectedBranch === 'warsaw';
    const socialLinks = branches[selectedBranch].socials;
  return (
     <div className={s.section}>
          <div className={s.body}>
              <Image src={car} width={352} alt='Follow BLS' height={469} className={s.img}></Image>
              <div className={s.cont}>
                <h3 className={s.title}>{t('title')}</h3>
                <p className={s.descr}>{t('descr')}</p>
                <ul className={s.list}>
                    <li className={s.listItem}><a href={isWarsaw ? socialLinks.facebook : "https://m.me/BLSserviceKrakow"} target="_blank" rel="noopener noreferrer" className={s.link}><FaFacebookF size={16}/>Facebook</a></li>
                    <li className={s.listItem}><a href={isWarsaw ? socialLinks.instagram : "https://ig.me/m/bls_service_krakow"} target="_blank" rel="noopener noreferrer" className={s.link}><FaInstagram size={20} />Instagram</a></li>
                    <li className={s.listItem}>
                      {isWarsaw
                        ? <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className={s.link}><FaTiktok size={16}/>TikTok</a>
                        : <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={s.link}><FaWhatsapp size={16}/>WhatsApp</a>}
                    </li>
                </ul>
              </div>
        </div>
     </div>
  )
}

export default FollowSocLink
