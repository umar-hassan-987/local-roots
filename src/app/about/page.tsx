"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { motion } from "framer-motion";

const values = [
  { 
    title: "Florida Licensed & Insured", 
    desc: "Operating fully legally and covered to give you complete peace of mind.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    )
  },
  { 
    title: "Family-Operated Team", 
    desc: "We are local neighbors serving neighbors with direct care and respect.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  { 
    title: "Clear Communication", 
    desc: "No surprises. We keep you updated and always show up as scheduled.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  { 
    title: "Residential & Commercial", 
    desc: "Equipped to handle both home lawns and complex commercial properties.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="10" width="20" height="12" rx="2"></rect>
        <path d="m12 2 8 8H4l8-8z"></path>
      </svg>
    )
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="about" />
      
      <main className="flex-grow">
        {/* Page Hero */}
        <section 
          className="relative py-16 md:py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "linear-gradient(rgba(11, 87, 16, 0.85), rgba(11, 87, 16, 0.85)), url('/img/width_1600.webp')" 
          }}
        >
          <motion.div 
            className="max-w-[800px] mx-auto space-y-4 relative z-10 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
              LOCAL ROOTS PROPERTY MAINTENANCE
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-normal leading-tight">
              About Us
            </h1>
            <p className="text-[#eee8df] text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Built on dependable service and honest work for our neighbors in Florida.
            </p>
          </motion.div>
        </section>

        <AboutSection hideHeading={true} />

        {/* Section 2: Our Core Values */}
        <section className="py-20 px-6 md:px-12 bg-[#f8f5ef] border-t border-[#eee8df]">
          <div className="max-w-[1100px] mx-auto space-y-12">
            <motion.div 
              className="text-center max-w-[600px] mx-auto space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-[#27231f] font-normal">
                Our Core Values
              </h2>
              <p className="text-sm text-[#564f46] italic">
                The principles behind our daily lawn and landscaping work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, index) => (
                <motion.article 
                  key={index}
                  className="bg-white border border-[#cdbca5] p-8 shadow-sm rounded-sm flex gap-4 items-start hover:shadow-md transition-shadow"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-[#ae9573] shrink-0">
                    {val.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-semibold text-[#27231f]">
                      {val.title}
                    </h3>
                    <p className="text-[#564f46] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Our Mission */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <motion.div 
            className="max-w-[800px] mx-auto text-center space-y-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-[#27231f] font-normal">
              Our Mission
            </h2>
            <p className="text-[#564f46] text-lg md:text-xl leading-relaxed font-light">
              "To provide the highest quality property maintenance services with a personal touch. We believe in treating every lawn as if it were our own, ensuring our community remains beautiful, one property at a time."
            </p>
            <div className="pt-4">
              <span className="inline-block w-12 h-1 bg-[#ae9573]"></span>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
