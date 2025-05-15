// // components/ShareButton.tsx
// "use client";

// import { useState } from "react";
// import styles from "./ShareButton.module.css";
// import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
// import { IoIosShareAlt } from "react-icons/io";
// import { PiLinkSimpleBold } from "react-icons/pi";
// import { toast } from "react-toastify";

// interface ShareButtonProps {
//   locale: "uk" | "pl";
// }

// export default function ShareButton({ locale }: ShareButtonProps) {
//   const [open, setOpen] = useState(false);
//   const url = typeof window !== "undefined" ? window.location.href : "";

//   const labels = {
//     uk: {
//       share: "Поділитись постом",
//       copy: "Скопіювати лінк",
//       copied: "Посилання скопійовано",
//     },
//     pl: {
//       share: "Udostępnij post",
//       copy: "Skopiuj link",
//       copied: "Link skopiowany",
//     },
//   };


//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(url);
//       toast.success(labels[locale].copied);
//     } catch (err) {
//       console.error("Failed to copy: ", err);
//     }
//     };
//     const handleSocialClick = (platform: "instagram" | "tiktok") => {
//         const links = {
//           instagram: "https://www.instagram.com/",
//           tiktok: "https://www.tiktok.com/",
//         };
      
//         // Відкрити нову вкладку
//         window.open(links[platform], "_blank");
      
//         // Скопіювати лінк
//         handleCopy();
//       };
      

//   return (
//     <div className={styles.wrapper}>
//       <button className={styles.trigger} onClick={() => setOpen(!open)}>
//         <IoIosShareAlt size={20} />
//         <span>{labels[locale].share}</span>
//       </button>

//       {open && (
//         <div className={styles.modal} role="dialog" aria-label="Share Modal window">
//           <button className={styles.item} onClick={handleCopy}>
//             <PiLinkSimpleBold /> {labels[locale].copy}
//           </button>
//           <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className={styles.item}>
//             <FaFacebookF /> Facebook
//           </a>
//           <button onClick={() => handleSocialClick("instagram")} className={styles.item}>
//   <FaInstagram /> Instagram
// </button>
// <button onClick={() => handleSocialClick("tiktok")} className={styles.item}>
//   <FaTiktok /> TikTok
// </button>
//         </div>
//       )}
//     </div>
//   );
// }// components/ShareButton.tsx
"use client";

import { useState } from "react";
import styles from "./ShareButton.module.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { PiLinkSimpleBold } from "react-icons/pi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ShareButtonProps {
  locale: "uk" | "pl";
}

export default function ShareButton({ locale }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const labels = {
    uk: {
      share: "Поділитись постом",
      copy: "Скопіювати лінк",
      copied: "Посилання скопійовано",
    },
    pl: {
      share: "Udostępnij post",
      copy: "Skopiuj link",
      copied: "Link skopiowany",
    },
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success(labels[locale].copied);
    } catch (err) {
      console.error("Failed to copy: ", err);
    } finally {
      setOpen(false);
    }
  };

  const handleSocialClick = (platform: "instagram" | "tiktok") => {
    const links = {
      instagram: "https://www.instagram.com/",
      tiktok: "https://www.tiktok.com/",
    };

    window.open(links[platform], "_blank");
    handleCopy();
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        <IoIosShareAlt size={20} />
        <span>{labels[locale].share}</span>
      </button>

      {open && (
        <div className={styles.modal} role="dialog" aria-label="Share Modal window">
          <button className={styles.item} onClick={handleCopy}>
            <PiLinkSimpleBold /> {labels[locale].copy}
          </button>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
            onClick={() => setOpen(false)}
          >
            <FaFacebookF /> Facebook
          </a>
          <button
            onClick={() => handleSocialClick("instagram")}
            className={styles.item}
          >
            <FaInstagram /> Instagram
          </button>
          <button
            onClick={() => handleSocialClick("tiktok")}
            className={styles.item}
          >
            <FaTiktok /> TikTok
          </button>
        </div>
      )}
    </div>
  );
}
