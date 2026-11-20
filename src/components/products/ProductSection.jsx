
import BrownieCard from "./BrownieCard";
import NankhataiCard from "./NankhataiCard";
import RollCard from "./RollCard";

function ProductSection() {
  return (
    <section className="product-section" id="shop">
      <h2>Fresh from the Oven</h2>

      <div className="products-row">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  );
}

export default ProductSection;
