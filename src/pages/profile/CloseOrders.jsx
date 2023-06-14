import React from "react";
import { Link, NavLink } from "react-router-dom";

function CloseOrders() {
  return (
    <>
      <h3 className="text-left"> My Orders</h3>
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
    </>
  );
}

export default CloseOrders;
