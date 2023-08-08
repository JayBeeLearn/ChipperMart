import React from "react";
import '../styling/components.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function AddToCart({ id, inCart, hello }) {
  const {addToCart, } = useGlobalContext()
  return (
    <button
      to={"/mycart"}
      onClick={() => {
        addToCart(id)
      console.log(hello);
      }}
      className="btn bg-primary_orange w-full flex text-white align-middle //myCart "
    >
      {inCart ? ("Already in cart") : "Add to cart"} <FaShoppingCart />
    </button>
  );
}

export default AddToCart;
