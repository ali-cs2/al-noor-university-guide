import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";

export default function AboutPage() {
  const { university } = universityData;

  return (
    <section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <SectionHeader
        title="About University"
        description={university.description}
      />
      <div className="mt-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-university-blue">Name:</span>{" "}
          {university.name}
        </p>
        <p>
          <span className="font-semibold text-university-blue">Location:</span>{" "}
          {university.location}
        </p>
      </div>
    </section>
  );
}
