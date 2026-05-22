"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ContactSectionProps {
  hideHeading?: boolean;
}

export function ContactSection({ hideHeading = false }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 px-6 bg-primary overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {!hideHeading && (
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
          )}
          <p className="text-white/80 max-w-2xl mx-auto mt-4 text-base md:text-lg">
            Request a free estimate today. We serve Brevard &amp; Indian River
            Counties and respond fast — usually the same day.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all text-center"
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:3213729462"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (321) 372-9462
          </a>
        </motion.div>
      </div>
    </section>
  );
}
