import SectionHeader from "@/components/SectionHeader";
import VirtualTourCard from "@/components/VirtualTourCard";
import universityData from "@/data/university.json";

export default function VirtualToursPage() {
  const { virtualTours } = universityData;

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Virtual Tours"
        description="Campus tour embeds and media placeholders will be supported here."
      />
      {virtualTours.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {virtualTours.map((tour) => (
            <VirtualTourCard key={tour.id || tour.title} tour={tour} />
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
