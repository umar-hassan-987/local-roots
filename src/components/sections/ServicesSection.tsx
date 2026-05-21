import { serviceCards } from "@/data/homepage";

export function ServicesSection() {
  return (
    <section id="services" className="section services">
      <h3>Services</h3>
      <p className="section-caption">
        Prices listed below are estimates and can vary based on lawn size and
        condition.
      </p>

      <div className="services-grid">
        {serviceCards.map((service) => (
          <article key={service.title} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <p>{service.points}</p>
            <p className="service-price">{service.price}</p>
          </article>
        ))}
      </div>

      <button className="cta">BOOK A FREE ESTIMATE</button>
    </section>
  );
}
