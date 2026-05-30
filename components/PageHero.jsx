import SectionHeader from "@/components/SectionHeader";

export default function PageHero({ title, description, eyebrow }) {
  return (
    <section className="relative overflow-hidden bg-university-navy py-16 text-white sm:py-20">
      <div className="academic-pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <SectionHeader
          description={description}
          eyebrow={eyebrow}
          inverse
          title={title}
        />
      </div>
    </section>
  );
}
