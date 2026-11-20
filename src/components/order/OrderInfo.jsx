
function OrderInfo() {
  const quantity = 5;
  const price = 450;
  const delivery = 100;
  const total = quantity * price + delivery;

  return (
    <section className="order-info" id="order">
      <h2>Place Your Order</h2>
      <p className="order-description">
        Freshly baked treats, made with love.
      </p>

      <div className="order-summary-card">
        <h3>Order Summary</h3>

        <div className="order-detail">
          <span>Product</span>
          <span>Chocolate Brownies</span>
        </div>

        <div className="order-detail">
          <span>Quantity</span>
          <span>{quantity}</span>
        </div>

        <div className="order-detail">
          <span>Price per item</span>
          <span>Rs {price}</span>
        </div>

        <div className="order-detail">
          <span>Delivery Charges</span>
          <span>Rs {delivery}</span>
        </div>

        <div className="order-total">
          <span>Total Amount</span>
          <span>Rs {total}</span>
        </div>
      </div>

      <p className="order-note">
        To place an order, contact us through WhatsApp.
      </p>
    </section>
  );
}

export default OrderInfo;
