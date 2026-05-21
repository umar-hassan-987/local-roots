"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { workImages } from "@/data/homepage";
import { ContactSection } from "@/components/sections/ContactSection";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="work" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "linear-gradient(rgba(11, 87, 16, 0.85), rgba(11, 87, 16, 0.85)), url('/img/width_1600 (3).webp')" 
          }}
        >
          <motion.div 
            className="max-w-[800px] mx-auto space-y-4 relative z-10 text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
              OUR PROVEN RESULTS
            </span>
            <h1 className="font-heading text-4xl md:text-7xl font-normal leading-tight" style={{ fontFamily: "'Catchy Mager', serif" }}>
              Our Recent Projects
            </h1>
            <p className="text-[#eee8df] text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Take a look at some of the transformations we've achieved for our clients across Brevard & Indian River Counties. From regular maintenance to complete property overhauls.
            </p>
          </motion.div>
        </section>

        {/* Transformations Section */}
        <section className="py-12 px-6 md:px-12 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl text-[#006c00] text-center font-normal mb-12" 
              style={{ fontFamily: "'Catchy Mager', serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Transformations
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Transformation Card 1 */}
              <motion.div 
                className="bg-[#fafaf4] border border-[#eee8df] overflow-hidden shadow-sm group"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[250px] md:h-[300px]">
                  <img src={workImages[4].src} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-white/90 text-black text-[10px] font-bold uppercase px-2 py-1">Before</span>
                </div>
                <div className="relative h-[250px] md:h-[300px]">
                  <img src={workImages[5].src} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-[#006c00] text-white text-[10px] font-bold uppercase px-2 py-1">After</span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-heading text-xl md:text-2xl text-[#27231f] font-bold">Full Property Overhaul</h3>
                  <p className="text-sm text-[#564f46]">Complete clean-up, mowing, edging, and fresh mulch installation for a pristine finish.</p>
                </div>
              </motion.div>

              {/* Transformation Card 2 */}
              <motion.div 
                className="bg-[#fafaf4] border border-[#eee8df] overflow-hidden shadow-sm group"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative h-[250px] md:h-[300px]">
                  <img src={workImages[10].src} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-white/90 text-black text-[10px] font-bold uppercase px-2 py-1">Before</span>
                </div>
                <div className="relative h-[250px] md:h-[300px]">
                  <img src={workImages[11].src} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-[#006c00] text-white text-[10px] font-bold uppercase px-2 py-1">After</span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-heading text-xl md:text-2xl text-[#27231f] font-bold">Tree Removal & Stump Grinding</h3>
                  <p className="text-sm text-[#564f46]">Safe removal of hazardous trees and complete stump grinding for a clean, safe property.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Landscaping Projects Gallery */}
        <section className="py-20 px-6 md:px-12 bg-[#fafaf4]">
          <div className="max-w-[1100px] mx-auto space-y-12">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl text-[#006c00] text-center font-normal" 
              style={{ fontFamily: "'Catchy Mager', serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Recent Landscaping Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.div 
                className="lg:col-span-2 aspect-[16/9] overflow-hidden border border-[#cdbca5]"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src={workImages[0].src} alt="Project 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div 
                className="aspect-square overflow-hidden border border-[#cdbca5]"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <img src={workImages[1].src} alt="Project 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div 
                className="aspect-square overflow-hidden border border-[#cdbca5]"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src={workImages[2].src} alt="Project 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
              <motion.div 
                className="lg:col-span-2 aspect-[16/9] overflow-hidden border border-[#cdbca5]"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img src={workImages[3].src} alt="Project 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
