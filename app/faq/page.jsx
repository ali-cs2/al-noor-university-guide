import FAQList from "@/components/FAQList";
import PageHero from "@/components/PageHero";
import universityData from "@/data/university.json";

export default function FAQPage() {
  const { faqs } = universityData;

  return (
    <div>
      <PageHero
        title="FAQ"
        description="Answers to common questions will be listed here."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-12">
        <FAQList faqs={faqs} />
      </section>
    </div>
  );
}
