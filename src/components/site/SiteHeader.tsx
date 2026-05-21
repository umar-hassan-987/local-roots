"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  key: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/reviews", label: "Reviews", key: "reviews" },
  { href: "/work", label: "Our Work", key: "work" },
  { href: "/contact", label: "Contact Us", key: "contact" },
];

type SiteHeaderProps = {
  active: NavItem["key"];
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm border-b border-[#eee8df] bg-[#fafaf4]/95 backdrop-blur-md">
      {/* Top Utility Bar */}
      <div className="hidden md:flex justify-between items-center bg-[#0b5710] text-[#f2f7eb] text-xs font-semibold px-12 py-2 tracking-wider">
        <div className="flex items-center gap-2">
          <span>📞</span>
          <a href="tel:321-372-9462" className="hover:underline">321-372-9462</a>
        </div>
        <div className="flex items-center gap-2">
          <span>🌴</span>
          <span>Serving Brevard &amp; Indian River Counties</span>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="font-heading text-xl md:text-2xl font-bold tracking-wide text-[#006c00] hover:text-[#ae9573] transition-colors duration-200">
          Local Roots
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center" style={{ fontFamily: "'Catchy Mager', serif" }}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 pb-1 ${
                active === item.key
                  ? "text-[#006c00] border-[#006c00]"
                  : "text-[#564f46] border-transparent hover:text-[#ae9573]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#ae9573] hover:bg-[#8e7553] text-white text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 border border-[#7f6843] transition-all duration-300 shadow-sm"
          >
            GET A FREE QUOTE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#27231f] hover:text-[#ae9573] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#fafaf4] border-t border-[#eee8df] py-4 px-6 absolute top-full left-0 w-full shadow-lg z-40 transition-all duration-300">
          <nav className="flex flex-col gap-4" style={{ fontFamily: "'Catchy Mager', serif" }}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold tracking-wide py-2 ${
                  active === item.key
                    ? "text-[#006c00] font-bold"
                    : "text-[#564f46] hover:text-[#ae9573]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Utility Info */}
            <div className="border-t border-[#eee8df] pt-4 mt-2 space-y-3">
              <a href="tel:321-372-9462" className="flex items-center gap-2 text-sm text-[#564f46] font-semibold">
                <span>📞</span> 321-372-9462
              </a>
              <div className="flex items-center gap-2 text-xs text-[#7e7468]">
                <span>🌴</span> Serving Brevard &amp; Indian River Counties
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#ae9573] hover:bg-[#8e7553] text-white text-xs font-bold tracking-[0.15em] uppercase py-3 border border-[#7f6843] transition-all"
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
