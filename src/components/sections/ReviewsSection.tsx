import Link from "next/link";
import { reviewCards } from "@/data/homepage";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-6 bg-[#fafaf4] border-b border-[#eee8df] text-center">
      <div className="max-w-[1200px] mx-auto">
        {/* Headings */}
        <h2 
          className="text-4xl md:text-7xl text-[#27231f] font-normal mb-6"
          style={{
           fontFamily: "'Catchy Mager', serif",
            letterSpacing: "-0.04em",
            lineHeight: "0.9"
         }}
        >
          Heard Around the Neighborhood:
        </h2>
        <p className="text-lg md:text-2xl text-[#27231f] mb-12 font-medium">
          Neighbors trust us!
        </p>

        {/* 3x2 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left items-stretch">
          {reviewCards.map((review, index) => {
            // Logic to reduce text size for longer reviews
            const isLong = review.text.length > 200;
            const isVeryLong = review.text.length > 350;
            const fontSize = isVeryLong ? "text-[0.8rem]" : isLong ? "text-[0.9rem]" : "text-[1.05rem]";

            return (
              <article
                key={index}
                className="bg-white border-[3px] border-black rounded-[2.5rem] p-6 flex flex-col shadow-sm relative min-h-[220px] h-full"
              >
                {/* Stylized "99" Quote Mark - Mirrored */}
                <div className="text-[#ae9573] mb-3 scale-x-[-1] w-fit">
                  <svg width="30" height="20" viewBox="0 0 32 24" fill="currentColor">
                    <path d="M10 0C13 0 15 2 15 5C15 8 13 10 10 10C8.5 10 7.5 9.5 7 9C7.5 13 9 17 13 21L11 24C5 20 1 13 1 6C1 2 4 0 10 0ZM26 0C29 0 31 2 31 5C31 8 29 10 26 10C24.5 10 23.5 9.5 23 9C23.5 13 25 17 29 21L27 24C21 20 17 13 17 6C17 2 20 0 26 0Z"/>
                  </svg>
                </div>

                {/* Review Text */}
                <div className="flex-grow flex items-start">
                  <p className={`${fontSize} text-black leading-tight mb-4 font-semibold italic`}>
                    "{review.text}"
                  </p>
                </div>

                {/* Bottom Meta info */}
                <div className="border-t-2 border-gray-200 pt-4 mt-auto">
                  <div className="flex justify-between items-end">
                    <div className="space-y-0.5">
                      <p className="text-[1.1rem] font-bold text-black leading-tight">
                        {review.name}
                      </p>
                      <p className="text-[0.85rem] font-medium text-gray-800">
                        {review.date}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 text-[#f5a623]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Tan Button at the bottom */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/reviews"
            className="inline-flex flex-col items-center justify-center bg-[#c2a37d] hover:bg-[#b0926b] text-black font-bold tracking-[0.1em] px-6 md:px-12 py-6 transition-all duration-300 shadow-md border border-[#a88e6a] w-full max-w-[600px] leading-tight"
          >
            <span className="text-sm md:text-xl uppercase text-center">CLICK HERE TO SEE ALL OF</span>
            <span className="text-sm md:text-xl uppercase text-center">OUR 5 STAR GOOGLE REVIEWS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
