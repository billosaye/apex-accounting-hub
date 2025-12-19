import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingPopup from "@/components/BookingPopup";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>MK & Associates | Certified Public Accountants in Nairobi, Kenya</title>
        <meta 
          name="description" 
          content="MK & Associates - Expert accounting, tax planning, and financial advisory services in Nairobi. ICPAK registered CPA and KRA Tax Agent. Book a free consultation today." 
        />
        <meta name="keywords" content="CPA Kenya, Tax Agent Nairobi, Accounting Services, ICPAK, KRA, Business Registration Kenya, Payroll Services, Financial Advisory" />
        <link rel="canonical" href="https://mkassociates.co.ke" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MK & Associates | Certified Public Accountants" />
        <meta property="og:description" content="Expert accounting and tax services in Nairobi, Kenya. ICPAK registered CPA and KRA Tax Agent." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_KE" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "MK & Associates",
            "description": "Certified Public Accountants and Tax Consultants in Nairobi, Kenya",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi CBD",
              "addressCountry": "KE"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 08:00-17:00, Sa 09:00-13:00"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header onBookingClick={handleBookingClick} />
        <main>
          <HeroSection onBookingClick={handleBookingClick} />
          <ServicesSection />
          <AboutSection />
          <ContactSection onBookingClick={handleBookingClick} />
        </main>
        <Footer />
        <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </>
  );
};

export default Index;
