export default function CollegeCard({ college }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-semibold text-university-blue">
        {college.name}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {college.description || "College details will be added soon."}
      </p>
    </article>
  );
}
