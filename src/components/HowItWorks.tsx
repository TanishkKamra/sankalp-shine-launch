import { ClipboardList, SlidersHorizontal, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Choose a Plan",
    desc: "Browse our range of insurance products and pick what suits your needs.",
  },
  {
    icon: SlidersHorizontal,
    step: "02",
    title: "Customize Coverage",
    desc: "Tailor your coverage amount, tenure, and add-ons to fit your budget.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Get Insured Instantly",
    desc: "Complete a quick verification and receive your policy in under 5 minutes.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding">
    <div className="container">
      <div className="text-center">
        <span className="badge-accent">Simple Process</span>
        <h2 className="section-title mt-4">How It Works</h2>
        <p className="section-subtitle">
          Getting insured with Sankalp is as easy as 1-2-3.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
        {/* Connector lines (desktop) */}
        <div className="hidden md:block absolute top-[3.5rem] left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px">
          <div className="w-full h-full border-t-2 border-dashed border-primary/20" />
        </div>

        {steps.map(({ icon: Icon, step, title, desc }, i) => (
          <div key={title} className="relative text-center">
            <div className="inline-flex flex-col items-center">
              {/* Step Number */}
              <div className="relative">
                <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-md">
                  {step}
                </span>
              </div>

              <h3 className="mt-6 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs leading-relaxed">{desc}</p>
            </div>

            {/* Arrow (mobile) */}
            {i < steps.length - 1 && (
              <div className="md:hidden flex justify-center my-4">
                <ArrowRight className="h-5 w-5 text-primary/30 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
