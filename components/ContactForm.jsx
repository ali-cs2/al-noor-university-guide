export default function ContactForm() {
  return (
    <form className="space-y-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div>
        <label className="text-sm font-medium text-university-blue" htmlFor="name">
          Name
        </label>
        <input
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-university-gold transition focus:ring-2"
          id="name"
          placeholder="Your name"
          type="text"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-university-blue" htmlFor="email">
          Email
        </label>
        <input
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-university-gold transition focus:ring-2"
          id="email"
          placeholder="you@example.com"
          type="email"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-university-blue" htmlFor="message">
          Message
        </label>
        <textarea
          className="mt-2 min-h-32 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-university-gold transition focus:ring-2"
          id="message"
          placeholder="How can we help?"
        />
      </div>
      <button
        className="rounded-md bg-university-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        type="button"
      >
        Send Message
      </button>
    </form>
  );
}
