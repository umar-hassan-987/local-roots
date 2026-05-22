"use client";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { aboutParagraphs } from "@/data/homepage";
import { motion } from "framer-motion";

interface AboutSectionProps {
  hideHeading?: boolean;
}

export function AboutSection({ hideHeading = false }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-white">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Column: About Us Text */}
        <div className="md:col-span-7 space-y-8">
          {!hideHeading && (
            <div className="space-y-3">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
                Dependable Lawn &amp; Property Maintenance
              </h2>
            </div>
          )}
          <div className="space-y-5 text-foreground/70 leading-relaxed text-base">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="tel:3213729462"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold px-6 py-3 text-sm rounded-lg"
            >
              Call (321) 372-9462
            </a>
          </div>
        </div>

        {/* Right Column: Brand Logo */}
        <div className="md:col-span-5 flex justify-center bg-muted rounded-2xl p-12">
          <div className="w-full max-w-[400px]">
            <BrandLogo
              rootClassName="bg-transparent"
              imagesrc="/img/black-logo.png"
              maxHeight="400px"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
