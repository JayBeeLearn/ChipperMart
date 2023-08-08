import React, { useState } from "react";
import { FaCaretRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../assets/Data";
import { useGlobalContext } from "../context";

import "../styling/Checkout.css";
import Checkout from "../pages/checkout/Checkout";

function CheckoutLayout() {
  const [checked, setChecked] = [false];

  // const [products, setProducts] = useState(data);
  const { products, items, total } = useGlobalContext();

  const savedForLater = products.filter((cartItems) => cartItems.inCart);

  // let subtotal = total * 0.025;

  const subtotal = Math.round(total * 0.025);
  return (
    <>
      <div className="page-title">
        <h2>checkout</h2>
      </div>
      <section className=" sm:flex justify-between //checkout-section">
        <div className="w-[100%] sm:w-[68%] user-details">
          <div className="delivery-details">
            <div className="details-title">
              <div className="details-heading">
                <input type="radio" checked /> <h4> 1. DELIVERY DETAILS</h4>
              </div>
              <Link>
                {" "}
                Change address <FaChevronRight />{" "}
              </Link>
            </div>
            <hr />

            <div className="user-details">
              <h6>John Doe</h6>
              <p className="user-address">No 300 Oron Road, Uyo, Akwa Ibom</p>
              <p className="user-phone-number">08082546242</p>
            </div>
            <div className="extra-details">
              <input
                type="checkbox"
                className="text-[12px] checkbox"
                id="checkbox"
              />{" "}
              <label htmlFor="checkbox">
                Check this box if you have any further instruction regarding
                this order.
              </label>{" "}
              <br />
              <div className="extra-instruction">
                <p>
                  <b>Delivery instruction</b>
                </p>
                <input
                  type="text"
                  id="extraInstruction"
                  className=""
                  placeholder="If you want to add comment concerning your order, please type it here"
                />
              </div>
            </div>
          </div>

          <div className="payment-options">
            <h4 className="text-left">2. PAYMENT OPTIONS</h4>
            <hr />

            <div className="options">
              <input type="radio" name="payOption" id="payNow" checked />{" "}
              <label htmlFor="payNow">Pay Now</label>
              <div className="paynow-option">
                <p>Pay instantly and secure with your credit/debit card</p>
              </div>
              <br />
              <input type="radio" name="payOption" id="payOnDelivery" />{" "}
              <label htmlFor="payOnDelivery">Pay on Delivery</label>
              <div className="payondelivery-option">
                <p>
                  Please be aware that you must first pay before opening your
                  package. Only defective, damaged, or missing parts items may
                  be returned once the seal has been broken{" "}
                </p>
              </div>
            </div>
            <div className=" promotions">
              <p>
                <b>Promotions</b>
              </p>
              <p>x LOYALDAY</p>
              <div className="w-[100%] sm:w-[60%] coupon-input">
                <input
                  type="text"
                  placeholder="Enter Coupon"
                  className="input-coupon  sm:w-[70%]"
                />
                <input
                  type="submit"
                  className="sm:w-[30%] apply-coupon"
                  value="Apply"
                />
              </div>
            </div>
            <div className="place-order">
              <p>
                By clicking this button, you agree with our{" "}
                <Link to={"/policy"}>terms and conditions</Link>
              </p>
              <button className="order-btn">Place Order</button>
            </div>
          </div>
        </div>

        {/* 
              order 
              summary 
              on the 
              right side  */}
        <div className="w-[100%] sm:w-[30%] cart-summary">
          <div className="order-details">
            <h3>Order Details</h3>
            <Link to={"/mycart"}>
              Modify Cart <FaChevronRight />
            </Link>
          </div>
          <hr />
          <div className="order-items">
            <Checkout savedForLater={savedForLater} />
          </div>
          <hr />
          <div className="subtotal">
            <p>
              <b>Sub Total</b>
            </p>
            <h5>N{total}</h5>
          </div>
          <div className="delivery-charges">
            <p className="delivery-charges">Delivery Charges</p>

            <p className="delivery-charges-details">N{subtotal}</p>
          </div>
          <div className="subtotal">
            <h2 className="text-xl">
              <b> Total: {subtotal + total }</b>
            </h2>
            <h5></h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutLayout;
