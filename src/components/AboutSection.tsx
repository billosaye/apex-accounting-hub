import { CheckCircle2 } from "lucide-react";
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
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="CPA Robert Makori analyzing financial data"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold">MB</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">CPA Robert Makori</h4>
                    <p className="text-muted-foreground text-sm">Director & Lead Consultant</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
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
              Romage Accounting and Management Limited is a premier accounting and tax consultancy firm based in Nairobi, Kenya. 
              We specialize in providing comprehensive financial solutions to businesses of all sizes.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              As a registered Tax Agent with the Kenya Revenue Authority and a member of the Institute 
              of Certified Public Accountants of Kenya (ICPAK), we bring the highest standards of 
              professionalism and regulatory compliance to every engagement.
            </p>

            {/* Credentials List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((credential) => (
                <div key={credential} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{credential}</span>
                </div>
              ))}
            </div>

            {/* Certification Badges */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4">Regulated & Certified By:</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
