import { LandingNavbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ServicesSection } from "@/components/landing/services-section";
import { AppPreviewSection } from "@/components/landing/app-preview-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { MembershipSection } from "@/components/landing/membership-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FAQSection } from "@/components/landing/faq-section";
import { LocationSection } from "@/components/landing/location-section";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LandingNavbar />
      <Hero />
      <ServicesSection />
      <AppPreviewSection />
      <HowItWorks />
      <MembershipSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
