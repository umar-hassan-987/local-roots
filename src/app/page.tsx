import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <div className="site-shell">
      <HeroSection />

      <main>
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
}
