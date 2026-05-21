import { navLinks } from "@/data/homepage";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <header className="top-nav">
          <p className="brand-mini">Local Roots</p>
          <nav>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-content">
          <h1>Local Roots</h1>
          <h2>Property Maintenance, LLC</h2>
          <p className="hero-phone">321.372.9462</p>
          <p className="hero-sub">LICENSED & INSURED</p>
          <BrandLogo
            subtitle="PROPERTY MAINTENANCE"
            phone="321-372-9462"
            rootClassName="logo-block"
          />
          <button className="cta">BOOK A FREE ESTIMATE</button>
        </div>
      </div>
    </section>
  );
}
