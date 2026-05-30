import EmptyState from "@/components/EmptyState";
import ImportantLinkCard from "@/components/ImportantLinkCard";
import PageHero from "@/components/PageHero";
import universityData from "@/data/university.json";

export default function ImportantLinksPage() {
  const { importantLinks } = universityData;

  return (
    <div>
      <PageHero
        title="Important Links"
        description="External university links will be organized here."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        {importantLinks.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importantLinks.map((link) => (
              <ImportantLinkCard key={link.id || link.title} link={link} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </section>
    </div>
  );
}
