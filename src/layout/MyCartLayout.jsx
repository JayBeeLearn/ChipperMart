import React, { useState } from "react";
import Cart from "../pages/cart/Cart";
import data from "../assets/Data";
import { useGlobalContext } from "../context";

import "../styling/Cart.css";
import { Link } from "react-router-dom";

function MyCartLayout() {
  // const [products, setProducts] = useState(data);
  const { products, total, items } = useGlobalContext();

  const filterProducts = products.filter((product) => product.inCart);

  const savedForLater = products.filter(
    (laterProduct) => laterProduct.category == "saved"
  );
  return (
    <>
      {items === 0 ? (
        <h2 className="text-2xl my-16 h-[50vh]">You have no cart items. Try adding some</h2>
      ) : (
        <>
          <div className="page-title">
            <h2>My Cart</h2>
          </div>
          <section className=" sm:flex justify-between //shopping-cart">
            <div className="w-[100%] sm:w-[68%] //cart-items">
              <Cart filterProducts={filterProducts} />
            </div>
            <div className="w-[100%] sm:w-[30%] cart-summary">
              <div className="cart-summary-top">
                <h3>Order Summary</h3>
                <p className="summary-items-length">
                  {items} {""}
                  {filterProducts.length > 1 ? "items" : "item"}
                </p>
              </div>
              <hr />
              <div className="summary-content">
                <div className="delivery-charges">
                  <p className="charges">Delivery Charges</p>

                  <p className="charges-details">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>

                <div className="subtotal">
                  <p>
                    <b>Sub Total</b>
                  </p>
                  <h5>{total}</h5>
                  {/* <h5>{filterProducts.map((product)=> product.price)}</h5> */}
                </div>

                <div className="checkout-btn">
                  <Link to={"/checkout"}> Checkout</Link>
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
      )}
    </>
  );
}

export default MyCartLayout;
