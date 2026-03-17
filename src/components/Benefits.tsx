import { Clock, Users, ShieldCheck, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "5-Minute Policy Issuance",
    desc: "Get your insurance issued instantly. The entire process takes just 5 minutes from start to finish.",
  },
  {
    icon: Users,
    title: "50K+ Happy Customers",
    desc: "Trusted by thousands of families across India with transparent processes and quick support.",
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Costs",
    desc: "All our insurance products come with transparent pricing — no hidden fees or surprise charges.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    desc: "Our expert support team is available round the clock to assist you with policies and claims.",
  },
];

const Benefits = () => (
  <section id="about-us" className="py-20">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
        Why Choose Sankalp?
      </h2>
      <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
        We make insurance simple, transparent, and accessible for everyone.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className={`fade-in-up fade-in-up-delay-${i + 1} rounded-xl border border-border bg-card p-7 hover:shadow-md transition-shadow`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
