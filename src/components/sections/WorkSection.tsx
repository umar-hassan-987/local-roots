"use client";

import { workImages } from "@/data/homepage";
import { motion } from "framer-motion";

const transformations = [
  {
    before: { index: 4, label: "Overgrown & Neglected" },
    after: { index: 5, label: "Transformed & Thriving" },
  },
  {
    before: { index: 10, label: "Overgrown & Neglected" },
    after: { index: 11, label: "Transformed & Thriving" },
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transformations.map((pair, pairIndex) => (
            <div key={pairIndex} className="grid grid-cols-2 gap-4">
              {/* Before Card */}
              <motion.div
                className="relative overflow-hidden rounded-xl aspect-[4/3] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pairIndex * 0.15 }}
              >
                <img
                  src={workImages[pair.before.index]?.src}
                  alt="Before transformation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-md mb-2">
                    Before
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {pair.before.label}
                  </p>
                </div>
              </motion.div>

              {/* After Card */}
              <motion.div
                className="relative overflow-hidden rounded-xl aspect-[4/3] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pairIndex * 0.15 + 0.1 }}
              >
                <img
                  src={workImages[pair.after.index]?.src}
                  alt="After transformation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md mb-2">
                    After
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {pair.after.label}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
