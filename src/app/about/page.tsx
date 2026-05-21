import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { aboutParagraphs } from "@/data/homepage";

const values = [
  { title: "Florida Licensed & Insured", desc: "Operating fully legally and covered to give you complete peace of mind." },
  { title: "Family-Operated Team", desc: "We are local neighbors serving neighbors with direct care and respect." },
  { title: "Clear Communication", desc: "No surprises. We keep you updated and always show up as scheduled." },
  { title: "Residential & Commercial", desc: "Equipped to handle both home lawns and complex commercial properties." },
];

export default function AboutPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="about" />

      {/* Hero Section */}
      <section className="bg-[#0b5710] text-white py-16 md:py-24 px-6 md:px-12 text-center">
        <div className="max-w-[800px] mx-auto space-y-4">
          <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
            ABOUT LOCAL ROOTS
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-normal leading-tight">
            Built on Dependable Service and Honest Work
          </h1>
          <p className="text-[#eee8df] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            We help residential and commercial properties across Brevard and Indian River Counties stay healthy, clean, and beautiful year-round.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-[1100px] mx-auto py-16 px-6 md:px-12 space-y-20">
        
        {/* Section 1: Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl text-[#27231f] font-normal relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-[#ae9573]">
              Who We Are
            </h2>
            <div className="space-y-4 text-[#564f46] leading-relaxed text-sm md:text-base">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Logo Card */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] p-8 bg-white border border-[#cdbca5] shadow-sm rounded-sm text-center space-y-4">
              <BrandLogo rootClassName="bg-transparent" />
              <div className="border-t border-[#eee8df] pt-4">
                <p className="text-sm font-bold text-[#27231f]">LOCAL ROOTS PROPERTY MAINTENANCE</p>
                <p className="text-xs text-[#7e7468] tracking-widest mt-1">IN GOD WE TRUST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Stand For */}
        <div className="space-y-12">
          <div className="text-center max-w-[600px] mx-auto space-y-2">
            <h2 className="font-heading text-3xl md:text-4xl text-[#27231f] font-normal">
              Our Core Values
            </h2>
            <p className="text-sm text-[#564f46] italic">
              The principles behind our daily lawn and landscaping work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, index) => (
              <article 
                key={index}
                className="bg-white border border-[#cdbca5] p-6 shadow-sm rounded-sm flex gap-4 items-start"
              >
                <span className="text-[#ae9573] text-2xl">🌱</span>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-semibold text-[#27231f]">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#564f46] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
