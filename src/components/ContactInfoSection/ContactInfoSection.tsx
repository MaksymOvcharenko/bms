// components/ContactInfoSection.tsx
"use client";

import { useTranslations } from "next-intl";
import styles from "./ContactInfoSection.module.css";
import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaViber, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import SocialLinks from "../SocialLinks/SocialLinks";
import { LuMapPin } from "react-icons/lu";
import { SlClock } from "react-icons/sl";

export default function ContactInfoSection() {
  const t = useTranslations("Contact");

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>{t("title")}</h2>
      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.item}>
            <FaPhoneAlt size={20} />{" "}
            <a href="tel:+48577772223">+48 577772223</a>
          </div>

          <div className={styles.item}>
            <FaTelegramPlane size={20} />{" "}
            <a href="https://t.me/+48577772223">Telegram</a>
          </div>
          <div className={styles.item}>
            <FaWhatsapp size={20} />{" "}
            <a href="https://wa.me/48577772223">WhatsApp</a>
          </div>

          <hr className={styles.divider} />

          <div className={styles.addressBlock}>
            <p className={styles.address}>
              <LuMapPin size={20} />
              <strong>
                <a href="https://maps.app.goo.gl/Fi2HuoBpcMQSGckf6">
                  Skrėcona 9, 31-587 Kraków
                </a>
              </strong>
            </p>
            <div className={styles.timeWork}>
              <SlClock size={20} />
              <div>
                <p>
                  <strong>{t("we_wait")}</strong>
                </p>
                <p>{t("mon_fri")}: 08:00–18:00</p>
                <p>{t("sat")}: 08:00–15:00</p>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

         <div className={styles.socLink}> <SocialLinks /></div>
        </div>

        <div className={styles.mapWrapper}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2561.622087192098!2d20.001973757919323!3d50.05591033999641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716455f98ebc329%3A0x4db2e3ba60a61628!2sAuto%20Serwis%20BMW%20Krak%C3%B3w%20-%20BLS!5e0!3m2!1suk!2spl!4v1747139666844!5m2!1suk!2spl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
