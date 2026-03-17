import { Send } from "lucide-react";

const Contact = () => (
  <section id="contact" className="bg-surface py-20">
    <div className="container max-w-xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
        Get a Free Quote
      </h2>
      <p className="mt-3 text-center text-muted-foreground">
        Fill in your details and our advisor will reach out to you shortly.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-10 space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <select className="w-full rounded-lg border border-border bg-background px-4 py-3.5 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition">
          <option value="">Select Insurance Type</option>
          <option>Car Insurance</option>
          <option>Health Insurance</option>
          <option>Term Insurance</option>
          <option>Bike Insurance</option>
          <option>Business Insurance</option>
        </select>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground hover:opacity-90 active:scale-[0.97] transition-all"
        >
          <Send className="h-4 w-4" /> Request Callback
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
