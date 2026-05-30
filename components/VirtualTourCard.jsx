export default function VirtualTourCard({ tour }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex aspect-video items-center justify-center rounded-md border border-dashed border-slate-300 bg-university-gray text-sm text-slate-500">
        Embed placeholder
      </div>
      <h2 className="mt-4 text-lg font-semibold text-university-blue">
        {tour.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {tour.description || "Virtual tour details will be added soon."}
      </p>
    </article>
  );
}
