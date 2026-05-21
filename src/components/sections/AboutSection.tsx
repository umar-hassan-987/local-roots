"use client";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { aboutParagraphs } from "@/data/homepage";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-[#fafaf4] border-b border-[#eee8df]">
      <motion.div 
        className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Left Column: About Us Text */}
        <div className="md:col-span-7 space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl text-[#27231f] font-normal relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-[#ae9573]">
            About Us
          </h2>
          <div className="space-y-4 text-[#564f46] leading-relaxed text-sm md:text-base">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Brand Logo */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-[700px] p-6">
            <BrandLogo 
              rootClassName="bg-transparent" 
              imagesrc="/img/black-logo.png"
              maxHeight="450px"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
