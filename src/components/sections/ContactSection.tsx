import { contactColumns } from "@/data/homepage";

export function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <h3>Contact Us</h3>

      <div className="contact-grid">
        {contactColumns.map((column) => (
          <article key={column.title}>
            <h4>{column.title}</h4>
            {column.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {column.hasTagButton ? (
              <button className="contact-tag">Tag us in your photos!</button>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
