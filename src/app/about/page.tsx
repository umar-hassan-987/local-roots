"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { motion } from "framer-motion";

const values = [
  {
    title: "Licensed & Insured",
    desc: "Operating fully legally and covered to give you complete peace of mind on every job.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: "Family Operated",
    desc: "We are local neighbors serving neighbors with direct care, respect, and hard work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    desc: "No surprises. We keep you updated and always show up as scheduled.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
  },
  {
    title: "Quality Results",
    desc: "We treat every property like it's our own, ensuring a pristine finish every time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="about" />

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
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              About Local Roots
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Built on dependable service and honest work for our neighbors in Florida.
            </p>
          </motion.div>
        </section>

        {/* Reuse AboutSection */}
        <AboutSection hideHeading={true} />

        {/* Our Core Values */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-muted">
          <div className="max-w-7xl mx-auto space-y-12">
            <motion.div
              className="text-center max-w-3xl mx-auto space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-xs uppercase tracking-widest block">
                Principles
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, index) => (
                <motion.article
                  key={index}
                  className="bg-white rounded-xl p-8 border border-border text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-muted text-accent flex items-center justify-center mx-auto mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {val.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {val.desc}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed italic">
              &quot;To provide the highest quality property maintenance services with a personal touch. We believe in treating every lawn as if it were our own, ensuring our community remains beautiful, one property at a time.&quot;
            </p>
            <div className="flex justify-center">
              <span className="w-16 h-1 bg-accent rounded-full"></span>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
