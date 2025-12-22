import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface ContactSectionProps {
  onBookingClick: () => void;
}

const ContactSection = ({ onBookingClick }: ContactSectionProps) => {
  const whatsappNumber = "254700000000"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about your accounting services.");

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["View Park Towers 15th Floor", "Uhuru Highway, Opposite Central Park"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+254 700 000 000"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@mkassociates.co.ke"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="text-sky-light font-semibold text-sm uppercase tracking-wider mb-3 block">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Let's Discuss Your Financial Needs
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Ready to take control of your finances? Contact us today for a free consultation. 
              Our team is here to help you achieve your business goals.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10"
                >
                  <info.icon className="w-6 h-6 text-sky-light mb-3" />
                  <h4 className="text-primary-foreground font-semibold mb-1">{info.title}</h4>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-primary-foreground/70 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - CTA */}
          <div className="flex flex-col justify-center">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-8">
                Book a free consultation or reach out to us directly via WhatsApp for quick inquiries.
              </p>

              <div className="space-y-4">
                <Button 
                  variant="default" 
                  size="xl" 
                  className="w-full"
                  onClick={onBookingClick}
                >
                  Book Free Consultation
                </Button>
                
                <Button 
                  variant="whatsapp" 
                  size="xl" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-center text-muted-foreground text-sm mt-6">
                We typically respond within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
