import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {

  return (
    <>
      <Helmet>
        <title>Romage Accounting & Tax Services Nairobi | ICPAK CPA | KRA Tax Agent</title>
        <meta 
          name="description" 
          content="Romage Accounting and Management Limited - Premier accounting and tax consultancy in Nairobi, Kenya. Expert bookkeeping, tax planning, financial advisory, payroll services & business registration. ICPAK certified CPA & KRA registered tax agent. 10+ years experience. Contact us for a free consultation." 
        />
        <meta name="keywords" content="accounting services Nairobi Kenya, CPA Kenya, tax consultant Nairobi, KRA tax agent, bookkeeping services Kenya, tax planning Nairobi, financial advisory Kenya, payroll services Nairobi, business registration Kenya, ICPAK certified accountant" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Romage Accounting and Management Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://romagaccounting.co.ke" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://romagaccounting.co.ke" />
        <meta property="og:title" content="Romage Accounting & Tax Services Nairobi | ICPAK CPA" />
        <meta property="og:description" content="Premier accounting and tax consultancy in Nairobi. Expert bookkeeping, tax planning, financial advisory, payroll services & business registration. ICPAK certified CPA & KRA tax agent." />
        <meta property="og:locale" content="en_KE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Romage Accounting & Tax Services Nairobi | ICPAK CPA" />
        <meta name="twitter:description" content="Expert accounting and tax services in Nairobi, Kenya. ICPAK certified CPA & KRA registered tax agent." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.region" content="KE" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Romage Accounting and Management Limited",
            "alternateName": "Romage Accounting",
            "description": "Premier accounting and tax consultancy firm based in Nairobi, Kenya. Expert services in bookkeeping, tax planning, financial advisory, business registration, payroll services, and audit & assurance.",
            "url": "https://romagaccounting.co.ke",
            "logo": "https://romagaccounting.co.ke/logo.png",
            "sameAs": [
              "https://www.facebook.com/romagaccounting",
              "https://www.linkedin.com/company/romage-accounting",
              "https://wa.me/254140926450"
            ],
            "contact": {
              "@type": "ContactPoint",
              "contactType": "Business Services",
              "telephone": "+254-140-926450",
              "email": "info@romageaccounting.co.ke",
              "areaServed": "KE",
              "availableLanguage": "en"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "View Park Towers 15th Floor, Uhuru Highway",
              "addressLocality": "Nairobi",
              "addressRegion": "Nairobi",
              "postalCode": "00100",
              "addressCountry": "KE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-1.2865",
              "longitude": "36.8172"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
              }
            ],
            "foundingDate": "2014",
            "employees": "5-10",
            "numberOfEmployees": "7"
          })}
        </script>

        {/* Structured Data - Professional Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Romage Accounting and Management Limited",
            "image": "https://romagaccounting.co.ke/services-image.jpg",
            "description": "Expert accounting and tax consultancy services in Nairobi, Kenya. ICPAK certified CPA and KRA registered tax agent.",
            "areaServed": {
              "@type": "Country",
              "name": "Kenya"
            },
            "priceRange": "$$",
            "ratingValue": "4.8",
            "ratingCount": "42",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "42",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>

        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Romage Accounting and Management Limited",
            "image": "https://romagaccounting.co.ke/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "View Park Towers 15th Floor, Uhuru Highway",
              "addressLocality": "Nairobi",
              "postalCode": "00100",
              "addressCountry": "KE"
            },
            "telephone": "+254-704-203644",
            "email": "info@romageaccounting.co.ke",
            "url": "https://romagaccounting.co.ke",
            "openingHours": "Mo-Fr 08:00-17:00, Sa 09:00-13:00",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
