import SectionHeader from "@/components/SectionHeader";
import PageHero from "@/components/PageHero";
import universityData from "@/data/university.json";

export default function AboutPage() {
  const { university } = universityData;

  return (
    <div>
      <PageHero
        title="About University"
        description={university.description}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="rounded-lg border border-university-blueGray bg-white p-8 shadow-academic">
          <SectionHeader
            eyebrow="Institutional Profile"
            title="Modern academic access for every visitor"
            description="This page is ready for official university history, mission, vision, accreditation, and campus information when the content is finalized."
          />
        </div>
        <div className="space-y-4">
          {[
            ["Name", university.name],
            ["Location", university.location],
            ["Website", university.website || "Content will be added soon."]
          ].map(([label, value]) => (
            <div className="rounded-lg border border-university-blueGray bg-white p-5 shadow-academic" key={label}>
              <p className="text-xs font-bold uppercase tracking-widest text-university-burgundy">{label}</p>
              <p className="mt-2 font-semibold text-university-navy">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
