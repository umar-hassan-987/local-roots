"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[680px] flex items-center bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(11, 38, 11, 0.82) 0%, rgba(22, 79, 27, 0.68) 48%, rgba(88, 126, 43, 0.36) 100%), url('/img/width_1600.webp')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-white/5" />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28 w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl lg:max-w-3xl"
        >
          <span className="block text-accent text-sm md:text-base font-semibold uppercase tracking-[0.28em] mb-5">
            Brevard &amp; Indian River Counties
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-heading font-bold text-white leading-[0.98] tracking-[-0.03em] max-w-2xl lg:max-w-3xl">
            Your Property,
            <br />
            <span className="text-[#5dde62]">Perfectly Maintained.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-white/88 max-w-xl lg:max-w-2xl mt-6 md:mt-7 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          From weekly lawn care to full landscaping transformations and tree
          service, we are the local crew Brevard &amp; Indian River Counties
          homeowners and businesses trust to show up and do the job right.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-md text-base transition-all text-center shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/90 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md text-base transition-all text-center bg-white/5 backdrop-blur-[1px]"
          >
            Call Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
