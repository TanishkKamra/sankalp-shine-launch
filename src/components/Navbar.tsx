import { Shield, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Compare Plans", href: "/compare", isRoute: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/60">
      <div className="container flex items-center justify-between h-[4.25rem]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md group-hover:shadow-lg transition-shadow">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Sankalp
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) =>
            (l as any).isRoute ? (
              <Link key={l.label} to={l.href} className="nav-link">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label}
              </a>
            )
          )}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:18001234567" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mr-2">
            <Phone className="h-4 w-4" /> 1800-123-4567
          </a>
          <Button variant="glow" size="default" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2 -mr-2">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg px-6 pb-6 pt-4 space-y-3 animate-fade-in">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="glow" className="w-full mt-2" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
