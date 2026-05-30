import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/colleges", label: "Colleges" },
  { href: "/departments", label: "Departments" },
  { href: "/faq", label: "FAQ" },
  { href: "/virtual-tours", label: "Virtual Tours" },
  { href: "/important-links", label: "Important Links" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar({ university }) {
  return (
    <header className="sticky top-0 z-50 border-b border-university-blueGray bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Link className="flex items-center gap-3 text-lg font-extrabold text-university-navy" href="/">
          {university.logo ? (
            <img
              alt={`${university.name} logo`}
              className="size-12 rounded-full border border-university-blueGray bg-white object-contain p-1"
              src={university.logo}
            />
          ) : (
            <span className="flex size-10 items-center justify-center rounded bg-university-navy text-white">
              <span className="material-symbols-outlined text-[22px]">school</span>
            </span>
          )}
          <span>{university.name}</span>
        </Link>
        <div className="flex flex-wrap gap-1 text-sm font-semibold text-slate-600">
          {links.map((link) => (
            <Link
              className="rounded px-3 py-2 transition hover:bg-university-gray hover:text-university-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-university-royal"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          className="hidden rounded bg-university-burgundy px-5 py-2 text-sm font-bold text-white transition hover:opacity-90 lg:inline-flex"
          href="/colleges"
        >
          Explore Guide
        </Link>
      </nav>
    </header>
  );
}
