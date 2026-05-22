"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section 
      className="relative min-h-[46rem] flex flex-col justify-between border-b border-[#7e7468] bg-center bg-cover bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/Hero_img.webp')" 
      }}
    >
      {/* Top navigation overlay on the Hero background */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-6 flex justify-end items-center z-50">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white text-lg font-semibold tracking-wider" style={{ fontFamily: "'Catchy Mager', serif" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline transition-all">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-right"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1, width: "75%" }}
              className="block h-0.5 bg-white rounded-full transition-all duration-300"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
              className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-right"
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-[#1a1a1a] z-40 flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-10 text-white text-3xl font-normal tracking-[0.2em]" style={{ fontFamily: "'Catchy Mager', serif" }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="hover:text-[#ae9573] transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Hero Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center text-white px-4 py-8 z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-heading text-6xl md:text-8xl tracking-wide font-normal drop-shadow-md"
            style={{
             fontFamily: "'Catchy Mager', serif",
              letterSpacing: "0.09em",
              lineHeight: "0.9"
           }}

          >
            Local Roots
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl tracking-wider mt-2 opacity-95"
          style={{
             fontFamily: "'Catchy Mager', serif",
              letterSpacing: "0.09em",
              lineHeight: "0.9"
           }}
           >
            Property Maintenance, LLC
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "linear" }}
          className="text-center"
        >
          <p className="text-lg md:text-xl tracking-[0.2em] font-bold mt-4">
            321.372.9462
          </p>
          <p className="text-xs md:text-sm tracking-[0.3em] font-light mt-1 text-[#dfdfdf]">
            LICENSED & INSURED
          </p>
        </motion.div>

        {/* Brand logo overlay */}
        <motion.div 
          className="my-8 max-w-[280px] md:max-w-[320px]"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0 0 0)' }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <BrandLogo rootClassName="bg-transparent" alt="Local Roots Logo" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://form.jotform.com/233315126308044"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white !text-black hover:bg-[#ae9573] hover:text-white transition-all duration-300 font-bold tracking-[0.2em] px-8 py-4 text-xs md:text-sm shadow-md border border-gray-200"
            style={{ color: 'black' }}
          >
            BOOK A FREE ESTIMATE
          </a>
        </motion.div>
      </div>

      {/* Spacing at the bottom */}
      <div className="py-4"></div>
    </section>
  );
}
