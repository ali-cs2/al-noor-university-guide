export default function EmptyState({ message = "Content will be added soon." }) {
  return (
    <div className="rounded-lg border border-dashed border-university-blueGray bg-white p-8 text-center shadow-academic">
      <span className="material-symbols-outlined text-4xl text-university-burgundy">
        pending
      </span>
      <p className="mt-3 font-semibold text-slate-600">{message}</p>
    </div>
  );
}
