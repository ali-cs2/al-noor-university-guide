import FAQItem from "@/components/FAQItem";
import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";

export default function FAQPage() {
  const { faqs } = universityData;

  return (
    <section className="space-y-6">
      <SectionHeader
        title="FAQ"
        description="Answers to common questions will be listed here."
      />
      <input
        className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-university-gold transition focus:ring-2"
        placeholder="Search questions..."
        type="search"
      />
      {faqs.length > 0 ? (
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.id || faq.question} faq={faq} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-white p-6 text-slate-600 shadow-sm ring-1 ring-slate-200">
          Content will be added soon.
        </p>
      )}
    </section>
  );
}
