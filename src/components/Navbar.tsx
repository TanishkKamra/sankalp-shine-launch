import { Shield, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Products", "About Us", "Claims", "Support", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="font-display font-bold text-xl text-foreground">
            Sankalp <span className="text-primary">Insurance</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:18001234567" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" /> 1800-123-4567
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 active:scale-[0.97] transition-all">
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary">
              {l}
            </a>
          ))}
          <a href="#contact" className="block text-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
