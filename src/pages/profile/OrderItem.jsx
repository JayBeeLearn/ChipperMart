import React from "react";
import { Link, useParams } from "react-router-dom";

function OrderItem({
  image,
  id,
  order_no,
  payment_method,
  total,
  date,
  status,
  cancelled,
}) {
  // console.log(order_id);
  return (
    <>
      <div className="order-item">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="info">
          {status && (
            <p>
              <b>Total:</b> {total}
            </p>
          )}
          <p>
            <b>Order No:</b> {order_no}
          </p>

          {status ? (
            <p>
              <b>Payment Method</b> {payment_method}
            </p>
          ) : (
            <p>
              <b>Cancelled:</b> {cancelled}
            </p>
          )}

          <p>
            <b>Date:</b> {date}
          </p>
        </div>
        {status && (
          <div className="see-details">
            <Link to={`/profile/order-history/order-details/${id}`} key={id}>
              {" "}
              See Details
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderItem;
