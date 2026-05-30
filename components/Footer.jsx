export default function Footer({ universityName }) {
  return (
    <footer className="relative overflow-hidden bg-university-navy text-white">
      <div className="academic-pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-12">
        <div>
          <p className="text-lg font-extrabold">{universityName}</p>
          <p className="mt-3 max-w-md leading-6 text-blue-100">
            Official digital guide structure for students, visitors, and applicants.
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Guide</p>
          <p className="mt-3 text-blue-100">Colleges, departments, tours, FAQs, and important links.</p>
        </div>
        <div>
          <p className="font-bold text-white">Status</p>
          <p className="mt-3 text-blue-100">Content and integrations will be added in later phases.</p>
        </div>
      </div>
    </footer>
  );
}
