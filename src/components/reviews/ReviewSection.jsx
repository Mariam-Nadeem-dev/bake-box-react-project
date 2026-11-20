import ReviewSara from "./ReviewSara";
import ReviewHira from "./ReviewHira";

function ReviewSection() {
  return (
    <section className="review-section" id="reviews">
      <h2>Customer Reviews</h2>

      <div className="reviews-row">
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  );
}

export default ReviewSection;