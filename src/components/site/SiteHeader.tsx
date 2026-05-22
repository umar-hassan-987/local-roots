"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  href: string;
  label: string;
  key: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/work", label: "Gallery", key: "work" },
  { href: "/about", label: "About", key: "about" },
  { href: "/reviews", label: "Reviews", key: "reviews" },
  { href: "/contact", label: "Contact", key: "contact" },
];

type SiteHeaderProps = {
  active: NavItem["key"];
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Row 1 — Top Utility Bar */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <a
            href="tel:321-372-9462"
            className="flex items-center gap-2 text-white text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (321) 372-9462
          </a>
          <span className="text-white/80 text-sm hidden sm:block">
            Serving Brevard &amp; Indian River Counties
          </span>
        </div>
      </div>

      {/* Row 2 — Main Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/img/black-logo.png"
              alt="Local Roots"
              className="h-[50px] w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === item.key
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side — Phone + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:321-372-9462"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              (321) 372-9462
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[calc(theme(spacing.2)*2+theme(fontSize.sm,lineHeight)+50px+theme(spacing.3)*2)] bg-white z-40"
          >
            <nav className="flex flex-col items-center gap-6 pt-10 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    active === item.key
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="w-full pt-6 border-t border-border mt-2 space-y-4">
                <a
                  href="tel:321-372-9462"
                  className="block text-center text-foreground/80 font-medium"
                >
                  (321) 372-9462
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
