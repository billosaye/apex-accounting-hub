import { Calculator, FileText, TrendingUp, Building2, Receipt, Users } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Bookkeeping & Accounting",
    description: "Comprehensive bookkeeping services to keep your financial records accurate and up-to-date. We handle everything from daily transactions to monthly reconciliations.",
  },
  {
    icon: FileText,
    title: "Tax Planning & Compliance",
    description: "Strategic tax planning to minimize your tax liability while ensuring full compliance with KRA regulations. We handle all your tax returns and filings.",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Expert financial advice to help you make informed business decisions. We provide insights on cash flow management, budgeting, and financial forecasting.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    description: "Complete business registration services including company incorporation, business name registration, and regulatory compliance with all Kenyan authorities.",
  },
  {
    icon: Receipt,
    title: "Payroll Services",
    description: "Efficient payroll management including salary processing, PAYE calculations, NSSF, NHIF contributions, and timely statutory remittances.",
  },
  {
    icon: Users,
    title: "Audit & Assurance",
    description: "Independent audit services to provide assurance on your financial statements. We help build trust with stakeholders and identify areas for improvement.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive accounting and tax solutions designed to help your business thrive in Kenya's dynamic economy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 md:p-8 shadow-elegant hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
