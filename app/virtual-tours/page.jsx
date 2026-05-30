import EmptyState from "@/components/EmptyState";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import VirtualTourCard from "@/components/VirtualTourCard";
import universityData from "@/data/university.json";

export default function VirtualToursPage() {
  const { virtualTours } = universityData;

  return (
    <div>
      <PageHero
        title="Virtual Tours"
        description="Campus tour embeds and media placeholders will be supported here."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        {virtualTours.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {virtualTours.map((tour) => (
              <VirtualTourCard key={tour.id || tour.title} tour={tour} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>
      <section className="bg-university-blueGray py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <SectionHeader
            eyebrow="Tour Support"
            title="Iframe-ready tour areas"
            description="Tour cards are prepared for embedded campus media once official tour URLs are available."
          />
        </div>
      </section>
    </div>
  );
}
