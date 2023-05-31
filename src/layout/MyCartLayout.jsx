import React, { useState } from "react";
import Cart from "../pages/cart/Cart";
import data from "../assets/Data";

import "../styling/cart.css";
import { Link } from "react-router-dom";

function MyCartLayout() {
  const [products, setProducts] = useState(data);

  const filterProducts = products.filter(
    (product) => product.category == "cart"
  );

  const savedForLater = products.filter(
    (laterProduct) => laterProduct.category == "saved"
  );
  return (
    <>
      <div className="page-title">
        <h2>My Cart</h2>
      </div>
      <section className="shopping-cart">
        <div className="cart-items">
          <Cart filterProducts={filterProducts} />
        </div>
        <div className="cart-summary">
          <div className="cart-summary-top">
            <h3>Order Summary</h3>
            <p className="summary-items-length">
              {filterProducts.length} {""}
              {filterProducts.length > 1 ? "items" : "item"}
            </p>
          </div>
          <hr />
          <div className="summary-content">
            <div className="delivery-charges">
              <p className="charges">Delivery Charges</p>

              <p className="charges-details">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="subtotal">
              <p><b>Sub Total</b></p>
              <h5>24,500</h5>
              {/* <h5>{filterProducts.map((product)=> product.price)}</h5> */}
            </div>

            <div className="checkout-btn">
              <Link to={'/checkout'}> Checkout</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="saved-for-later ">
        <h2 className="text-left">Saved for Later</h2>

        <div className="cart-items">
          <Cart filterProducts={savedForLater} />
        </div>
      </div>
    </>
  );
}

export default MyCartLayout;
