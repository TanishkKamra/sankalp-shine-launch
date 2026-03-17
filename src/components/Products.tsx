import { Car, Heart, Shield, Bike, Building2, Users, TrendingUp, LayoutGrid } from "lucide-react";

const products = [
  { icon: Car, label: "Car", sub: "Insurance" },
  { icon: Bike, label: "Bike", sub: "Insurance" },
  { icon: Heart, label: "Health", sub: "Insurance" },
  { icon: Shield, label: "Term", sub: "Insurance" },
  { icon: TrendingUp, label: "Investment", sub: "Plans" },
  { icon: Building2, label: "Business", sub: "Insurance" },
  { icon: Users, label: "Family Health", sub: "Insurance" },
  { icon: LayoutGrid, label: "View More", sub: "" },
];

const Products = () => (
  <section id="products" className="py-20">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
        Our Insurance Products
      </h2>
      <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto">
        Choose from a wide range of insurance plans tailored to your needs.
      </p>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
        {products.map(({ icon: Icon, label, sub }) => (
          <button
            key={label}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md active:scale-[0.97] transition-all"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              {sub && <span className="block text-xs text-muted-foreground">{sub}</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
