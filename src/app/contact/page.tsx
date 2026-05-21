"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly can you give me an estimate?",
    a: "We typically respond to quote requests within the same business day and can often provide an estimate over the phone or schedule an on-site visit within 24-48 hours depending on your location."
  },
  {
    q: "Are you licensed and insured in Florida?",
    a: "Yes, Local Roots Property Maintenance is fully licensed and insured to operate in the state of Florida, specifically serving Brevard and Indian River counties. We can provide documentation upon request."
  },
  {
    q: "Do you offer recurring maintenance plans?",
    a: "Absolutely. We offer weekly, bi-weekly, and monthly maintenance plans tailored to your property's specific needs to keep it looking pristine year-round."
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve residential and commercial properties throughout Brevard County and Indian River County. If you are slightly outside this area, please contact us to see if we can accommodate you."
  }
];

const benefits = [
  "Licensed & insured in Florida",
  "Free estimates — no pressure",
  "Same-day response on quotes",
  "Serving Brevard & Indian River",
  "Residential & commercial",
  "Flexible scheduling"
];

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-[#cdbca5] rounded-sm overflow-hidden transition-all duration-200">
      <button 
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-[#27231f]">{q}</span>
        <span className={`text-[#ae9573] transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-[#564f46] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="contact" />
      
      <main className="flex-grow">
        {/* Page Hero */}
        <section 
          className="relative py-16 md:py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "linear-gradient(rgba(11, 87, 16, 0.85), rgba(11, 87, 16, 0.85)), url('/img/width_1600 (3).webp')" 
          }}
        >
          <motion.div 
            className="max-w-[800px] mx-auto space-y-4 relative z-10 text-white"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
              GET A FREE ESTIMATE
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-normal leading-tight">
              Contact Us
            </h1>
            <p className="text-[#eee8df] text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Tell us about your property. We'll get back to you fast — usually the same day.
            </p>
          </motion.div>
        </section>

        {/* Original Contact Section */}
        <ContactSection hideHeading={true} />

        {/* Additional Details Section */}
        <section className="py-20 px-6 md:px-12 bg-[#fafaf4] border-t border-[#eee8df]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: FAQ */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em]">
                  COMMON QUESTIONS
                </span>
                <h2 className="font-heading text-4xl md:text-5xl text-[#27231f] font-normal">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

            {/* Right Column: Why Choose Us */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b5710] text-white p-10 md:p-12 shadow-sm rounded-sm space-y-8 h-full">
                <div className="space-y-4">
                  <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em]">
                    WHY LOCAL ROOTS
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-normal">
                    Why Choose Us?
                  </h3>
                </div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg">
                      <span className="text-[#ae9573] font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-white/20">
                  <p className="text-[#eee8df] italic font-light">
                    "We take pride in every property we touch. Your satisfaction is our root priority."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
