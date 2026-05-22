"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] flex items-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/img/width_1600.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            Your Property,
            <br />
            <span className="italic">Perfectly Maintained.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg text-white/90 max-w-xl mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          From weekly cuts to full landscaping, tree service and property
          maintenance — your Local Roots team keeps your grounds in perfect
          shape, all year long.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all text-center"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg text-sm transition-all text-center"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
