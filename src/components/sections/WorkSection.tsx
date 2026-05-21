import { BrandLogo } from "@/components/ui/BrandLogo";
import { workImages } from "@/data/homepage";

export function WorkSection() {
  return (
    <section id="work" className="section work">
      <h3>Our Work</h3>

      <div className="work-grid">
        {workImages.map((image, index) => (
          <figure key={`${image.src}-${index}`} className="work-item">
            <img src={image.src} alt={`Landscaping project ${index + 1}`} />
            {image.caption ? (
              <figcaption className={image.caption === "After" ? "after" : ""}>
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      <BrandLogo
        className="footer-logo"
        subtitle="PROPERTY MAINTENANCE"
        phone="321.372.9462"
      />
    </section>
  );
}
