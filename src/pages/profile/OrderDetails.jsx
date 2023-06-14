import React, { useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import orders from "../../assets/Orders";
import address from "../../assets/Address";

function OrderDetails() {
  const { order_id } = useParams();

  const [order, setOrder] = useState(orders);
  const [userAddress, setUserAddress] = useState(address);

  const viewedOrder = order.filter((item) => {
    return item.id === parseInt(order_id);
  });

  const {
    id,
    total,
    order_no,
    payment_method,
    quantity,
    delivery_fee,
    date,
    image,
  } = viewedOrder[0];

  const uAddress = userAddress.filter((item) => {
    return item.id === parseInt(order_id);
  });

  console.log(uAddress);

  const { user, location, contact } = uAddress[0];

  // console.log(order_id);
  // console.log(viewedOrder);

  return (
    <>
      <div className="order-detail">
        <div className="order-details-top">
          <p>
            <Link to={"/profile/order-history"}>
              <FaChevronCircleLeft />
            </Link>
          </p>
          <h2 className="text-left">Order Details</h2>
        </div>

        <hr />

        <div className="item-ordered">
          <div className="IO-top">
            <h6>Item Ordered</h6>

            <p className="order-status">Active</p>
          </div>

          <div className="detail-item">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="info">
              <p>
                <b>Total:</b> {total}
              </p>
              <p>
                <b>Order No:</b> {order_no}
              </p>
              <p>
                <b>Quantity:</b> {quantity}
              </p>
            </div>
            <div className="order-buttons">
              <Link className="btn btn-cancel" key={id}>
                {" "}
                Cancel Order
              </Link>

              <Link className="btn btn-track" key={id}>
                {" "}
                Track Order
              </Link>
            </div>
          </div>
        </div>

        <div className="order-information">
          <div className="IO-top">
            <h6>Order Information</h6>
          </div>
          <div className="order-info">
            <p>
              <b>Order Number:</b> {order_no}
            </p>
            <p>
              {" "}
              <b>Order Date:</b> {date}{" "}
            </p>
            <p>
              {" "}
              <b>Delivery Fee</b> N{delivery_fee}{" "}
            </p>
            <p>
              <b>Total Amount:</b> N{total * quantity + delivery_fee}{" "}
            </p>
          </div>
        </div>

        <div className="order-detail-bottom">
          <div className="payment-information">
            <div className="IO-top">
              <h6>Payment Information</h6>
            </div>
            <div className="order-info">
              <p>
                {" "}
                <b>Payment Method</b> {payment_method}{" "}
              </p>
              <p>
                {" "}
                <b>Payment Details</b>{" "}
                <span className="pay-details">
                  Items Total: N{total * quantity} Shipping Fee: N{delivery_fee}
                </span>{" "}
              </p>
              <p>
                <b>Total</b> <b>N{total * quantity + delivery_fee}</b>{" "}
              </p>
            </div>
          </div>

          <div className="delivery-information">
            <div className="IO-top">
              <h6>Delivery Information</h6>
            </div>
            <div className="order-info">
              <p>
                <b>{user}</b>
              </p>
              <p>
                <b>{location}</b>
              </p>
              <p>
                <b> {contact}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
