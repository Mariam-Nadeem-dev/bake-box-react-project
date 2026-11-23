import Badge from "./Badge";

function ProductCard({
  name,
  price,
  description,
  image,
  imageAlt,
  category,
  badgeText,
}) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={image}
          alt={imageAlt || name}
          className="product-image"
        />

        {badgeText && <Badge text={badgeText} />}
      </div>

      <div className="product-content">
        <p className="product-category">{category}</p>

        <h3>{name}</h3>

        <p>{description}</p>

        <p className="price">Rs {price}</p>
      </div>
    </div>
  );
}

export default ProductCard;