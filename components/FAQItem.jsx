export default function FAQItem({ faq }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-base font-semibold text-university-blue">
        {faq.question}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {faq.answer || "Answer will be added soon."}
      </p>
    </article>
  );
}
