import Link from "next/link";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { workImages } from "@/data/homepage";

export default function WorkPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="work" />

      {/* Hero Section */}
      <section className="bg-[#0b5710] text-white py-16 md:py-24 px-6 md:px-12 text-center">
        <div className="max-w-[800px] mx-auto space-y-4">
          <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
            OUR PROVEN RESULTS
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-normal leading-tight">
            Our Recent Projects
          </h1>
          <p className="text-[#eee8df] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Take a look at some of the transformations we've achieved for our clients across Brevard & Indian River Counties. From regular maintenance to complete property overhauls.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-20 px-6 md:px-12 max-w-[1100px] mx-auto w-full space-y-20">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="font-heading text-3xl md:text-4xl text-[#27231f] font-normal">
            Project Showcase
          </h2>
          <p className="text-sm text-[#564f46] italic">
            A visual gallery of our lawn care, landscaping, and tree services
          </p>
        </div>

        {/* Custom Bento / Gallery Grid (14 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1: Driveway & House */}
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[0].src} alt="Commercial Mowing" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[1].src} alt="Landscaping" className="w-full h-full object-cover" />
          </div>

          {/* Row 2: Mowing & Wooded House */}
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[2].src} alt="Residential Lawn" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[3].src} alt="Property Maintenance" className="w-full h-full object-cover" />
          </div>

          {/* Row 3: Before & After Overhaul */}
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[4].src} alt="Before Overhaul" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              Before
            </span>
          </div>
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[5].src} alt="After Overhaul" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              After
            </span>
          </div>

          {/* Row 4: Before & After Tree Removal */}
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[6].src} alt="Before Removal" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              Before
            </span>
          </div>
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[7].src} alt="After Removal" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              After
            </span>
          </div>

          {/* Row 5: Before & After Pruning */}
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[8].src} alt="Before Pruning" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              Before
            </span>
          </div>
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[9].src} alt="After Pruning" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              After
            </span>
          </div>

          {/* Row 6: Before & After Branches */}
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[10].src} alt="Before Tree Trimming" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              Before
            </span>
          </div>
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src={workImages[11].src} alt="After Tree Trimming" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              After
            </span>
          </div>

          {/* Row 7: Brand Logo Box & Final Cleaned Area */}
          <div className="overflow-hidden border border-[#cdbca5] bg-white p-6 flex flex-col justify-center items-center aspect-[4/3]">
            <BrandLogo rootClassName="bg-transparent" />
            <div className="border-t border-[#eee8df] pt-4 mt-4 w-full text-center">
              <p className="text-sm font-bold text-[#27231f]">LOCAL ROOTS PROPERTY MAINTENANCE</p>
              <p className="text-xs text-[#7e7468] tracking-widest mt-1">IN GOD WE TRUST</p>
            </div>
          </div>
          <div className="overflow-hidden border border-[#cdbca5] relative aspect-[4/3] bg-gray-100">
            <img src="/img/width_900.webp" alt="Final Cleanup" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 left-4 text-white font-heading italic font-bold text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
              After
            </span>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <section className="bg-[#eee8df] border border-[#cdbca5] p-8 md:p-16 rounded-sm text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl text-[#27231f] font-normal">
            Ready for your transformation?
          </h2>
          <p className="text-[#564f46] text-sm md:text-base max-w-lg mx-auto leading-relaxed font-light">
            Let us bring out the best in your property. Contact us today for a reliable, professional assessment and a practical lawn, landscape, or tree service estimate.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.15em] px-8 py-4 text-xs uppercase transition-all duration-300 shadow-sm border border-[#7f6843]"
            >
              Get a Free Estimate
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}