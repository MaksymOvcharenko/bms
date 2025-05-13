// import Image from "next/image";
// import ServiceBtn from "../ServiceBtn/ServiceBtn";
// import s from "./Hero.module.css";
// import heroImg from "../../../public/images/heroImg.webp";
// import { TfiMenuAlt } from "react-icons/tfi";
// export const Hero = () => {
//   return (
//     <div className={s.section}>
//       <Image src={heroImg} width={352} height={263} alt="BLS Service"></Image>
//       <div className={s.body}>
//         <h1 className={s.title}>Serwice samochodówy BLS serwice</h1>
//         <p className={s.descr}>
//           Naprawa i serwis techniczny samochodów marki BMW, Mini i Rolls-royce{" "}
//         </p>
//         <div className={s.btn}>
//           <a href="" className={s.btnLink}>
//           <TfiMenuAlt size={20}/><p>Usługi</p>
//           </a>
//           <ServiceBtn />
//         </div>
//       </div>
//     </div>
//   );
// };
import ServiceBtn from "../ServiceBtn/ServiceBtn";
import s from "./Hero.module.css";
import { TfiMenuAlt } from "react-icons/tfi";

export const Hero = () => {
  return (
    <div className={s.section}>
          <video
              
        autoPlay
        muted
        loop
        playsInline
        className={s.video}
        poster="/images/heroImgFallback.jpg" // fallback зображення
      >
        <source src="/videos/hero-bg-3.mp4" type="video/mp4" />
      </video>

      <div className={s.body}>
        <h1 className={s.title}>Serwice samochodówy BLS serwice</h1>
        <p className={s.descr}>
          Naprawa i serwis techniczny samochodów marki BMW, Mini i Rolls-Royce
        </p>
        <div className={s.btn}>
          <a href="" className={s.btnLink}>
            <TfiMenuAlt size={20} />
            <p>Usługi</p>
          </a>
          <ServiceBtn />
        </div>
      </div>
    </div>
  );
};
