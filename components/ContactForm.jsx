export default function ContactForm() {
  return (
    <form className="space-y-5 rounded-lg border border-university-blueGray bg-white p-6 shadow-academic">
      <div>
        <label className="text-sm font-bold text-university-navy" htmlFor="name">
          Name
        </label>
        <input
          className="mt-2 w-full rounded border border-university-blueGray px-3 py-3 text-sm outline-none transition focus:border-university-royal focus:ring-2 focus:ring-university-royal/10"
          id="name"
          placeholder="Your name"
          type="text"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-university-navy" htmlFor="email">
          Email
        </label>
        <input
          className="mt-2 w-full rounded border border-university-blueGray px-3 py-3 text-sm outline-none transition focus:border-university-royal focus:ring-2 focus:ring-university-royal/10"
          id="email"
          placeholder="you@example.com"
          type="email"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-university-navy" htmlFor="message">
          Message
        </label>
        <textarea
          className="mt-2 min-h-32 w-full rounded border border-university-blueGray px-3 py-3 text-sm outline-none transition focus:border-university-royal focus:ring-2 focus:ring-university-royal/10"
          id="message"
          placeholder="How can we help?"
        />
      </div>
      <button
        className="rounded bg-university-burgundy px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
        type="button"
      >
        Send Message
      </button>
    </form>
  );
}
