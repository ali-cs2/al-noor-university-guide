import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import PageHero from "@/components/PageHero";
import universityData from "@/data/university.json";

export default function ContactPage() {
  const { contact } = universityData;

  return (
    <div>
      <PageHero
        title="Contact"
        description="Contact details and a basic UI-only form are ready for future integration."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div className="rounded-lg border border-university-blueGray bg-white p-8 shadow-academic">
          <SectionHeader
            eyebrow="Contact Information"
            title="Reach the university guide team"
            description="Official contact content can be added to the shared data file when available."
          />
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            {[
              ["mail", "Email", contact.email || "Content will be added soon."],
              ["call", "Phone", contact.phone || "Content will be added soon."],
              ["location_on", "Address", contact.address || "Content will be added soon."]
            ].map(([icon, label, value]) => (
              <div className="flex gap-3 rounded border border-university-blueGray p-4" key={label}>
                <span className="material-symbols-outlined text-university-burgundy">{icon}</span>
                <div>
                  <p className="font-bold text-university-navy">{label}</p>
                  <p className="mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
