import CollegeCard from "@/components/CollegeCard";
import EmptyState from "@/components/EmptyState";
import PageHero from "@/components/PageHero";
import universityData from "@/data/university.json";

export default function CollegesPage() {
  const { colleges } = universityData;

  return (
    <div>
      <PageHero
        title="Colleges"
        description="Explore university colleges when content is available."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        {colleges.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.map((college) => (
              <CollegeCard key={college.id || college.name} college={college} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>
    </div>
  );
}
