"use client";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { workImages } from "@/data/homepage";
import { motion } from "framer-motion";

export function WorkSection() {
  const ImageBox = ({ index, className }: { index: number; className?: string }) => {
    const img = workImages[index];
    if (!img) return null;
    return (
      <motion.div 
        className={`overflow-hidden border border-[#cdbca5] relative bg-gray-100 group ${className || "aspect-[4/3]"}`}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: (index % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={img.src} alt={`Work ${index + 1}`} className="w-full h-full object-cover" />
        {img.caption && (
          <div className="absolute bottom-[5%] left-[5%] w-[35%] max-w-[160px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none pointer-events-none">
            <img 
              src={img.caption === "Before" ? "/ourwork/before.png" : "/ourwork/after.png"} 
              alt={img.caption} 
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="work" className="py-20 px-6 bg-[#fafaf4] border-b border-[#eee8df] text-center overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Heading */}
        <motion.h2 
          className="text-4xl md:text-7xl text-[#27231f] font-normal mb-6"
          style={{
           fontFamily: "'Catchy Mager', serif",
            letterSpacing: "-0.04em",
            lineHeight: "0.9"
         }}
         initial={{ scale: 0.8, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Our Work
        </motion.h2>

        {/* 2-Column Grid Layout matching ourworkstructure-2.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <ImageBox index={0} className="aspect-[16/9]" /> {/* 1 */}
            <ImageBox index={2} className="aspect-[16/9]" /> {/* 3 */}
            <ImageBox index={4} className="aspect-[16/9]" /> {/* 5 (Before) */}
            <ImageBox index={5} className="aspect-[16/9]" /> {/* 6 (After) */}
            <div className="grid grid-cols-2 gap-4">
              <ImageBox index={8} className="aspect-[3/2]" /> {/* 9 (Before) - Reduced height */}
              <ImageBox index={9} className="aspect-[3/2]" /> {/* 10 (After) - Reduced height */}
            </div>
            {/* Brand Logo Box */}
            <motion.div 
              className="overflow-hidden p-6 flex flex-col justify-center items-center min-h-[150px]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <BrandLogo rootClassName="bg-transparent" imagesrc="/img/black-logo.png" />
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <ImageBox index={1} /> {/* 2 */}
            <ImageBox index={3} /> {/* 4 */}
            <div className="grid grid-cols-2 gap-4">
              <ImageBox index={6} className="aspect-[3/4]" /> {/* 7 (Before) - Increased height */}
              <ImageBox index={7} className="aspect-[3/4]" /> {/* 8 (After) - Increased height */}
            </div>
            <ImageBox index={10} className="aspect-[21/9]" /> {/* 11 (Before) */}
            <ImageBox index={11} className="aspect-[21/9]" /> {/* 12 (After) */}
          </div>
        </div>
      </div>
    </section>
  );
}
