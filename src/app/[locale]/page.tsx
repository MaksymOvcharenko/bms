import ContactInfoSection from "@/components/ContactInfoSection/ContactInfoSection";
import FollowSocLink from "@/components/FollowSocLink/FollowSocLink";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import ServiceVisit from "@/components/ServiceVisit/ServiceVisit";


export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
      <h1 className="text-4xl font-bold">Головна сторінка</h1>
      {/* ...інші блоки... */}
      <ServicesBlock locale={params.locale} />
      <ServiceVisit/>
      <ContactInfoSection />
      <FollowSocLink />
    </>
  );
}