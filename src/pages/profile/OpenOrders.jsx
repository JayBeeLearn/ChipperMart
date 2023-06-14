import React, { useState } from "react";
import orders from "../../assets/Orders";

import OrderItem from "./OrderItem";
import { NavLink } from "react-router-dom";

function OpenOrders() {
  const [productOrders, setProductOrders] = useState(orders);

  const openOrders = productOrders.filter((item) => {
    return item.status
  })
  // console.log(productOrders);
  return (
    <>
      <h3 className="text-left"> My Orders</h3>
      <hr />

      <div className="order-nav">
        <NavLink to={"/profile/order-history"}>Open Orders</NavLink>
        <NavLink to={"/profile/order-history/close-orders"} className={'nb-btn'}>
          {" "}
          Close Orders
        </NavLink>
      </div>
      {openOrders.map((order) => {
        return <OrderItem key={order.id} {...order} />;
      })}
    </>
  );
}

export default OpenOrders;
