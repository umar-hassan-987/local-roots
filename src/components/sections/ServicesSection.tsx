"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  hideHeading?: boolean;
}

const services = [
  {
    title: "Lawn Care",
    tagline: "CONSISTENT. CLEAN. PROFESSIONAL.",
    image: "/img/width_1600 (3).webp",
    description:
      "Keep your lawn looking its best year-round with reliable, professional maintenance tailored to Florida properties.",
    points: [
      "Monthly maintenance",
      "One-time cuts",
      "Edging, weed whacking & blowing",
      "Weed control",
      "Seasonal clean ups",
      "Hedge trimming",
    ],
  },
  {
    title: "Landscaping",
    tagline: "DESIGN. INSTALL. TRANSFORM.",
    image: "/img/width_1600 (1).webp",
    description:
      "From fresh sod to full landscape overhauls, we design and install outdoor spaces that elevate your property.",
    points: [
      "Landscape design & installation",
      "Mulching & maintenance",
      "Sod installation",
      "Irrigation setup & repair",
    ],
  },
  {
    title: "Tree Service",
    tagline: "SAFE. SKILLED. THOROUGH.",
    image: "/img/width_1600 (2).webp",
    description:
      "Professional tree care to keep your property safe, clean, and looking great — from trimming to full removal.",
    points: [
      "Tree trimming & pruning",
      "Tree removal",
      "Stump grinding",
      "Storm preparation",
      "Storm clean up",
    ],
  },
];

export function ServicesSection({ hideHeading = false }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        {!hideHeading && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground">
              Services Built for Brevard &amp; Indian River Properties
            </h2>
          </motion.div>
        )}

        {/* Alternating Service Blocks */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const imageFirst = index % 2 === 0;

            const imageBlock = (
              <motion.div
                className="rounded-xl overflow-hidden aspect-[4/3]"
                initial={{ opacity: 0, x: imageFirst ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            );

            const textBlock = (
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: imageFirst ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                  {service.tagline}
                </span>
                <h3 className="text-3xl font-heading font-bold text-foreground mt-2">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-base mt-3">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            );

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12"
              >
                {imageFirst ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1">{textBlock}</div>
                    <div className="order-1 md:order-2">{imageBlock}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
