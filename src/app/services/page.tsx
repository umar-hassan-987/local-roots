"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    title: "Lawn Care",
    tagline: "CONSISTENT. CLEAN. PROFESSIONAL.",
    desc: "From weekly mowing and edging to fertilization and weed control — we keep your lawn looking sharp all year long. Tailored programs for every Florida grass type.",
    points: [
      "Monthly Maintenance",
      "One time Cuts",
      "Edging, weed whacking & Blowing",
      "Weed Control",
      "Seasonal Property Clean Ups",
      "Hedge Trimming",
    ],
    image: "/img/width_1600 (3).webp",
  },
  {
    title: "Landscaping",
    tagline: "DESIGN. INSTALL. TRANSFORM.",
    desc: "We design and install outdoor spaces that look great and thrive in Florida's climate. From mulching and sod to full landscape redesigns, we handle it all.",
    points: [
      "Landscape Installation",
      "Mulch Installation",
      "Landscape Removal",
    ],
    image: "/img/width_1600 (1).webp",
  },
  {
    title: "Tree Service",
    tagline: "SAFE. SKILLED. THOROUGH.",
    desc: "From palm trimming to full tree removals and storm cleanup — our insured crew handles every job safely and leaves your property clean.",
    points: [
      "Tree Trimming and Pruning",
      "Tree Removal",
      "Stump Grinding",
      "Storm Preparation",
      "Storm Clean Up",
    ],
    image: "/img/width_1600 (2).webp",
  },
];

const features = [
  { title: "Licensed & Insured", desc: "Fully covered in Florida — protecting you and your property on every job." },
  { title: "Free Estimates", desc: "No cost, no pressure. We assess your property and give you a clear, honest quote." },
  { title: "Same-Day Response", desc: "We respond to quote requests fast — usually within a few hours during business hours." },
  { title: "Locally Owned", desc: "We live and work in Brevard & Indian River Counties. Your community is ours." },
  { title: "Residential & Commercial", desc: "From single-family homes to HOAs and commercial properties — we do it all." },
  { title: "Reliable Scheduling", desc: "We show up when we say we will. Consistent service you can count on, every visit." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="services" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-6 text-center overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/img/Hero_img.webp" alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          </div>
          <motion.div
            className="relative z-10 max-w-4xl mx-auto space-y-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-accent text-xs uppercase tracking-widest block">
              Brevard & Indian River Counties
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Everything your property needs from one trusted, locally owned crew.
            </p>
          </motion.div>
        </section>

        {/* Detailed Service Sections */}
        {serviceDetails.map((service, index) => (
          <section key={service.title} className={`py-16 md:py-20 px-6 md:px-12 ${index % 2 === 1 ? 'bg-muted' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                initial={{ x: index % 2 === 1 ? 20 : -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-2">
                  <span className="text-accent text-xs uppercase tracking-widest">
                    {service.tagline}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-accent font-bold">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 text-sm rounded-lg transition-all"
                  >
                    Get an Estimate
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                initial={{ x: index % 2 === 1 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="overflow-hidden rounded-xl border border-border shadow-md aspect-[4/3] relative group">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Maintenance Packages (reuse ServicesSection) */}
        {/* <ServicesSection /> */}

        {/* The Local Roots Difference */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-white text-center">
          <div className="max-w-7xl mx-auto space-y-12">
            <motion.div
              className="space-y-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-xs uppercase tracking-widest block">
                The Difference
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                The Local Roots Difference
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-border text-left"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <h3 className="font-semibold text-base text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Get Started CTA */}
        <section className="bg-primary py-16 px-6 text-center text-white">
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Request a free estimate today. We serve Brevard & Indian River Counties and respond fast.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-sm rounded-lg transition-all"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:321-372-9462"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 text-sm rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (321) 372-9462
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
