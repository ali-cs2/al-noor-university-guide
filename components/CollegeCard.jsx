export default function CollegeCard({ college }) {
  return (
    <article className="group rounded-lg border border-university-blueGray bg-white p-6 shadow-academic transition hover:-translate-y-1 hover:shadow-academic-lg">
      <div className="mb-5 flex size-12 items-center justify-center rounded bg-university-royal text-white">
        <span className="material-symbols-outlined">school</span>
      </div>
      <h2 className="text-xl font-bold text-university-navy">
        {college.name}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {college.description || "College details will be added soon."}
      </p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-university-burgundy">
        View college
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </p>
    </article>
  );
}
