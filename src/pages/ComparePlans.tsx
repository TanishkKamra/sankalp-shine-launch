import { Check, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { name: "Coverage Amount", basic: "Up to ₹5 Lakh", standard: "Up to ₹15 Lakh", premium: "Up to ₹50 Lakh" },
  { name: "Cashless Hospitals", basic: "1,000+", standard: "5,000+", premium: "10,000+ (Global)" },
  { name: "Claim Settlement", basic: "Standard", standard: "Priority", premium: "Instant" },
  { name: "24/7 Support", basic: true, standard: true, premium: true },
  { name: "Annual Health Check-up", basic: true, standard: true, premium: true },
  { name: "No-Claim Bonus", basic: "Up to 20%", standard: "Up to 50%", premium: "Up to 100%" },
  { name: "Maternity Cover", basic: false, standard: true, premium: true },
  { name: "Dental & Vision", basic: false, standard: false, premium: true },
  { name: "Dedicated Manager", basic: false, standard: false, premium: true },
  { name: "International Coverage", basic: false, standard: false, premium: true },
];

const plans = [
  { name: "Basic", price: "₹499/mo", popular: false },
  { name: "Standard", price: "₹999/mo", popular: true },
  { name: "Premium", price: "₹1,999/mo", popular: false },
];

const renderCell = (value: string | boolean) => {
  if (typeof value === "string") return <span className="text-sm font-medium text-foreground">{value}</span>;
  return value ? (
    <Check className="h-5 w-5 text-primary mx-auto" />
  ) : (
    <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
  );
};

const ComparePlans = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="gradient-hero py-12 md:py-16">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <span className="badge-accent">Compare</span>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mt-4">
            Find the <span className="text-gradient-primary">Perfect Plan</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Compare all features side-by-side and choose the plan that fits your needs.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground w-1/4">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="p-4 text-center w-1/4">
                      <div className={`rounded-2xl border p-5 ${plan.popular ? "border-primary/30 bg-primary/5 ring-2 ring-primary/10" : "border-border bg-card"}`}>
                        {plan.popular && (
                          <span className="inline-block mb-2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold text-accent-foreground">
                            ⭐ Most Popular
                          </span>
                        )}
                        <p className="font-display text-lg font-bold text-foreground">{plan.name}</p>
                        <p className="text-2xl font-extrabold text-foreground mt-1">{plan.price}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={feature.name} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                    <td className="p-4 text-sm font-medium text-foreground">{feature.name}</td>
                    <td className="p-4 text-center">{renderCell(feature.basic)}</td>
                    <td className="p-4 text-center">{renderCell(feature.standard)}</td>
                    <td className="p-4 text-center">{renderCell(feature.premium)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-4" />
                  {plans.map((plan) => (
                    <td key={plan.name} className="p-4 text-center">
                      <Button variant={plan.popular ? "glow" : "outline-primary"} className="w-full" asChild>
                        <a href="/#contact">Get {plan.name}</a>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ComparePlans;
