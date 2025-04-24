import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";


export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
      <h1 className="text-4xl font-bold">Головна сторінка</h1>
      {/* ...інші блоки... */}
      <ServicesBlock locale={params.locale} />
    </>
  );
}