import { Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";

const trustItems = [
  { icon: Users, label: "50,000+ Families" },
  { icon: Star, label: "4.8★ Rating" },
  { icon: Clock, label: "10 min Claim Process" },
];

const Hero = () => (
  <section className="gradient-hero relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

    <div className="container section-padding relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="animate-fade-in-up">
          <div className="badge-accent mb-6">
            <Star className="h-3.5 w-3.5 fill-current" />
            Trusted by 50,000+ Indian Families
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] text-foreground">
            Your Shield for a{" "}
            <span className="text-gradient-primary">Secure Tomorrow</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Quick, transparent, and hassle-free insurance plans for your car, health, life, and business. Get covered in minutes, not days.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="glow" size="xl" asChild>
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button variant="outline-primary" size="xl" asChild>
              <a href="#products">Explore Plans</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="animate-fade-in-up animation-delay-200 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />

            <img
              src={heroFamily}
              alt="Happy family protected by Sankalp Insurance"
              className="relative rounded-3xl w-full max-w-md lg:max-w-lg object-cover shadow-2xl ring-1 ring-border/40"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:left-4 bg-card rounded-2xl px-5 py-3 shadow-lg border border-border/60 animate-float">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Customer Rating</p>
                  <p className="text-sm font-bold text-foreground">4.8 / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
