import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import Reviews from "@/components/Reviews/Reviews";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import ServiceVisit from "@/components/ServiceVisit/ServiceVisit";


export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
      {/* <h1 className="text-4xl font-bold">Головна сторінка</h1> */}
     
      {/* <ServicesBlock locale={params.locale} /> */}
      <Hero />
      <ServiceVisit/> 
      <ServicesBlock locale={params.locale} />
     
      <Gallery />
      <Reviews />
    
      <ContactInfoSection />
      <FollowSocLink />
    </>
  );
}