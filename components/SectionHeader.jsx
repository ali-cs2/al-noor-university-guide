export default function SectionHeader({ title, description }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-university-gold">
        Al-Noor University Guide
      </p>
      <h1 className="mt-2 text-2xl font-bold text-university-blue sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
