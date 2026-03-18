import { Users, Star, Clock, Car, Heart, Shield, Bike, Building2, Stethoscope, TrendingUp, Users as UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFamily from "@/assets/hero-family.jpg";

const trustItems = [
  { icon: Users, label: "50,000+ Families" },
  { icon: Star, label: "4.8★ Rating" },
  { icon: Clock, label: "10 min Claim Process" },
];

const quickProducts = [
  { icon: Car, label: "Car" },
  { icon: Bike, label: "Bike" },
  { icon: Heart, label: "Health" },
  { icon: Shield, label: "Term Life" },
  { icon: TrendingUp, label: "Investment" },
  { icon: Building2, label: "Business" },
  { icon: UsersIcon, label: "Family" },
  { icon: Stethoscope, label: "Critical Illness" },
];

const Hero = () => (
  <section className="gradient-hero relative overflow-hidden">
    <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

    <div className="container py-10 md:py-14 lg:py-16 relative">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-in-up">
          <div className="badge-accent mb-4">
            <Star className="h-3.5 w-3.5 fill-current" />
            Trusted by 50,000+ Indian Families
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-foreground">
            Your Shield for a{" "}
            <span className="text-gradient-primary">Secure Tomorrow</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Quick, transparent, and hassle-free insurance plans for your car, health, life, and business.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="glow" size="lg" asChild>
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button variant="outline-primary" size="lg" asChild>
              <Link to="/compare">Compare Plans</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap gap-5">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="animate-fade-in-up animation-delay-200 hidden lg:flex justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
            <img
              src={heroFamily}
              alt="Happy family protected by Sankalp Insurance"
              className="relative rounded-3xl w-full max-w-sm object-cover shadow-2xl ring-1 ring-border/40"
            />
            <div className="absolute -bottom-3 left-4 bg-card rounded-xl px-4 py-2.5 shadow-lg border border-border/60 animate-float">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-accent/20 flex items-center justify-center">
                  <Star className="h-3.5 w-3.5 text-accent fill-accent" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Customer Rating</p>
                  <p className="text-xs font-bold text-foreground">4.8 / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance types strip — always visible without scrolling */}
      <div className="mt-10 md:mt-12">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Choose your insurance</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {quickProducts.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#products"
              className="group flex flex-col items-center gap-2 rounded-xl bg-card border border-border/60 p-3 md:p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[11px] md:text-xs font-semibold text-foreground text-center leading-tight">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
