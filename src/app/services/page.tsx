import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const servicesList = [
  {
    title: "Lawn Care",
    tagline: "Consistent. Clean. Professional.",
    desc: "From weekly mowing and edging to fertilization and weed control — we keep your lawn looking sharp all year long. Tailored programs for every Florida grass type.",
    price: "From $125/month",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX71PuyV32aHCOJBIdtJEjMNoq06eLIGzNb1h4g9UsW9C35oN7d7q7b6CQYZI6Urgm5_0xZ0ksiOMUfcwHAe6dKYksOZDc9dORT-to0ti-8R8glTw-aa7o-lDkHK46ubPmN7O5KmSVcEHPS30fJgG4sqcn1tu-ONEUWZ-6qRO0PrttQV9r60hCmcdf8i8XftvOT7WTrQPBzvaxT-bmGZUyDqpbd_3jZiOqOgCn4FEQo1H4xA62rOlhIJAIzRC5wVcArQ_WUgztWr4",
    points: [
      "Mowing, edging & trimming",
      "Weed whacking & blowing",
      "Routine recurring scheduling",
      "Lawn clean-ups & debris removal"
    ]
  },
  {
    title: "Landscaping",
    tagline: "Design. Install. Transform.",
    desc: "We design and install outdoor spaces that look great and thrive in Florida's climate. From fresh mulching and sod to full landscape redesigns, we handle it all.",
    price: "Pricing varies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaP-xVvkAd48Tou4Ie-6IE9pMVBG60QtjG4CfzAj_UbMTba9qiNSQ7GpG8QpNmK-aFLdjREB-ciSsT3UEU27Trw-0ju0qScxRov6Zsp0yRTdWz88p24z3qwAtiXk5PiuX48i2QtWIernMdHKB9C6FjLEUXXzHzJQTmJNmCBaz9qdSH4ZCeA2Z4E0qqrZdt-YNyoFWmaO9dzf5dwlZF-mH90iX9Hc8SA6yemv4JuLCGkAw_BELsInTQaGNHaQ_41TocJWYFKerxemo",
    points: [
      "Landscape design & installation",
      "Mulching & bed maintenance",
      "Sod installation",
      "Irrigation setup & repair"
    ]
  },
  {
    title: "Tree Service",
    tagline: "Safe. Skilled. Thorough.",
    desc: "From palm trimming to full tree removals and stump grinding — our insured crew handles every job safely and leaves your property completely spotless.",
    price: "Pricing varies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjrL4-O7nKwyHrZw_LW4JYsRKRhhZ6lc7extyF963TaMIzzB-8E672lLMZ897m15FkS23GKvnzQc6FtOnQfBVVLy0LKmVc1hWl4flzfkHvq_NlOSYgSEuQ5untGgG6GN2D-Xu3eZkYQmLGNduNzzp1tggj0BsdaDtuHfTRzkNomZm7g3n7dCcMlhx-Hp6187Rp8YzKVmXe0efbvvn4SRTQUWPFHEzOPBJ52N8rSVbYHz5molAtMHK8Uwq9D64QkJHkdRZFAYbLQLo",
    points: [
      "Tree trimming & pruning",
      "Tree removal & stump grinding",
      "Palm tree trimming",
      "Storm damage cleanup"
    ]
  }
];

const features = [
  { title: "Licensed & Insured", desc: "Fully covered in Florida — protecting you and your property on every single job." },
  { title: "Free Estimates", desc: "No cost, no pressure. We assess your property and give you a clear, honest quote." },
  { title: "Same-Day Response", desc: "We respond to quote requests fast — usually within a few hours during business hours." },
  { title: "Locally Owned", desc: "We live and work in Brevard & Indian River Counties. Your community is ours." },
  { title: "Residential & Commercial", desc: "From family homes to HOAs and commercial plazas — we do it all." },
  { title: "Reliable Scheduling", desc: "We show up when we say we will. Consistent service you can count on, every visit." }
];

export default function ServicesPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="services" />

      {/* Hero Section */}
      <section className="bg-[#0b5710] text-white py-16 md:py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-[800px] mx-auto space-y-4 relative z-10">
          <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
            BREVARD &amp; INDIAN RIVER COUNTIES
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-normal leading-tight">
            Our Services
          </h1>
          <p className="text-[#eee8df] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Everything your property needs — lawn care, landscaping, and tree service — from one trusted, locally owned crew.
          </p>
        </div>
      </section>

      {/* Main Services Split List */}
      <main className="flex-grow py-20 px-6 md:px-12 max-w-[1100px] mx-auto space-y-24">
        {servicesList.map((service, index) => (
          <section 
            key={service.title}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            {/* Image side (alternating left/right) */}
            <div className={`col-span-1 md:col-span-6 h-[320px] md:h-[420px] rounded-sm overflow-hidden border border-[#cdbca5] shadow-sm ${
              index % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Copy side */}
            <div className={`col-span-1 md:col-span-6 space-y-6 ${
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}>
              <span className="inline-block text-xs font-bold text-[#ae9573] uppercase tracking-[0.15em]">
                {service.tagline}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-[#27231f] font-normal">
                {service.title}
              </h2>
              <p className="text-[#564f46] text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-2 pt-2">
                {service.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-3 text-sm text-[#564f46]">
                    <span className="text-[#006c00] font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/contact"
                  className="bg-[#ae9573] hover:bg-[#8e7553] text-white text-xs font-bold tracking-[0.1em] px-6 py-3.5 border border-[#7f6843] transition-all duration-300 shadow-sm"
                >
                  BOOK ESTIMATE
                </Link>
                <span className="text-sm font-bold text-[#27231f] uppercase tracking-wide">
                  {service.price}
                </span>
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us Section */}
        <section className="bg-[#eee8df] p-8 md:p-12 border border-[#cdbca5] rounded-sm space-y-12">
          <div className="text-center max-w-[600px] mx-auto space-y-2">
            <span className="text-xs font-bold text-[#006c00] uppercase tracking-[0.15em] block">
              WHY CHOOSE US
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#27231f] font-normal">
              The Local Roots Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, index) => (
              <div 
                key={index}
                className="bg-white border border-[#cdbca5]/60 p-6 shadow-sm flex flex-col justify-between"
              >
                <h3 className="font-heading text-lg font-bold text-[#27231f] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#564f46] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-[#0b5710] text-white p-8 md:p-12 text-center rounded-sm space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-normal text-white">
            Ready to Get Started?
          </h2>
          <p className="text-[#eee8df] text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Request a free estimate today. We serve Brevard &amp; Indian River Counties and respond fast — usually the same day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.15em] px-8 py-4 text-xs uppercase transition-all duration-300 shadow-sm border border-[#7f6843]"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:321-372-9462"
              className="w-full sm:w-auto bg-transparent border border-white hover:bg-white hover:text-black font-bold tracking-[0.15em] px-8 py-3.5 text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>📞</span> (321) 372-9462
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
