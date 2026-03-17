import { Car, Heart, Shield, Bike, Building2, Users, TrendingUp, Stethoscope, ChevronRight } from "lucide-react";

const products = [
  { icon: Car, label: "Car Insurance", desc: "Comprehensive coverage for your vehicle", color: "blue" as const },
  { icon: Bike, label: "Bike Insurance", desc: "Ride with confidence, stay protected", color: "yellow" as const },
  { icon: Heart, label: "Health Insurance", desc: "Complete health & medical coverage", color: "blue" as const },
  { icon: Shield, label: "Term Insurance", desc: "Secure your family's future today", color: "yellow" as const },
  { icon: TrendingUp, label: "Investment Plans", desc: "Grow your wealth with smart plans", color: "blue" as const },
  { icon: Building2, label: "Business Insurance", desc: "Protect your business from risks", color: "yellow" as const },
  { icon: Users, label: "Family Health", desc: "One plan for the whole family", color: "blue" as const },
  { icon: Stethoscope, label: "Critical Illness", desc: "Coverage when you need it most", color: "yellow" as const },
];

const colorMap = {
  blue: "icon-wrapper-blue group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-lg",
  yellow: "icon-wrapper-yellow group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-lg",
};

const Products = () => (
  <section id="products" className="section-padding">
    <div className="container">
      <div className="text-center">
        <span className="badge-accent">Our Products</span>
        <h2 className="section-title mt-4">Insurance Made Simple</h2>
        <p className="section-subtitle">
          Choose from a wide range of insurance plans tailored to protect what matters most.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map(({ icon: Icon, label, desc, color }) => (
          <button
            key={label}
            className="group card-elevated text-left"
          >
            <div className={colorMap[color]}>
              <Icon className="h-6 w-6 fill-current" />
            </div>
            <h3 className="mt-4 text-sm font-bold text-foreground">{label}</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
            <div className="mt-3 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more <ChevronRight className="h-3 w-3 ml-0.5" />
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
