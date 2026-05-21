import Link from "next/link";
import { reviewCards } from "@/data/homepage";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-6 bg-[#fafaf4] border-b border-[#eee8df] text-center">
      <div className="max-w-[1100px] mx-auto">
        {/* Headings */}
        <h2 className="font-heading text-4xl md:text-5xl text-[#27231f] font-normal mb-2">
          Heard Around the Neighborhood:
        </h2>
        <p className="text-sm md:text-base text-[#564f46] italic mb-12">
          Neighbors trust us!
        </p>

        {/* 3x2 Reviews Grid */}
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

              {/* Bottom Meta info */}
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

        {/* Tan Button at the bottom */}
        <div className="mt-12">
          <Link
            href="/reviews"
            className="inline-block bg-[#ae9573] hover:bg-[#8e7553] text-white font-bold tracking-[0.2em] px-8 py-4 text-xs md:text-sm uppercase transition-all duration-300 shadow-sm border border-[#7f6843]"
          >
            CLICK HERE TO SEE ALL OF OUR 5 STAR GOOGLE REVIEWS
          </Link>
        </div>
      </div>
    </section>
  );
}
