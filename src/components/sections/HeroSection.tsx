import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[46rem] flex flex-col justify-between border-b border-[#7e7468] bg-center bg-cover bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/img/Hero_img.webp')" 
      }}
    >
      {/* Top navigation overlay on the Hero background */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-6 flex justify-end items-center z-20">
        <nav className="flex gap-6 text-white text-sm font-semibold tracking-wider">
          <Link href="#about" className="hover:underline transition-all">About</Link>
          <Link href="#services" className="hover:underline transition-all">Services</Link>
          <Link href="#reviews" className="hover:underline transition-all">Reviews</Link>
          <Link href="#work" className="hover:underline transition-all">Our Work</Link>
          <Link href="#contact" className="hover:underline transition-all">Contact</Link>
        </nav>
      </div>

      {/* Main Hero Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center text-white px-4 py-8 z-10">
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
        
        <p className="text-lg md:text-xl tracking-[0.2em] font-bold mt-4">
          321.372.9462
        </p>
        <p className="text-xs md:text-sm tracking-[0.3em] font-light mt-1 text-[#dfdfdf]">
          LICENSED & INSURED
        </p>

        {/* Brand logo overlay */}
        <div className="my-8 max-w-[280px] md:max-w-[320px]">
          <BrandLogo rootClassName="bg-transparent" alt="Local Roots Logo" />
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="inline-block bg-white text-black hover:bg-[#ae9573] hover:text-white transition-all duration-300 font-bold tracking-[0.2em] px-8 py-4 text-xs md:text-sm shadow-md border border-gray-200"
        >
          BOOK A FREE ESTIMATE
        </Link>
      </div>

      {/* Spacing at the bottom */}
      <div className="py-4"></div>
    </section>
  );
}
