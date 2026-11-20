
import ShopHeader from "./components/layout/ShopHeader";
import ProductSection from "./components/products/ProductSection";
import ReviewSection from "./components/reviews/ReviewSection";
import OrderInfo from "./components/order/OrderInfo";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="app">
      <ShopHeader />

      <main>
        <ProductSection />
        <ReviewSection />
        <OrderInfo />
      </main>

      <Footer />
    </div>
  );
}

export default App;
