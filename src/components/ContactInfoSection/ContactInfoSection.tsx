// components/ContactInfoSection.tsx
"use client";

import { useTranslations } from "next-intl";
import styles from "./ContactInfoSection.module.css";
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import SocialLinks from "../SocialLinks/SocialLinks";
import { LuMapPin } from "react-icons/lu";
import { SlClock } from "react-icons/sl";
import { contact } from "@/config/contact";

export default function ContactInfoSection() {
  const t = useTranslations("Contact");

  return (
    <section className={styles.wrapper} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.heading}>{t("title")}</h2>
      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.item}>
            <FaPhoneAlt size={20} />{" "}
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </div>

          <div className={styles.item}>
            <FaTelegramPlane size={20} />{" "}
            <a href={contact.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
          <div className={styles.item}>
            <FaWhatsapp size={20} />{" "}
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>

          <hr className={styles.divider} />

          <div className={styles.addressBlock}>
            <p className={styles.address}>
              <LuMapPin size={20} />
              <strong>
                <a href={contact.maps} target="_blank" rel="noopener noreferrer">
                  {contact.address}
                </a>
              </strong>
            </p>
            <div className={styles.timeWork}>
              <SlClock size={20} />
              <div>
                <p>
                  <strong>{t("we_wait")}</strong>
                </p>
                <p>{t("mon_fri")}: {contact.hours.weekdays}</p>
                <p>{t("sat")}: {contact.hours.saturday}</p>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

         <div className={styles.socLink}> <SocialLinks /></div>
        </div>

        <div className={styles.mapWrapper}>
            <iframe
              title={t("map_title")}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2561.622087192098!2d20.001973757919323!3d50.05591033999641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716455f98ebc329%3A0x4db2e3ba60a61628!2sAuto%20Serwis%20BMW%20Krak%C3%B3w%20-%20BLS!5e0!3m2!1suk!2spl!4v1747139666844!5m2!1suk!2spl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      </div>
    </section>
  );
}
