import { GiSpanner } from 'react-icons/gi'
import s from './ServiceBtn.module.css'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const ServiceBtn = () => {
    const t = useTranslations('ServiceBtn');
  return (
      <div><Link href="#contact" className={s.btn}><GiSpanner size={20} />{t("btn") }</Link></div>
  )
}

export default ServiceBtn