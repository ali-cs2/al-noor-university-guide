"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import FAQItem from "@/components/FAQItem";

export default function FAQList({ faqs }) {
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return faqs;
    }

    return faqs.filter((faq) => {
      const question = faq.question || "";
      const answer = faq.answer || "";

      return `${question} ${answer}`.toLowerCase().includes(normalizedQuery);
    });
  }, [faqs, query]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          className="w-full rounded border border-university-blueGray bg-white py-4 pl-12 pr-4 text-sm outline-none shadow-academic transition focus:border-university-royal focus:ring-2 focus:ring-university-royal/10"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search questions..."
          type="search"
          value={query}
        />
      </div>

      {faqs.length === 0 ? (
        <EmptyState />
      ) : filteredFaqs.length > 0 ? (
        <div className="space-y-3">
          {filteredFaqs.map((faq) => (
            <FAQItem key={faq.id || faq.question} faq={faq} />
          ))}
        </div>
      ) : (
        <EmptyState message="No matching questions found." />
      )}
    </div>
  );
}
