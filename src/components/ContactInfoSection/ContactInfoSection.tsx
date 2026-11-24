// components/ContactInfoSection.tsx
"use client";

import { useTranslations } from "next-intl";
import styles from "./ContactInfoSection.module.css";
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import SocialLinks from "../SocialLinks/SocialLinks";
import { LuMapPin } from "react-icons/lu";
import { SlClock } from "react-icons/sl";
import { BranchKey, branches } from "@/config/contact";

export default function ContactInfoSection() {
  const t = useTranslations("Contact");

  return (
    <section className={styles.wrapper} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.heading}>{t("title")}</h2>
      <div className={styles.branchesList}>
        {(Object.keys(branches) as BranchKey[]).map((branchKey) => {
          const branch = branches[branchKey];

          return (
            <article key={branchKey} className={styles.branchBlock}>
              <div className={styles.branchHeader}>
                <LuMapPin size={22} aria-hidden="true" />
                <h3 className={styles.branchName}>{branch.name}</h3>
                {branchKey === "warsaw" ? (
                  <span className={styles.newBadge}>{t("new_branch")}</span>
                ) : null}
              </div>

              <div className={styles.grid}>
                <div className={styles.info}>
                  <div className={styles.item}>
                    <FaPhoneAlt size={20} />{" "}
                    <a href={branch.phoneHref}>{branch.phoneDisplay}</a>
                  </div>

                  {"telegram" in branch ? <div className={styles.item}>
                    <FaTelegramPlane size={20} />{" "}
                    <a href={branch.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
                  </div> : null}
                  {"whatsapp" in branch ? <div className={styles.item}>
                    <FaWhatsapp size={20} />{" "}
                    <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  </div> : null}

                  <hr className={styles.divider} />

                  <div className={styles.addressBlock}>
                    <p className={styles.address}>
                      <LuMapPin size={20} />
                      <strong>
                        <a href={branch.maps} target="_blank" rel="noopener noreferrer">
                          {branch.address}
                        </a>
                      </strong>
                    </p>
                    <div className={styles.timeWork}>
                      <SlClock size={20} />
                      <div>
                        <p><strong>{t("we_wait")}</strong></p>
                        <p>{t("mon_fri")}: {branch.hours.weekdays}</p>
                        <p>{t("sat")}: {branch.hours.saturday}</p>
                      </div>
                    </div>
                  </div>

                  <hr className={styles.divider} />
                  <div className={styles.socLink}><SocialLinks links={branch.socials} showPhone={false} /></div>
                </div>

                <div className={styles.mapWrapper}>
                  <iframe
                    title={`${t("map_title")} — ${branch.city}`}
                    src={branch.mapEmbed}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
