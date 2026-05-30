export default function DepartmentCard({ department }) {
  return (
    <article className="rounded-lg border border-university-blueGray bg-white p-6 shadow-academic">
      <p className="mb-3 inline-flex rounded bg-university-blueGray px-3 py-1 text-xs font-bold uppercase tracking-wide text-university-royal">
        {department.college || "Academic Department"}
      </p>
      <h2 className="text-xl font-bold text-university-navy">
        {department.name}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {department.description || "Department details will be added soon."}
      </p>
    </article>
  );
}
