import { SiteHeader } from "@/components/site/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";

const features = [
  {
    title: "Licensed & Insured",
    description: "Fully covered in Florida — your property is in safe hands.",
  },
  {
    title: "Free Estimates",
    description: "No cost, no pressure — get a quote with zero commitment.",
  },
  {
    title: "Same-Day Response",
    description:
      "We respond fast — usually the same day you reach out.",
  },
  {
    title: "Locally Owned",
    description:
      "Proudly serving Brevard & Indian River Counties.",
  },
  {
    title: "Residential & Commercial",
    description: "All property types — homes, businesses, and more.",
  },
  {
    title: "Reliable Scheduling",
    description: "Consistent service you can count on, every time.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="home" />
      <main>
        <HeroSection />
        <ServicesSection />

        {/* Why Choose Us / The Local Roots Difference */}
        <section className="bg-muted py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground">
                The Local Roots Difference
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-border"
                >
                  <h3 className="font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WorkSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
