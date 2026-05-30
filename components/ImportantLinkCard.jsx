export default function ImportantLinkCard({ link }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-semibold text-university-blue">
        {link.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {link.description || "Link details will be added soon."}
      </p>
      {link.url ? (
        <a
          className="mt-4 inline-flex text-sm font-semibold text-university-blue underline decoration-university-gold decoration-2 underline-offset-4"
          href={link.url}
          rel="noreferrer"
          target="_blank"
        >
          Open link
        </a>
      ) : null}
    </article>
  );
}
