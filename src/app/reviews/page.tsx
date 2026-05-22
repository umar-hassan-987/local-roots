"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="reviews" />

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
              Trusted Results
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Client Reviews
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              See why neighbors across Brevard and Indian River Counties trust Local Roots.
            </p>
          </motion.div>
        </section>

        {/* Reviews Section (reused) */}
        <div className="py-4">
          <ReviewsSection hideHeading={true} showAll={true} />
        </div>

        {/* How did we do? CTA */}
        <section className="py-16 px-6 bg-muted border-t border-border">
          <motion.div
            className="max-w-2xl mx-auto bg-white p-10 md:p-14 text-center rounded-xl border border-border space-y-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-3xl">
                💬
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                How did we do?
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
                We take pride in our work and value your feedback. Let us know about your experience with Local Roots Property Maintenance.
              </p>
            </div>
            <div>
              <Link
                href="https://share.google/u0gKy3ieQN4t6Dedp"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3.5 text-sm rounded-lg transition-all"
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
