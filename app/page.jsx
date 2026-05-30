import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";
import Link from "next/link";

export default function HomePage() {
  const { colleges, departments, faqs, importantLinks, university, virtualTours } = universityData;

  return (
    <div>
      <section className="relative overflow-hidden bg-university-navy text-white">
        <div className="academic-pattern absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
              University Digital Guide
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-normal sm:text-5xl lg:text-6xl">
              {university.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              {university.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="rounded bg-university-burgundy px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                href="/colleges"
              >
                Explore Colleges
              </Link>
              <Link
                className="rounded border border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-university-navy"
                href="/virtual-tours"
              >
                View Virtual Tours
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -right-8 -top-8 size-72 rounded-full bg-university-royal/35" />
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["school", colleges.length || "Soon", "Colleges"],
                    ["account_tree", departments.length || "Soon", "Departments"],
                    ["360", virtualTours.length || "Soon", "Virtual Tours"],
                    ["help", faqs.length || "Soon", "FAQs"]
                  ].map(([icon, value, label]) => (
                    <div className="rounded bg-white p-5 text-university-navy shadow-academic" key={label}>
                      <span className="material-symbols-outlined text-university-burgundy">
                        {icon}
                      </span>
                      <p className="mt-5 text-2xl font-extrabold">{value}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-600">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-4 lg:-mt-14 lg:px-12">
        {[
          ["school", colleges.length || "Content soon", "Colleges"],
          ["account_tree", departments.length || "Content soon", "Departments"],
          ["public", importantLinks.length || "Content soon", "Important Links"],
          ["location_on", university.location, "Location"]
        ].map(([icon, value, label]) => (
          <div className="rounded-lg border-t-4 border-university-burgundy bg-white p-6 text-center shadow-academic" key={label}>
            <span className="material-symbols-outlined text-4xl text-university-burgundy">
              {icon}
            </span>
            <p className="mt-4 text-xl font-extrabold text-university-navy">{value}</p>
            <p className="mt-1 text-sm font-semibold text-slate-600">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-12">
        <div>
          <SectionHeader
            eyebrow="About Al-Noor University"
            title="A focused guide for academic discovery"
            description="The guide is structured to help students, visitors, and applicants move quickly between colleges, departments, campus tours, frequent questions, and trusted university links."
          />
          <Link
            className="mt-6 inline-flex items-center gap-2 border-b-2 border-university-burgundy pb-1 text-sm font-bold text-university-navy transition hover:text-university-burgundy"
            href="/about"
          >
            Learn more
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="rounded-lg border border-university-blueGray bg-white p-6 shadow-academic">
          <h2 className="text-2xl font-bold text-university-navy">Guide Sections</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Colleges", "/colleges"],
              ["Departments", "/departments"],
              ["Virtual Tours", "/virtual-tours"],
              ["FAQ", "/faq"],
              ["Important Links", "/important-links"],
              ["Contact", "/contact"]
            ].map(([label, href]) => (
              <Link
                className="rounded border border-university-blueGray px-4 py-3 text-sm font-bold text-university-navy transition hover:border-university-burgundy hover:text-university-burgundy"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
