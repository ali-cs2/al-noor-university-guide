import ImportantLinkCard from "@/components/ImportantLinkCard";
import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";

export default function ImportantLinksPage() {
  const { importantLinks } = universityData;

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Important Links"
        description="External university links will be organized here."
      />
      {importantLinks.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {importantLinks.map((link) => (
            <ImportantLinkCard key={link.id || link.title} link={link} />
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
