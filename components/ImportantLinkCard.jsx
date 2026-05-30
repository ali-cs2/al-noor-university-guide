export default function ImportantLinkCard({ link }) {
  const content = (
    <>
      <div className="mb-5 flex size-12 items-center justify-center rounded bg-university-blueGray text-university-navy transition group-hover:text-university-burgundy">
        <span className="material-symbols-outlined">{link.icon || "open_in_new"}</span>
      </div>
      <h2 className="text-xl font-bold text-university-navy">
        {link.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {link.description || "Link details will be added soon."}
      </p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-university-burgundy">
        Open link
        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
      </p>
    </>
  );

  if (link.url) {
    return (
      <a
        className="group block rounded-lg border border-university-blueGray bg-white p-6 shadow-academic transition hover:-translate-y-1 hover:shadow-academic-lg"
        href={link.url}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="group rounded-lg border border-university-blueGray bg-white p-6 shadow-academic">
      {content}
    </article>
  );
}
