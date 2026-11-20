import Badge from "./Badge";
function BrownieCard() {
  const price = 450;

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src="/images/brownies.jfif"
          alt="Fresh chocolate brownies"
          className="product-image"
        />
        <Badge />
      </div>

      <div className="product-content">
        <p className="product-category">FRESHLY BAKED</p>
        <h3>Chocolate Brownies</h3>
        <p>
          Box of 6, fudgy and warm.
        </p>

        <p className="price">Rs {price}</p>
      </div>
    </div>
  );
}

export default BrownieCard;
