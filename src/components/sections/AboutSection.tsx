import { BrandLogo } from "@/components/ui/BrandLogo";
import { aboutParagraphs } from "@/data/homepage";

export function AboutSection() {
  return (
    <section id="about" className="section about">
      <div>
        <h3>About Us</h3>
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <BrandLogo
        subtitle="PROPERTY MAINTENANCE LLC"
        phone="321.372.9462"
        footerNote="IN GOD WE TRUST"
      />
    </section>
  );
}
