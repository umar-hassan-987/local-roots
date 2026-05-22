"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { workImages } from "@/data/homepage";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Lawn Care", "Landscaping", "Tree Service"];

// Assign categories to images: 0-3 = Lawn Care, 4-7 = Landscaping, 8-11 = Tree Service
const imageCategories: Record<number, string> = {
  0: "Lawn Care",
  1: "Lawn Care",
  2: "Lawn Care",
  3: "Lawn Care",
  4: "Landscaping",
  5: "Landscaping",
  6: "Landscaping",
  7: "Landscaping",
  8: "Tree Service",
  9: "Tree Service",
  10: "Tree Service",
  11: "Tree Service",
};

const serviceLinks = [
  { title: "Lawn Care", desc: "Weekly mowing, edging, and full lawn maintenance" },
  { title: "Landscaping", desc: "Design, installation, mulching and sod work" },
  { title: "Tree Service", desc: "Trimming, removal, stump grinding and storm cleanup" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = workImages
    .map((img, index) => ({ ...img, index, category: imageCategories[index] || "Lawn Care" }))
    .filter((img) => activeFilter === "All" || img.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="work" />

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
              Our Work
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Project Gallery
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              A look at the lawns, landscapes, and tree work we&apos;ve completed across Brevard & Indian River Counties.
            </p>
          </motion.div>
        </section>

        {/* Filter Tabs */}
        <section className="bg-white border-b border-border py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((img, i) => {
                // Varying spans for masonry effect
                const isWide = i === 0 || i === 5 || i === 8;
                return (
                  <motion.div
                    key={img.index}
                    className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                      isWide ? "lg:col-span-2" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className={`${isWide ? "aspect-[16/9]" : "aspect-square"} relative`}>
                      <img
                        src={img.src}
                        alt={`${img.category} project`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {img.category}
                      </span>
                      {/* Caption badge (Before/After) */}
                      {img.caption && (
                        <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {img.caption}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Learn More About What We Do */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-accent text-xs uppercase tracking-widest block">
                Explore
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                Learn More About What We Do
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceLinks.map((svc) => (
                <Link key={svc.title} href="/services">
                  <motion.div
                    className="bg-white border border-border rounded-xl p-6 flex justify-between items-center hover:shadow-md transition-shadow group"
                    whileHover={{ x: 4 }}
                  >
                    <div>
                      <h3 className="font-semibold text-base text-foreground">{svc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{svc.desc}</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Like What You See? CTA */}
        <section className="bg-primary py-16 px-6 text-center text-white">
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Like What You See?
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Let us transform your property next. Get a free estimate today.
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
