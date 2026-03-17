import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-display font-bold text-foreground">Sankalp Insurance</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sankalp Insurance. All rights reserved. IRDAI License No. XXXXXXXXX
      </p>
      <div className="flex gap-6">
        {["Privacy Policy", "Terms", "Sitemap"].map((l) => (
          <a key={l} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
