
function NankhataiCard() {
  const price = 350;

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src="/images/nankhatai.jfif"
          alt="Homemade nankhatai biscuits"
          className="product-image"
        />
        <span className="badge new-badge">New</span>
      </div>

      <div className="product-content">
        <p className="product-category">HOMEMADE SPECIAL</p>
        <h3>Nankhatai Biscuits</h3>
        <p>
          Box of 12, cardamom flavour.
        </p>

        <p className="price">Rs {price}</p>
      </div>
    </div>
  );
}

export default NankhataiCard;
