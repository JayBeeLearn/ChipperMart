import React from 'react'
import { Link, useParams } from 'react-router-dom'

function OrderItem({ image, id, order_no, payment_method, total, date }) {
  
  
  // console.log(order_id);
  return (
    <>
      <div className="order-item">
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
            <b>Payment Method</b> {payment_method}
          </p>
          <p>
            <b>Date:</b> {date}
          </p>
        </div>
        <div className="see-details">
          <Link to={`/profile/order-history/order-details/${id}`} key={id} > See Details</Link>
        </div>
      </div>
    </>
  );
}

export default OrderItem