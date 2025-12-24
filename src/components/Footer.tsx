import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Bookkeeping & Accounting",
    "Tax Planning & Compliance",
    "Financial Advisory",
    "Business Registration",
    "Payroll Services",
    "Audit & Assurance",
  ];

  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">RA</span>
              </div>
              <div>
                <span className="font-display font-semibold text-primary-foreground text-lg block">Romage Accounting</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Your trusted partner in accounting and taxation. We help businesses grow with expert financial guidance.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>View Park Towers 15th Floor, Uhuru Highway</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-sky-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+254704203644"
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-sky-light transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +254 704 203644
              </a>
              <a
                href="mailto:info@romageaccounting.co.ke"
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-sky-light transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@romageaccounting.co.ke
              </a>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <p className="text-primary-foreground/40 text-xs mb-2">Certified & Regulated By:</p>
              <div className="flex gap-2">
                <span className="bg-primary-foreground/10 text-primary-foreground/60 text-xs px-2 py-1 rounded">ICPAK</span>
                <span className="bg-primary-foreground/10 text-primary-foreground/60 text-xs px-2 py-1 rounded">KRA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-sm">
              © {currentYear} Romage Accounting and Management Limited. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-sm">
              Certified Public Accountants | Tax Consultants
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
