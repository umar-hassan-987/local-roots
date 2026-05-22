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
      {/* Main Header Row */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="font-heading text-xl lg:text-2xl font-bold tracking-wide text-[#006c00] hover:text-[#ae9573] transition-colors duration-200"
        style={{ fontFamily: "'Catchy Mager', serif" }}>
          Local Roots
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center" style={{ fontFamily: "'Catchy Mager', serif" }}>
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
        <div className="hidden lg:block">
          <a
            href="https://form.jotform.com/233315126308044"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ae9573] hover:bg-[#8e7553] text-white text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 border border-[#7f6843] transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            GET A FREE QUOTE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#27231f] hover:text-[#ae9573] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-[#fafaf4] border-t border-[#eee8df] py-4 px-6 absolute top-full left-0 w-full shadow-lg z-40 transition-all duration-300">
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
              <a
                href="https://form.jotform.com/233315126308044"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#ae9573] hover:bg-[#8e7553] text-white text-xs font-bold tracking-[0.15em] uppercase py-3 border border-[#7f6843] transition-all"
              >
                GET A FREE QUOTE
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
