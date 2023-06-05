import React from "react";
import { NavLink } from "react-router-dom";

function OrderHistory() {
  return (
    <>
      <h3 className="text-left"> My Orders</h3>
      <hr />

      <div className="order-nav">
        <NavLink to={'open-orders'}>Open Orders</NavLink>
        <NavLink to={'close-orders'}> Close Orders</NavLink>
      </div>

    </>
  );
}

export default OrderHistory;
