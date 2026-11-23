
import ShopHeader from "./components/Layout/ShopHeader";
import ProductSection from "./components/Products/ProductSection";
import ReviewSection from "./components/Reviews/ReviewSection";
import OrderInfo from "./components/Order/OrderInfo";
import Footer from "./components/Layout/Footer";

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
