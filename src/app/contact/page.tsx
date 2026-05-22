"use client";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly can you give me an estimate?",
    a: "We typically respond to quote requests within the same business day and can often provide an estimate over the phone or schedule an on-site visit within 24-48 hours.",
  },
  {
    q: "Are you licensed and insured in Florida?",
    a: "Yes, Local Roots Property Maintenance is fully licensed and insured to operate in Florida, specifically serving Brevard and Indian River counties.",
  },
  {
    q: "Do you offer recurring maintenance plans?",
    a: "Absolutely. We offer weekly, bi-weekly, and monthly maintenance plans tailored to your property's specific needs to keep it looking pristine year-round.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve residential and commercial properties throughout Brevard County and Indian River County.",
  },
];

const benefits = [
  "Licensed & insured",
  "Free estimates",
  "Same-day response",
  "Serving Brevard & Indian River",
  "Residential & commercial",
  "Flexible scheduling",
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden mb-3">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-sm text-foreground">{q}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-muted-foreground shrink-0 ml-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your quote request has been submitted. We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active="contact" />

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
              No Obligation — Always Free
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Get Your Free Estimate
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Tell us about your property and we&apos;ll get back to you fast — usually the same day.
            </p>
          </motion.div>
        </section>

        {/* Main Contact Section */}
        <section className="bg-white py-16 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* LEFT COLUMN — Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-border rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Request a Free Quote
                </h2>
                <p className="text-sm text-muted-foreground mt-1 mb-6">
                  Fill out the form below and we&apos;ll be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row: First Name + Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Row: Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(321) 555-0123"
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Row: City/Location + Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                        City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="Melbourne, FL"
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                        Property Type
                      </label>
                      <div className="relative">
                        <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none bg-white pr-10">
                          <option value="">Select property type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="hoa">HOA / Multi-Family</option>
                          <option value="vacant">Vacant Lot</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"><polyline points="6 9 12 15 18 9"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Property Address */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                      Property Address
                    </label>
                    <input
                      type="text"
                      placeholder="123 Main Street, Melbourne, FL 32901"
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      This helps us give you an accurate estimate for your specific location.
                    </p>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none bg-white pr-10">
                        <option value="">Select a service</option>
                        <option value="lawn">Lawn Maintenance</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="tree-trimming">Tree Trimming</option>
                        <option value="tree-removal">Tree / Stump Removal</option>
                        <option value="one-time">One-Time Cut</option>
                        <option value="cleanup">Property Cleanup</option>
                        <option value="other">Other</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                  </div>

                  {/* Tell Us About Your Property */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                      Tell Us About Your Property
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your property, what you need done, any special considerations..."
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  {/* How Did You Hear About Us? */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-foreground mb-1.5 block">
                      How Did You Hear About Us?
                    </label>
                    <div className="relative">
                      <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary appearance-none bg-white pr-10">
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="facebook">Facebook</option>
                        <option value="referral">Referral</option>
                        <option value="droveby">Drove By</option>
                        <option value="other">Other</option>
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg font-semibold text-sm transition-all mt-4"
                  >
                    Submit My Free Quote Request
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    No commitment required. We&apos;ll review your info and reach out with a personalized estimate.
                  </p>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN — Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Card 1: Contact Us Directly */}
              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Contact Us Directly
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Phone</p>
                      <a href="tel:321-372-9462" className="text-sm text-muted-foreground hover:text-primary transition-colors">(321) 372-9462</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <a href="mailto:LocalRootsBrevard@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">LocalRootsBrevard@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Service Area</p>
                      <p className="text-sm text-muted-foreground">Brevard & Indian River Counties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Sat: 7am – 7pm</p>
                      <p className="text-sm text-muted-foreground">Sunday: 10am – 2pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Why Choose Local Roots? */}
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Why Choose Local Roots?
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 border-t border-border px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-2 mb-10">
              <span className="text-accent text-xs uppercase tracking-widest block">
                Common Questions
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            <div>
              {faqs.map((faq, index) => (
                <FAQItem key={index} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
