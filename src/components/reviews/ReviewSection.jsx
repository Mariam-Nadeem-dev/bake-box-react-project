import ReviewCard from "./ReviewCard";

function ReviewSection() {
  return (
    <section className="review-section" id="reviews">
      <h2>Customer Reviews</h2>

      <div className="reviews-row">

        <ReviewCard
          name="Sara A."
          comment="Best brownies on campus. I order twice a week!"
        />

        <ReviewCard
          name="Hira M."
          comment="The Nankhatai tasted just like my grandmother's."
        />

      </div>
    </section>
  );
}

export default ReviewSection;