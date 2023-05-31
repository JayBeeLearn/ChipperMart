import React from "react";
import '../styling/components.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddToCart() {
  return <Link to={'/mycart'} className="myCart">Add to cart {<FaShoppingCart />}</Link>;
}

export default AddToCart;
