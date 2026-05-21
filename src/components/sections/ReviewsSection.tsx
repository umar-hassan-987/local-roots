import { reviewCards } from "@/data/homepage";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews">
      <h3>Head Around the Neighborhood:</h3>

      <div className="review-grid">
        {reviewCards.map((review) => (
          <article key={review.name} className="review-card">
            <p>{review.text}</p>
            <p className="review-name">{review.name}</p>
            <p className="review-date">{review.date}</p>
            <p className="review-stars">*****</p>
          </article>
        ))}
      </div>

      <button className="wide-button">
        CLICK HERE TO SEE ALL OF OUR 5 STAR GOOGLE REVIEWS
      </button>
    </section>
  );
}
