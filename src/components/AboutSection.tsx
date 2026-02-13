import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import aboutImage from "@/assets/about-accountant.jpg";

const credentials = [
  "Certified Public Accountant (CPA)",
  "Registered Tax Agent with KRA",
  "Member of ICPAK",
  "Tax Representative",
  "10+ Years of Experience",
  "500+ Satisfied Clients",
];

const AboutSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "CPA Robert Makori",
            "jobTitle": "Director & Lead Consultant",
            "image": aboutImage,
            "worksFor": {
              "@type": "Organization",
              "name": "Romage Accounting and Management Limited"
            },
            "memberOf": "ICPAK",
            "credential": [
              "Certified Public Accountant",
              "KRA Registered Tax Agent"
            ]
          })}
        </script>
      </Helmet>

      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutImage}
                  alt="CPA Robert Makori, Director - Certified Public Accountant analyzing financial data and providing accounting expertise"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-display font-bold">RM</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">CPA Robert Makori</h3>
                      <p className="text-muted-foreground text-sm">Director &amp; Lead Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" aria-hidden="true" />
            </div>

            {/* Content */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Meet Your Trusted Financial Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                <strong>Romage Accounting and Management Limited</strong> is a premier accounting and tax consultancy firm based in Nairobi, Kenya. 
                We specialize in providing comprehensive financial solutions to businesses of all sizes. Our expertise spans bookkeeping, tax planning, financial advisory, payroll services, and audit &amp; assurance.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                As a <strong>registered Tax Agent with the Kenya Revenue Authority (KRA)</strong> and a <strong>member of the Institute 
                of Certified Public Accountants of Kenya (ICPAK)</strong>, we bring the highest standards of 
                professionalism and regulatory compliance to every engagement. With over 10 years of industry experience, we have successfully served 500+ clients across various business sectors.
              </p>

              {/* Credentials List */}
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((credential) => (
                  <div key={credential} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground font-medium">{credential}</span>
                  </div>
                ))}
              </div>

              {/* Certification Badges */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm mb-4 font-semibold">Regulated &amp; Certified By:</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-secondary rounded-lg px-4 py-2">
                    <span className="font-semibold text-foreground text-sm">ICPAK</span>
                  </div>
                  <div className="bg-secondary rounded-lg px-4 py-2">
                    <span className="font-semibold text-foreground text-sm">KRA Tax Agent</span>
                  </div>
                  <div className="bg-secondary rounded-lg px-4 py-2">
                    <span className="font-semibold text-foreground text-sm">CPA Kenya</span>
                  </div>
                </div>
                {/* Work Experience */}
                <div className="mt-8">
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-3">Work Experience</h3>
                  <p className="text-muted-foreground mb-3">
                    With over 8 years of professional experience, Romage Accounting &amp; Tax Services has provided comprehensive accounting support to businesses across multiple industries in Kenya.
                  </p>
                  <p className="text-muted-foreground mb-3">Our assignments have included accounting and bookkeeping, tax filing, payroll preparation, and statutory remittances for companies in the following sectors:</p>
                  <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-1">
                    <li>Hardware manufacturing and steel industries</li>
                    <li>Hotels and restaurants</li>
                    <li>Logistics and transport</li>
                    <li>Import and export businesses</li>
                    <li>Wholesale and retail trade</li>
                    <li>Travel and tours</li>
                    <li>Real estate</li>
                  </ul>
                  <p className="text-muted-foreground mb-2">
                    We have worked with established companies such as HEMA Limited, Dong Peng Tiles East Africa, Arihant Industries Ltd, Mega Choice Supermarket Ltd, Global Steel Ltd, PMS Holdings (Real Estate), and Harium Travel and Tours Ltd, among others.
                  </p>
                  <p className="text-muted-foreground">
                    This diverse exposure has strengthened our expertise in financial reporting, tax compliance, payroll administration, and regulatory compliance with KRA, NSSF, NHIF, and other statutory bodies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
