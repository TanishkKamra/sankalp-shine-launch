import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "₹499",
    period: "/month",
    desc: "Essential coverage for individuals",
    popular: false,
    features: [
      "Up to ₹5 Lakh coverage",
      "Cashless hospitalization",
      "24/7 customer support",
      "Annual health check-up",
      "No-claim bonus",
    ],
  },
  {
    name: "Standard",
    price: "₹999",
    period: "/month",
    desc: "Complete protection for families",
    popular: true,
    features: [
      "Up to ₹15 Lakh coverage",
      "Cashless at 5000+ hospitals",
      "Priority claim settlement",
      "Free annual health check-up",
      "No-claim bonus up to 50%",
      "Maternity & newborn cover",
    ],
  },
  {
    name: "Premium",
    price: "₹1,999",
    period: "/month",
    desc: "Maximum coverage, zero worries",
    popular: false,
    features: [
      "Up to ₹50 Lakh coverage",
      "Global hospital network",
      "Instant claim settlement",
      "Comprehensive health check-up",
      "No-claim bonus up to 100%",
      "Maternity, dental & vision",
      "Dedicated relationship manager",
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="section-padding">
    <div className="container">
      <div className="text-center">
        <span className="badge-accent">Pricing</span>
        <h2 className="section-title mt-4">Plans That Fit Your Life</h2>
        <p className="section-subtitle">
          Simple, transparent pricing. No surprises, no hidden fees.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map(({ name, price, period, desc, popular, features }) => (
          <div
            key={name}
            className={`rounded-2xl border p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 relative ${
              popular
                ? "border-primary/30 bg-card shadow-xl ring-2 ring-primary/10 scale-[1.02]"
                : "border-border bg-card shadow-sm hover:shadow-lg"
            }`}
          >
            {popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
                  ⭐ Most Popular
                </span>
              </div>
            )}

            <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-4xl font-extrabold text-foreground">{price}</span>
              <span className="text-sm text-muted-foreground">{period}</span>
            </div>

            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              variant={popular ? "glow" : "outline-primary"}
              className="w-full mt-7"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
