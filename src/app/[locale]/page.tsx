import BMWPhotoSection from "@/components/BMWPhotoSection/BMWPhotoSection";
import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import Reviews from "@/components/Reviews/Reviews";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import ServiceVisit from "@/components/ServiceVisit/ServiceVisit";
import ShortBlog from "@/components/ShortBlog/ShortBlog";


export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
     
      <section id="main" ><Hero /></section>
      <section id="visit" ><ServiceVisit /> </section>
      <section id="BMWPhotoSection" ><BMWPhotoSection /></section>
      
      <section id="service" ><ServicesBlock locale={params.locale} /></section>
     
      <section id="gallery" ><Gallery /></section>
      <section id="reviews" ><Reviews /></section>
      <section id="blog" ><ShortBlog params={{ locale: params.locale }} /></section>
      <section id="contact" ><ContactInfoSection /></section>
      <section id="soclink" ><FollowSocLink /></section>
      
      
    </>
  );
}