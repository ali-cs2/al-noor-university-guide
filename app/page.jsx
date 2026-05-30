import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";

export default function HomePage() {
  const { university } = universityData;

  return (
    <main className="space-y-8">
      <section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-university-gold">
          University Guide
        </p>
        <h1 className="mt-3 text-3xl font-bold text-university-blue sm:text-4xl">
          {university.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {university.description}
        </p>
        <p className="mt-4 text-sm font-medium text-slate-500">
          Location: {university.location}
        </p>
      </section>

      <section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <SectionHeader
          title="Project Status"
          description="This initial structure is ready for content and the final Stitch design later."
        />
      </section>
    </main>
  );
}
