import ProductCard from "./ProductCard";

function ProductSection() {
  return (
    <section className="product-section" id="shop">
      <h2>Fresh from the Oven</h2>

      <div className="products-row">

        <ProductCard
          name="Chocolate Brownies"
          price={450}
          description="Box of 6, fudgy and warm."
          image="/images/brownies.jfif"
          category="FRESHLY BAKED"
          badgeText="Bestseller"
        />

        <ProductCard
          name="Nankhatai Biscuits"
          price={350}
          description="Box of 12, cardamom flavour."
          image="/images/nankhatai.jfif"
          category="HOMEMADE SPECIAL"
          badgeText="New"
        />

        <ProductCard
          name="Cinnamon Rolls"
          price={500}
          description="Box of 4, with cream cheese."
          image="/images/cinnamon-rolls.jfif"
          category="FRESH CREAM CHEESE SPECIAL"
          badgeText="Bestseller"
        />

        <ProductCard name="Creamy Milk Cake"
         price={550}
         description="Soft, creamy and rich milk cake." 
         image="/images/milk-cake.jfif"  
         category="MADE WITH FRESH MILK"
         badgeText="New" />

      </div>
    </section>
  );
}

export default ProductSection;