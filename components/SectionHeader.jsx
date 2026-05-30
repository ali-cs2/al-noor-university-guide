export default function SectionHeader({ title, description, eyebrow = "Al-Noor University Guide", inverse = false }) {
  return (
    <div>
      <p className={inverse ? "text-sm font-bold uppercase tracking-widest text-blue-200" : "text-sm font-bold uppercase tracking-widest text-university-burgundy"}>
        {eyebrow}
      </p>
      <h1 className={inverse ? "mt-3 text-4xl font-extrabold tracking-normal text-white sm:text-5xl" : "mt-3 text-3xl font-extrabold tracking-normal text-university-navy sm:text-4xl"}>
        {title}
      </h1>
      {description ? (
        <p className={inverse ? "mt-4 max-w-3xl text-base leading-7 text-blue-100" : "mt-4 max-w-3xl text-base leading-7 text-slate-600"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
