import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="bg-[#27231f] text-white border-t border-[#3d362f]">
      {/* Main Footer Content */}
      <div className="max-w-[1100px] mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <div className="max-w-[200px]">
            <BrandLogo rootClassName="bg-transparent !p-0" alt="Local Roots Property Maintenance Logo" />
          </div>
          <p className="text-sm text-[#eee8df]/80 leading-relaxed">
            Your trusted local crew for lawn care, landscaping, and tree service across Brevard &amp; Indian River Counties. Honesty, professionalism, and high quality.
          </p>
          <div className="flex gap-4 pt-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ae9573] hover:text-[#27231f] transition-all duration-300"
            >
              <span className="text-lg">🌐</span>
            </a>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ae9573] hover:text-[#27231f] transition-all duration-300"
            >
              <span className="text-lg">⭐</span>
            </a>
          </div>
        </div>

        {/* Column 2: Services Links */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#ae9573]">
            Services
          </h4>
          <nav className="flex flex-col space-y-3 text-sm text-[#eee8df]/70">
            <Link className="hover:text-[#ae9573] transition-colors" href="/services">Lawn Maintenance</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/services">Tree Trimming</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/services">Stump Removals</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/services">Property Cleanups</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/services">Commercial Care</Link>
          </nav>
        </div>

        {/* Column 3: Quick Links */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#ae9573]">
            Company
          </h4>
          <nav className="flex flex-col space-y-3 text-sm text-[#eee8df]/70">
            <Link className="hover:text-[#ae9573] transition-colors" href="/">Home</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/about">About Us</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/work">Our Work</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/reviews">Reviews</Link>
            <Link className="hover:text-[#ae9573] transition-colors" href="/contact">Contact Us</Link>
          </nav>
        </div>

        {/* Column 4: Contact Info & CTA */}
        <div className="col-span-1 md:col-span-4 space-y-4">
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-[#ae9573]">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm text-[#eee8df]/70">
            <li className="flex items-center gap-2">
              <span>📞</span> <span>Phone: 321-372-9462</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> <span>Email: LocalRootsBrevard@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span> <span>Brevard & Indian River Counties</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📅</span> <span>Hours: Mon - Sat: 7am - 7pm</span>
            </li>
          </ul>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.1em] px-5 py-3 text-xs uppercase transition-all duration-300 shadow-sm border border-[#7f6843] w-full text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Banner */}
      <div className="border-t border-[#3d362f] py-6 bg-[#1d1a17]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-[#eee8df]/50">
          <p>© {new Date().getFullYear()} Local Roots Property Maintenance, LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:underline hover:text-[#ae9573] transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="hover:underline hover:text-[#ae9573] transition-colors" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
