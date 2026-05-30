export default function FAQItem({ faq }) {
  return (
    <details className="group rounded-lg border border-university-blueGray bg-white p-5 shadow-academic">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-university-navy">
        <span>{faq.question}</span>
        <span className="material-symbols-outlined text-university-burgundy transition group-open:rotate-180">
          expand_more
        </span>
      </summary>
      <p className="mt-4 border-t border-university-blueGray pt-4 text-sm leading-6 text-slate-600">
        {faq.answer || "Answer will be added soon."}
      </p>
    </details>
  );
}
