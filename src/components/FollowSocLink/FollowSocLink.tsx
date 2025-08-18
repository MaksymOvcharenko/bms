import React from 'react'
import s from './FollowSocLink.module.css'
import Image from 'next/image'
import car from '../../../public/images/mobileSoc.png' // Імпортуємо логотип
import { useTranslations } from 'next-intl'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
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
                    <li className={s.listItem}><a href="https://m.me/BLSserviceKrakow" target="_blank" rel="noopener noreferrer" className={s.link}><FaFacebookF size={16}/>Facebook</a></li>
                    <li className={s.listItem}><a href="https://ig.me/m/bls_service_krakow" target="_blank" rel="noopener noreferrer" className={s.link}><FaInstagram size={20} />Instagram</a></li>
                    <li className={s.listItem}><a href="https://wa.me/48577772223" target="_blank" rel="noopener noreferrer" className={s.link}><FaWhatsapp size={16}/>WhatsApp</a></li>
                </ul>
              </div>
        </div>
     </div>
  )
}

export default FollowSocLink

      
      