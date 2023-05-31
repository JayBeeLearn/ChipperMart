import React, { useState } from "react";
import "../../styling/components.css";

import data from "../../assets/Data";
import CartItem from "./CartItem";

function Cart({ filterProducts }) {
  console.log(filterProducts);
  // const cartProducts = filterProducts;

  return (
    <>
      {filterProducts.map((cartItem) => {
        // console.log(cartItem);
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    
    </>
  );
}

export default Cart;
