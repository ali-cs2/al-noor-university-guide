import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";

export default function ContactPage() {
  const { contact } = universityData;

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <SectionHeader
          title="Contact"
          description="Contact details and a basic UI-only form are ready for future integration."
        />
        <div className="mt-6 space-y-3 text-sm text-slate-600">
          <p>Email: {contact.email || "Content will be added soon."}</p>
          <p>Phone: {contact.phone || "Content will be added soon."}</p>
          <p>Address: {contact.address || "Content will be added soon."}</p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
