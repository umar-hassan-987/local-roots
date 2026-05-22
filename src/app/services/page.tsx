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
      "Hedge Trimming"
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
      "Landscape Removal"
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
      "Storm Clean Up"
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
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="services" />
      
      <main className="flex-grow">
        {/* Page Hero */}
        <section 
          className="relative py-16 md:py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "linear-gradient(rgba(11, 87, 16, 0.85), rgba(11, 87, 16, 0.85)), url('/img/width_1600 (1).webp')" 
          }}
        >
          <motion.div 
            className="max-w-[800px] mx-auto space-y-4 relative z-10 text-white"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
              BREVARD & INDIAN RIVER COUNTIES
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-normal leading-tight">
              Our Services
            </h1>
            <p className="text-[#eee8df] text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Everything your property needs lawn care, landscaping, and tree service from one trusted, locally owned crew.
            </p>
          </motion.div>
        </section>

        {/* Detailed Service Sections */}
        {serviceDetails.map((service, index) => (
          <section key={service.title} className={`py-20 px-6 md:px-12 ${index % 2 === 1 ? 'bg-[#f8f5ef]' : 'bg-[#fafaf4]'}`}>
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                initial={{ x: index % 2 === 1 ? 30 : -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#eee8df] flex items-center justify-center text-[#ae9573] text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.15em]">
                    {service.tagline}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-[#27231f] font-normal">
                  {service.title}
                </h2>
                <p className="text-[#564f46] text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-[#564f46]">
                      <span className="text-[#006c00] font-bold">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link 
                    href="/contact"
                    className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.1em] px-6 py-3 text-xs uppercase transition-all duration-300 shadow-sm"
                  >
                    Learn More ›
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                initial={{ x: index % 2 === 1 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="overflow-hidden border border-[#cdbca5] shadow-sm rounded-sm aspect-[4/3]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* The Local Roots Difference (Why Choose Us) */}
        <section className="py-20 px-6 md:px-12 bg-[#fafaf4] text-center">
          <div className="max-w-[1100px] mx-auto space-y-12">
            <motion.div 
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
                WHY CHOOSE US
              </span>
              <h2 className="font-heading text-4xl md:text-6xl text-[#27231f] font-normal">
                The Local Roots Difference
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="bg-white border border-[#cdbca5] p-8 text-left space-y-4 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="font-heading text-xl md:text-2xl text-[#27231f] font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-[#564f46] text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Home Page Package Overview (The "Old" Section) */}
        <div className="border-t border-[#eee8df]">
          <motion.div 
            className="py-12 text-center bg-[#f8f5ef]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="font-heading text-3xl md:text-5xl text-[#27231f] font-normal">
                Maintenance Packages
             </h2>
             <p className="text-sm text-[#564f46] italic mt-2">
                Predictable pricing for recurring care
             </p>
          </motion.div>
          <ServicesSection hideHeading={true} />
        </div>

        {/* Ready to Get Started Banner */}
        <section className="bg-[#0b5710] text-white py-16 md:py-20 px-6 text-center overflow-hidden">
          <motion.div 
            className="max-w-[800px] mx-auto space-y-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-normal">
              Ready to Get Started?
            </h2>
            <p className="text-[#eee8df] text-lg md:text-xl font-light leading-relaxed">
              Request a free estimate today. We serve Brevard & Indian River Counties and respond fast — usually the same day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              
              <a
                href="https://form.jotform.com/233315126308044"
                target="_blank"
                rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.15em] px-8 py-4 text-xs uppercase transition-all duration-300 shadow-sm border border-[#7f6843]"
                style={{ color: 'black' }}
              >
                    Request a Free Quote
              </a>
              <a
                href="tel:321-372-9462"
                className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold tracking-[0.15em] px-8 py-3.5 text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24"  
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-[#006c00]"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>  (321) 372-9462
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
