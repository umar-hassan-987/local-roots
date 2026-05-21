import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const faqItems = [
  {
    q: "How quickly can you give me an estimate?",
    a: "We typically respond to quote requests within the same business day and can often provide an estimate over the phone or schedule an on-site visit within 24-48 hours depending on your location."
  },
  {
    q: "Are you licensed and insured in Florida?",
    a: "Yes, Local Roots Property Maintenance is fully licensed and insured to operate in the state of Florida, specifically serving Brevard and Indian River counties. We can provide documentation upon request."
  },
  {
    q: "Do you offer recurring maintenance plans?",
    a: "Absolutely. We offer weekly, bi-weekly, and monthly maintenance plans tailored to your property's specific needs to keep it looking pristine year-round."
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve residential and commercial properties throughout Brevard County and Indian River County. If you are slightly outside this area, please contact us to see if we can accommodate you."
  }
];

export default function ContactPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="contact" />

      {/* Hero Section */}
      <section className="bg-[#0b5710] text-white py-16 md:py-24 px-6 md:px-12 text-center">
        <div className="max-w-[800px] mx-auto space-y-4">
          <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
            NO OBLIGATION — ALWAYS FREE
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-normal leading-tight">
            Get Your Free Estimate
          </h1>
          <p className="text-[#eee8df] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Tell us about your property and what you need. We will get back to you fast, usually the same day.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="flex-grow py-20 px-6 md:px-12 max-w-[1100px] mx-auto w-full space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-8 bg-white border border-[#cdbca5] p-6 md:p-8 shadow-sm rounded-sm space-y-6">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl md:text-3xl text-[#27231f] font-normal">
                Request a Free Quote
              </h2>
              <p className="text-sm text-[#564f46] leading-relaxed font-light">
                Fill out the form below and we will prepare a free, no-pressure estimate for your property.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                    First Name <span className="text-[#006c00] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                    Last Name <span className="text-[#006c00] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Smith"
                    className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                    Email Address <span className="text-[#006c00] font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                    Phone Number <span className="text-[#006c00] font-bold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(321) 555-0000"
                    className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                    City / Location <span className="text-[#006c00] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Melbourne, FL"
                    className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                    Property Type
                  </label>
                  <select
                    defaultValue="Residential"
                    className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                  Property Address <span className="text-[#006c00] font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="123 Main St, Melbourne, FL 32901"
                  className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                />
                <p className="text-[11px] text-[#7e7468] italic mt-1">
                  The address of the property where service is needed.
                </p>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                  Service Needed <span className="text-[#006c00] font-bold">*</span>
                </label>
                <select
                  defaultValue=""
                  required
                  className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="lawn">Lawn Mowing & Maintenance</option>
                  <option value="landscaping">Landscaping Design & Installation</option>
                  <option value="tree">Tree Removal & Stump Grinding</option>
                  <option value="trimming">Tree Trimming & Pruning</option>
                  <option value="other">Other / Custom Cleanup</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-xs uppercase tracking-wider text-[#27231f] block">
                  Tell us about your property
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your property, yard size, current condition, or anything else that helps us understand what you need..."
                  className="w-full bg-[#fafaf4] border border-[#cdbca5] rounded-sm px-4 py-3 text-sm text-[#27231f] focus:border-2 focus:border-[#0b5710] focus:ring-0 focus:outline-none transition-all"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.15em] py-4 px-6 border border-[#7f6843] transition-all uppercase text-xs shadow-sm cursor-pointer"
              >
                Submit My Free Quote Request
              </button>

              <p className="text-center text-xs text-[#7e7468] italic">
                No commitment required. We'll reach out to discuss your needs.
              </p>
            </form>
          </div>

          {/* Right Column: Sidebars */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Details Card */}
            <div className="bg-white border border-[#cdbca5] p-6 md:p-8 shadow-sm rounded-sm space-y-6">
              <h3 className="font-heading text-xl text-[#27231f] font-normal border-b border-[#eee8df] pb-3">
                Contact Us Directly
              </h3>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#eee8df] text-[#ae9573] rounded-full flex items-center justify-center shrink-0 text-lg font-bold">
                    📞
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#7e7468] mb-0.5">
                      Phone Number
                    </h4>
                    <p className="text-sm font-bold text-[#27231f] hover:text-[#0b5710]">
                      <a href="tel:321-372-9462">(321) 372-9462</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#eee8df] text-[#ae9573] rounded-full flex items-center justify-center shrink-0 text-lg font-bold">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#7e7468] mb-0.5">
                      Email Address
                    </h4>
                    <p className="text-sm font-bold text-[#27231f] hover:text-[#0b5710] break-all">
                      <a href="mailto:LocalRootsBrevard@gmail.com">LocalRootsBrevard@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#eee8df] text-[#ae9573] rounded-full flex items-center justify-center shrink-0 text-lg font-bold">
                    📍
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#7e7468] mb-0.5">
                      Service Area
                    </h4>
                    <p className="text-sm font-bold text-[#27231f]">
                      Brevard & Indian River Counties
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#eee8df] text-[#ae9573] rounded-full flex items-center justify-center shrink-0 text-lg font-bold">
                    🕒
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#7e7468] mb-0.5">
                      Office Hours
                    </h4>
                    <p className="text-sm font-bold text-[#27231f]">
                      Mon – Fri: 7:00 am – 7:00 pm
                    </p>
                    <p className="text-xs text-[#564f46] mt-0.5">
                      Saturday: 8:00 am – 2:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Us Card */}
            <div className="bg-[#eee8df] border border-[#cdbca5] p-6 md:p-8 rounded-sm space-y-6">
              <h3 className="font-heading text-xl text-[#27231f] font-normal border-b border-[#cdbca5] pb-3">
                Why Local Roots?
              </h3>
              <ul className="space-y-3">
                {[
                  "Licensed & insured in Florida",
                  "Free estimates — no pressure",
                  "Same-day response on quotes",
                  "Serving Brevard & Indian River",
                  "Residential & commercial care",
                  "Reliable scheduling you can trust"
                ].map((benefit, bIdx) => (
                  <li key={bIdx} className="flex gap-3 items-center text-xs text-[#564f46]">
                    <span className="text-[#006c00] font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <span className="text-[#006c00] text-xs font-bold uppercase tracking-[0.15em] block">
              COMMON QUESTIONS
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#27231f] font-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white border border-[#cdbca5] rounded-sm overflow-hidden transition-all duration-200 shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="w-full px-6 py-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none font-bold text-[#27231f] text-sm md:text-base select-none">
                  <span>{item.q}</span>
                  <span className="text-[#ae9573] font-bold transition-transform duration-200 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#564f46] leading-relaxed border-t border-[#eee8df] pt-4">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}