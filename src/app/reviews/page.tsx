"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReviewsPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="reviews" />
      
      <main className="flex-grow">
        {/* Page Hero Section */}
        <section 
          className="relative py-16 md:py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "linear-gradient(rgba(11, 87, 16, 0.85), rgba(11, 87, 16, 0.85)), url('/img/width_1600 (2).webp')" 
          }}
        >
          <motion.div 
            className="max-w-[800px] mx-auto space-y-4 relative z-10 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
              NEIGHBORS TRUST US
            </span>
            <h1 className="font-heading text-4xl md:text-7xl font-normal leading-tight" style={{ fontFamily: "'Catchy Mager', serif" }}>
              Heard Around the Neighborhood
            </h1>
          </motion.div>
        </section>

        {/* The Original Reviews Section (Main Grid) */}
        <div className="pb-20">
          <ReviewsSection hideHeading={true} />
        </div>

        {/* "How did we do?" Ending Section */}
        <section className="py-20 px-6 bg-[#f8f5ef] border-t border-[#eee8df]">
          <motion.div 
            className="max-w-[800px] mx-auto bg-white border border-[#cdbca5] p-10 md:p-16 text-center space-y-8 shadow-sm rounded-sm"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center">
                <span className="text-5xl text-[#006c00]">💬</span>
            </div>
            <div className="space-y-4">
                <h2 className="font-heading text-3xl md:text-5xl text-[#27231f] font-normal">
                  How did we do?
                </h2>
                <p className="text-[#564f46] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
                  We take pride in our work and value your feedback. Let us know about your experience with Local Roots Property Maintenance.
                </p>
            </div>
            <div className="pt-4">
              <Link
                href="https://share.google/u0gKy3ieQN4t6Dedp"
                className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.15em] px-10 py-4 text-xs uppercase transition-all duration-300 shadow-sm"
              >
                Leave a Review
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
