import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewCard({ name, comment }) {
  return (
    <div className="review-card">
      <Avatar />

      <h3>{name}</h3>

      <Rating />

      <p>{comment}</p>
    </div>
  );
}

export default ReviewCard;