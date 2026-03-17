import { Zap, Eye, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Claims",
    desc: "Get your claims settled in minutes with our streamlined digital process. No paperwork, no delays.",
    color: "blue" as const,
  },
  {
    icon: Eye,
    title: "No Hidden Fees",
    desc: "Complete transparency in pricing. What you see is what you pay — zero surprise charges.",
    color: "yellow" as const,
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Thousands",
    desc: "Over 50,000 families trust Sankalp for their insurance needs. Join a growing community.",
    color: "blue" as const,
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    desc: "Our dedicated team is always available to guide you through policies, claims, and everything in between.",
    color: "yellow" as const,
  },
];

const colorMap = {
  blue: "icon-wrapper-blue",
  yellow: "icon-wrapper-yellow",
};

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding gradient-section">
    <div className="container">
      <div className="text-center">
        <span className="badge-accent">Why Sankalp?</span>
        <h2 className="section-title mt-4">Built on Trust, Driven by Care</h2>
        <p className="section-subtitle">
          We're redefining insurance with transparency, speed, and a human touch.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc, color }, i) => (
          <div
            key={title}
            className={`card-elevated animate-fade-in-up animation-delay-${(i + 1) * 100}`}
          >
            <div className={colorMap[color]}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-base font-bold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
