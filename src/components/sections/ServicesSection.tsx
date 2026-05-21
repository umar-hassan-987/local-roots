"use client";

import Link from "next/link";
import { serviceCards } from "@/data/homepage";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-[#fafaf4] border-b border-[#eee8df] text-center overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

        {/* Custom 3+2 Card Grid */}
        <div className="space-y-6">
          {/* Row 1: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.slice(0, 3).map((service, index) => (
              <motion.article
                key={index}
                className="bg-[#fafaf4] border border-[#cdbca5] p-6 text-left flex flex-col justify-between"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl text-[#27231f] font-semibold" style={{ fontFamily: "'Arial', sans-serif" }}>
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
              </motion.article>
            ))}
          </div>

          {/* Row 2: 2 centered columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[730px] mx-auto">
            {serviceCards.slice(3, 5).map((service, index) => (
              <motion.article
                key={index}
                className="bg-[#fafaf4] border border-[#cdbca5] p-6 text-left flex flex-col justify-between"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index + 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl text-[#27231f] font-semibold" style={{ fontFamily: "'Arial', sans-serif" }}>
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
              </motion.article>
            ))}
          </div>
        </div>

        {/* Centered Tan Estimate Button */}
        <motion.div 
          className="mt-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="#contact"
            className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.2em] px-8 py-4 text-xs md:text-sm uppercase transition-all duration-300 shadow-sm border border-[#7f6843]"
          >
            BOOK A FREE ESTIMATE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
