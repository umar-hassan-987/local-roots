"use client";

import { useState } from "react";
import { reviewCards } from "@/data/homepage";
import { motion, AnimatePresence } from "framer-motion";

interface ReviewsSectionProps {
  hideHeading?: boolean;
  showAll?: boolean;
}

export function ReviewsSection({ hideHeading = false, showAll = false }: ReviewsSectionProps) {
  const [current, setCurrent] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviewCards.length / cardsPerPage);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleCards = showAll
    ? reviewCards
    : reviewCards.slice(current * cardsPerPage, current * cardsPerPage + cardsPerPage);

  return (
    <section id="reviews" className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        {!hideHeading && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
              What Our Clients Say
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground">
              Trusted by Local Homeowners
            </h2>
          </motion.div>
        )}

        {/* Carousel or Grid */}
        <div className="relative">
          {showAll ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCards.map((review, index) => (
                <motion.article
                  key={index}
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.2, ease: "easeInOut" }}
                  className="bg-white border border-border rounded-xl p-8 flex flex-col h-auto"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text - Dynamic text size, no line clamp */}
                  <p className={`italic text-foreground/80 leading-relaxed flex-grow ${review.text.length > 200 ? 'text-sm' : 'text-base'}`}>
                    &quot;{review.text}&quot;
                  </p>

                  {/* Reviewer Info */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleCards.map((review, index) => (
                  <article
                    key={index}
                    className="bg-white border border-border rounded-xl p-8 flex flex-col h-auto"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className={`italic text-foreground/80 leading-relaxed flex-grow ${review.text.length > 200 ? 'text-sm' : 'text-base'}`}>
                      &quot;{review.text}&quot;
                    </p>

                    {/* Reviewer Info */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Navigation - Only show if not showAll */}
        {!showAll && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors" aria-label="Previous reviews">
              <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors" aria-label="Next reviews">
              <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
