import Link from "next/link";
import { serviceCards } from "@/data/homepage";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-[#fafaf4] border-b border-[#eee8df] text-center">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Heading */}
        <h2 
          className="text-4xl md:text-7xl text-[#27231f] font-normal mb-6"
          style={{
           fontFamily: "'Catchy Mager', serif",
            letterSpacing: "-0.04em",
            lineHeight: "0.9"
         }}
        >
          Services
        </h2>
        <p className="text-sm md:text-base text-[#564f46] italic max-w-2xl mx-auto mb-12">
          Prices remaining depends on your property condition and size. Pricing will varies on various items.
        </p>

        {/* Custom 3+2 Card Grid */}
        <div className="space-y-6">
          {/* Row 1: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.slice(0, 3).map((service, index) => (
              <article
                key={index}
                className="bg-[#fafaf4] border border-[#cdbca5] p-6 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="font-heading text-xl md:text-2xl text-[#27231f] font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#564f46] leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-xs text-[#7e7468] leading-relaxed">
                    {service.points}
                  </p>
                </div>
                <div className="border-t border-[#eee8df] pt-4 mt-6">
                  <p className="text-sm font-bold text-[#27231f] tracking-wide uppercase">
                    {service.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: 2 centered columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[730px] mx-auto">
            {serviceCards.slice(3, 5).map((service, index) => (
              <article
                key={index}
                className="bg-[#fafaf4] border border-[#cdbca5] p-6 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="font-heading text-xl md:text-2xl text-[#27231f] font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#564f46] leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-xs text-[#7e7468] leading-relaxed">
                    {service.points}
                  </p>
                </div>
                <div className="border-t border-[#eee8df] pt-4 mt-6">
                  <p className="text-sm font-bold text-[#27231f] tracking-wide uppercase">
                    {service.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Centered Tan Estimate Button */}
        <div className="mt-12">
          <Link
            href="#contact"
            className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.2em] px-8 py-4 text-xs md:text-sm uppercase transition-all duration-300 shadow-sm border border-[#7f6843]"
          >
            BOOK A FREE ESTIMATE
          </Link>
        </div>
      </div>
    </section>
  );
}
