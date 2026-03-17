import heroFamily from "@/assets/hero-family.jpg";

const Hero = () => (
  <section className="bg-surface">
    <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <div className="fade-in-up">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Trusted by 50,000+ Families</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-foreground">
          Your Shield for a<br />
          <span className="text-primary">Secure Tomorrow</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
          Quick, transparent, and hassle-free insurance plans for your car, health, life, and business. Get covered in minutes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground hover:opacity-90 active:scale-[0.97] transition-all">
            Get a Free Quote
          </a>
          <a href="#products" className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground hover:bg-muted active:scale-[0.97] transition-all">
            Explore Plans
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="fade-in-up fade-in-up-delay-2 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={heroFamily}
            alt="Happy family protected by Sankalp Insurance"
            className="relative rounded-2xl w-full max-w-md object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
