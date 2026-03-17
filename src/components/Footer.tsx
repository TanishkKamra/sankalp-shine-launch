import { Shield, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Products: ["Car Insurance", "Health Insurance", "Term Insurance", "Business Insurance", "Investment Plans"],
  Company: ["About Us", "Careers", "Blog", "Press", "Partners"],
  Support: ["Help Center", "Claims", "Contact Us", "FAQ", "Grievance"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy", "IRDAI Disclosure"],
};

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">Sankalp</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Protecting what matters most — your family, health, and future.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> 1800-123-4567</div>
            <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@sankalpinsurance.in</div>
            <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Mumbai, India</div>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display font-bold text-sm text-foreground mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sankalp Insurance. All rights reserved. IRDAI License No. XXXXXXXXX
        </p>
        <p className="text-xs text-muted-foreground">
          Insurance is the subject matter of solicitation. Please read all scheme related documents carefully before investing.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
