import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import orders from "../../assets/Orders";
import OrderItem from "./OrderItem";

function CloseOrders() {

  const [order, setOrder] = useState(orders)

  const cancelOrder = order.filter((item) => {
    return !item.status
  })

  console.log(cancelOrder);
  return (
    <>
      <h3 className="pro_sec_title"> My Orders</h3>
      <hr />

      <div className="order-nav">
        <Link className="nb-btn" to={"/profile/order-history"}>
          Open Orders
        </Link>
        <NavLink
          to={"/profile/order-history/close-orders"}
          className={"nb-btn"}
        >
          {" "}
          Close Orders
        </NavLink>
      </div>

      <div className="close-order">
        {cancelOrder.map((order) => {
        return <OrderItem key={order.id} {...order} />
      })}
      </div>
    </>
  );
}

export default CloseOrders;
