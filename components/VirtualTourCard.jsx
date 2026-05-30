export default function VirtualTourCard({ tour }) {
  return (
    <article className="overflow-hidden rounded-lg border border-university-blueGray bg-white shadow-academic transition hover:shadow-academic-lg">
      <div className="flex aspect-video items-center justify-center bg-university-navy text-white">
        {tour.embedUrl ? (
          <iframe
            className="h-full w-full"
            src={tour.embedUrl}
            title={tour.title}
            allowFullScreen
          />
        ) : (
          <div className="text-center">
            <span className="material-symbols-outlined text-5xl">360</span>
            <p className="mt-2 text-sm font-semibold">Embed placeholder</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-university-navy">
          {tour.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {tour.description || "Virtual tour details will be added soon."}
        </p>
      </div>
    </article>
  );
}
