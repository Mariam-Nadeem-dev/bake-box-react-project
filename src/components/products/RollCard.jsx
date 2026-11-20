
import Badge from "./Badge";

function RollCard() {
  const price = 500;

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src="/images/cinnamon-rolls.jfif"
          alt=""
          className="product-image"
        />
        <Badge />
      </div>

      <div className="product-content">
        <p className="product-category">FRESH CREAM CHEESE SPECIAL</p>
        <h3>Cinnamon Rolls</h3>
        <p>
          Box of 4, with cream cheese.
        </p>
        <p className="price">Rs {price}</p>
      </div>
    </div>
  );
}

export default RollCard;
