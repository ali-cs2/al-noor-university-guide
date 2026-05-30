import CollegeCard from "@/components/CollegeCard";
import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";

export default function CollegesPage() {
  const { colleges } = universityData;

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Colleges"
        description="Explore university colleges when content is available."
      />
      {colleges.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college) => (
            <CollegeCard key={college.id || college.name} college={college} />
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
