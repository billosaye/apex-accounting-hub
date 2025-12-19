import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

interface HeroSectionProps {
  onBookingClick: () => void;
}

const HeroSection = ({ onBookingClick }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional accounting office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-sky-light" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              ICPAK & KRA Registered Tax Agent
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Your Trusted Partner in{" "}
            <span className="text-sky-light">Accounting</span> &{" "}
            <span className="text-sky-light">Taxation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed animate-fade-up delay-200">
            Expert financial solutions tailored for businesses in Kenya. 
            We help you navigate complex tax regulations and grow your business with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="accent" size="xl" onClick={onBookingClick}>
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-up delay-400">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">10+</span>
              </div>
              <span className="text-primary-foreground/60 text-sm">Years Experience</span>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <span className="text-primary-foreground/60 text-sm">Clients Served</span>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">100%</span>
              </div>
              <span className="text-primary-foreground/60 text-sm">Compliance Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
