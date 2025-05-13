import React from 'react'
import s from './FollowSocLink.module.css'
import Image from 'next/image'
import car from '../../../public/images/socLinkCar.jpg' // Імпортуємо логотип
import { useTranslations } from 'next-intl'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
const FollowSocLink = () => {
    const t = useTranslations('FollowSocLink');
  return (
     <div className={s.section}>
          <div className={s.body}>
              <Image src={car} width={352} alt='Follow BLS' height={469} className={s.img}></Image>
              <div className={s.cont}>
                <h3 className={s.title}>{t('title')}</h3>
                <p className={s.descr}>{t('descr')}</p>
                <ul className={s.list}>
                    <li className={s.listItem}><a href="https://www.facebook.com/BLSserviceKrakow" target="_blank" rel="noopener noreferrer" className={s.link}><FaFacebookF size={16}/>Facebook</a></li>
                    <li className={s.listItem}><a href="https://www.instagram.com/bls_service_krakow/" target="_blank" rel="noopener noreferrer" className={s.link}><FaInstagram size={20} />Instagram</a></li>
                    <li className={s.listItem}><a href="https://www.tiktok.com/@bls_service_krakow" target="_blank" rel="noopener noreferrer" className={s.link}><FaTiktok size={16}/>TikTok</a></li>
                </ul>
              </div>
        </div>
     </div>
  )
}

export default FollowSocLink

      
      