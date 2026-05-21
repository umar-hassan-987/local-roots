import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { reviewCards } from "@/data/homepage";

export default function ReviewsPage() {
  return (
    <div className="site-shell bg-[#fafaf4] min-h-screen flex flex-col justify-between">
      <SiteHeader active="reviews" />

      {/* Hero Section */}
      <section className="bg-[#0b5710] text-white py-16 md:py-24 px-6 md:px-12 text-center">
        <div className="max-w-[800px] mx-auto space-y-4">
          <span className="text-[#ae9573] text-xs font-bold uppercase tracking-[0.2em] block">
            NEIGHBORS TRUST US
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-normal leading-tight">
            Heard Around the Neighborhood
          </h1>
          <p className="text-[#eee8df] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            See what our residential and commercial clients across Brevard and Indian River Counties have to say about our lawn care, cleanups, and tree services.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <main className="flex-grow py-20 px-6 md:px-12 max-w-[1100px] mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {reviewCards.map((review, index) => (
            <article
              key={index}
              className="bg-white border border-[#cdbca5] rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Gold Quote Mark */}
              <div className="text-[#ae9573] text-5xl font-serif leading-none mb-2">
                “
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#564f46] italic leading-relaxed mb-6 flex-grow">
                {review.text}
              </p>

              {/* Bottom Meta */}
              <div className="border-t border-[#eee8df] pt-4 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-[#27231f]">
                    {review.name}
                  </p>
                  <p className="text-xs text-[#7e7468]">
                    {review.date}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 text-[#f3a531] text-lg font-bold">
                  ★ ★ ★ ★ ★
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center py-6 bg-[#eee8df] border border-[#cdbca5] rounded-sm">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.1em] px-8 py-4 text-xs md:text-sm uppercase transition-all duration-300 shadow-sm border border-[#7f6843] max-w-full text-center"
          >
            CLICK HERE TO SEE ALL OF OUR 5 STAR GOOGLE REVIEWS
          </a>
        </div>

        {/* Leave a Review CTA Box */}
        <section className="bg-white border border-[#cdbca5] p-8 md:p-12 text-center rounded-sm max-w-[700px] mx-auto space-y-6 shadow-sm">
          <span className="text-4xl">💬</span>
          <h2 className="font-heading text-2xl md:text-3xl text-[#27231f] font-normal">
            How did we do?
          </h2>
          <p className="text-sm text-[#564f46] leading-relaxed max-w-md mx-auto">
            We value direct feedback and use it to keep our service consistent, responsive, and easy to trust. Let us know how we can keep serving you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#27231f] hover:bg-[#ae9573] text-white hover:text-[#27231f] font-bold tracking-[0.15em] px-8 py-4 text-xs uppercase transition-all duration-300 shadow-sm border border-[#27231f]"
          >
            LEAVE A REVIEW
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
