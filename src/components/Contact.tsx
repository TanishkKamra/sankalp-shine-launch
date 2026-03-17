import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="section-padding gradient-section relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

    <div className="container max-w-xl relative">
      <div className="text-center">
        <span className="badge-accent">Get Started</span>
        <h2 className="section-title mt-4">Get a Free Quote</h2>
        <p className="section-subtitle">
          Fill in your details and our expert advisor will reach out within minutes.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="mt-10 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-sm transition-all"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-sm transition-all"
        />
        <select className="w-full rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 shadow-sm transition-all">
          <option value="">Select Insurance Type</option>
          <option>Car Insurance</option>
          <option>Health Insurance</option>
          <option>Term Insurance</option>
          <option>Bike Insurance</option>
          <option>Business Insurance</option>
        </select>
        <Button variant="glow" size="xl" className="w-full">
          <Send className="h-4 w-4" /> Request Free Callback
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          By submitting, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  </section>
);

export default Contact;
