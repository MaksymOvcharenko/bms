import { GiSpanner } from 'react-icons/gi'
import s from './ServiceBtn.module.css'
import { useTranslations } from 'next-intl';

const ServiceBtn = () => {
    const t = useTranslations('ServiceBtn');
  return (
      <div><a href="" className={s.btn}><GiSpanner size={20} />{t("btn") }</a></div>
  )
}

export default ServiceBtn