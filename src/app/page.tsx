import React from "react";
import { Hero } from "@/components/home/Hero";
import { CredibilityStats } from "@/components/home/CredibilityStats";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { PartnersAndTools } from "@/components/home/PartnersAndTools";
import { TechCapabilities } from "@/components/home/TechCapabilities";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InteractiveQuoteCalculator } from "@/components/home/InteractiveQuoteCalculator";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Product Systems Bar */}
      <CredibilityStats />

      {/* 3. Core IT & Engineering Services (3D Coverflow) */}
      <ServicesOverview />

      {/* 4. Strategic Partners & Technologies Used */}
      <PartnersAndTools />

      {/* 5. Software Engineering Process & Capabilities */}
      <TechCapabilities />

      {/* 6. Authentic Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Interactive Solution & Quote Configurator */}
      <InteractiveQuoteCalculator />

      {/* 8. Strong Final Action CTA */}
      <CtaBanner />
    </div>
  );
}
