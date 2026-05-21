import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#d2c7ba]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-6xl md:text-8xl text-black text-center font-normal mb-16">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Column 1: Contact Information */}
          <div className="border border-[#a89e91] p-10 flex flex-col min-h-[300px]">
            <h3 className="text-2xl text-black font-semibold mb-8">
              Contact Information
            </h3>
            <ul className="space-y-6 text-[1rem] text-black">
              <li className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/24/7e603b/marker.png" alt="Location" className="w-5 h-5 opacity-80" />
                <span className="font-medium">Brevard & Indian River Counties</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/24/7e603b/phone.png" alt="Phone" className="w-5 h-5 opacity-80" />
                <a href="tel:321-372-9462" className="hover:underline font-medium">
                  321-372-9462
                </a>
              </li>
              <li className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/24/7e603b/mail.png" alt="Email" className="w-5 h-5 opacity-80" />
                <a href="mailto:LocalRootsBrevard@gmail.com" className="hover:underline font-medium">
                  LocalRootsBrevard@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Office Hours */}
          <div className="border border-[#a89e91] p-10 flex flex-col min-h-[300px]">
            <h3 className="text-2xl text-black font-semibold mb-6">
              Office Hours
            </h3>
            <div className="space-y-6 text-[1rem] text-black">
              <div>
                <p className="font-medium">Monday to Friday</p>
                <p className="text-[1.1rem]">7:00 am to 7:00 pm</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p className="text-[1.1rem]">8:00 am to 2:00 pm</p>
              </div>
              <div>
                <p className="font-medium">Saturday</p>
                <p className="text-[1.1rem]">10:00 am to 2:00 pm</p>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="border border-[#a89e91] p-10 flex flex-col min-h-[300px]">
            <h3 className="text-3xl text-black font-semibold mb-6">
              Follow Us
            </h3>
            <div className="flex gap-6 mb-12">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://img.icons8.com/ios-filled/48/7e603b/facebook-new.png" alt="Facebook" className="w-12 h-12" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-12 h-12 grayscale brightness-50 contrast-125" />
              </a>
            </div>
            
            <Link 
              href="/contact"
              className="mt-auto inline-block w-full text-center border border-[#7e603b] rounded-full py-4 text-black italic font-medium hover:bg-[#7e603b] hover:text-white transition-all duration-300"
            >
              Tag us in your photos!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

