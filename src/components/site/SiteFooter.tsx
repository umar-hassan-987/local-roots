import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#fafaf4] border-t border-[#eee8df] py-12">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Brand/Copyright */}
        <div className="space-y-2">
          <Link href="/" className="font-heading text-xl font-bold tracking-wide text-[#006c00] hover:text-[#ae9573] transition-colors duration-200">
            Local Roots
          </Link>
          <p className="text-xs text-[#7e7468]">
            © {new Date().getFullYear()} Local Roots Property Maintenance, LLC. All rights reserved.
          </p>
        </div>

        {/* Simple Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-[#564f46]">
          <Link href="/about" className="hover:text-[#006c00] transition-colors">About</Link>
          <Link href="/services" className="hover:text-[#006c00] transition-colors">Services</Link>
          <Link href="/reviews" className="hover:text-[#006c00] transition-colors">Reviews</Link>
          <Link href="/work" className="hover:text-[#006c00] transition-colors">Our Work</Link>
          <Link href="/contact" className="hover:text-[#006c00] transition-colors">Contact</Link>
        </nav>

        {/* Contact Quick Info with Professional SVG Icons */}
        <div className="text-sm text-[#564f46] font-semibold space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-[#006c00]"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="tel:321-372-9462" className="hover:text-[#006c00] transition-colors">321-372-9462</a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-[#006c00]"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Brevard & Indian River Counties</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
