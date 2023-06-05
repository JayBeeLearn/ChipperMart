import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function OrderHistory() {
  return (
    <>
      

      <div className="order-history">
        <Outlet />
      </div>
    </>
  );
}

export default OrderHistory;
