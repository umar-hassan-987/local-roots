import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#cbc0af] border-t border-[#ae9e89]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl text-[#27231f] text-center font-normal mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
          {/* Column 1: Contact Information */}
          <div className="bg-[#fafaf4] border border-[#ae9573] p-8 shadow-sm flex flex-col justify-between rounded-sm">
            <div>
              <h3 className="font-heading text-2xl text-[#27231f] font-semibold mb-6 pb-2 border-b border-[#eee8df]">
                Contact Info
              </h3>
              <ul className="space-y-4 text-sm text-[#564f46]">
                <li className="flex items-start gap-3">
                  <span className="text-[#ae9573] font-bold">📍</span>
                  <span>Brevard & Indian River Counties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ae9573] font-bold">📞</span>
                  <a href="tel:321-372-9462" className="hover:text-[#ae9573] transition-colors font-bold text-base text-[#27231f]">
                    321-372-9462
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ae9573] font-bold">✉️</span>
                  <a href="mailto:LocalRootsBrevard@gmail.com" className="hover:text-[#ae9573] transition-colors">
                    LocalRootsBrevard@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-block w-full text-center bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.1em] px-4 py-3 text-xs uppercase transition-all duration-300 shadow-sm border border-[#7f6843]"
              >
                REQUEST FREE ESTIMATE
              </Link>
            </div>
          </div>

          {/* Column 2: Office Hours */}
          <div className="bg-[#fafaf4] border border-[#ae9573] p-8 shadow-sm flex flex-col justify-between rounded-sm">
            <div>
              <h3 className="font-heading text-2xl text-[#27231f] font-semibold mb-6 pb-2 border-b border-[#eee8df]">
                Office Hours
              </h3>
              <ul className="space-y-4 text-sm text-[#564f46]">
                <li className="flex justify-between items-center pb-2 border-b border-[#eee8df]/60">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-[#27231f] font-semibold">7:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-[#eee8df]/60">
                  <span className="font-medium">Saturday</span>
                  <span className="text-[#27231f] font-semibold">8:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-[#7e7468] italic font-semibold">Closed</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#eee8df] p-4 text-center mt-6 text-xs text-[#564f46] italic rounded-sm">
              ✨ Locally Owned &amp; Family Operated in Florida
            </div>
          </div>

          {/* Column 3: Follow Us & Newsletter */}
          <div className="bg-[#fafaf4] border border-[#ae9573] p-8 shadow-sm flex flex-col justify-between rounded-sm">
            <div>
              <h3 className="font-heading text-2xl text-[#27231f] font-semibold mb-6 pb-2 border-b border-[#eee8df]">
                Follow Us
              </h3>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-[#27231f] hover:bg-[#ae9573] text-white hover:text-[#27231f] transition-all duration-300 py-3 text-xs font-bold tracking-[0.1em] border border-[#27231f]"
                >
                  FACEBOOK
                </a>
                <a 
                  href="https://google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-[#27231f] hover:bg-[#ae9573] text-white hover:text-[#27231f] transition-all duration-300 py-3 text-xs font-bold tracking-[0.1em] border border-[#27231f]"
                >
                  GOOGLE
                </a>
              </div>

              {/* Newsletter signup */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#27231f] tracking-wide uppercase">
                  Subscribe to our newsletter
                </p>
                <form className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                    className="w-full bg-[#fafaf4] border border-[#cdbca5] px-4 py-2 text-sm text-[#27231f] focus:outline-none focus:border-[#ae9573] placeholder-[#7e7468]"
                  />
                  <button 
                    type="submit"
                    className="bg-[#27231f] hover:bg-[#ae9573] text-white hover:text-[#27231f] transition-all duration-300 py-2 text-xs font-bold tracking-[0.1em] border border-[#27231f]"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link className="text-[#ae9573] hover:underline text-xs font-semibold tracking-wider uppercase" href="/contact">
                Tag us in your photos!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

