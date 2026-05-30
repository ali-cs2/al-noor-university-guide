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

export default function Navbar({ universityName }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-bold text-university-blue" href="/">
          {universityName}
        </Link>
        <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link
              className="rounded-md px-3 py-2 transition hover:bg-university-gray hover:text-university-blue"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
