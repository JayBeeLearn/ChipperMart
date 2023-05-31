import React from "react";
import "./styling/ContentLayout.css";
import AddToCart from "./components/AddToCart";
import { Link } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import OkroSoup from "../src/images/products/okro soup.png";

import "./content.css";

function Item({
  id,
  name,
  category,
  subcategory,
  price,
  discount,
  image,
  newProduct,
}) {
  // console.log(newProduct)

  return (
    <>
      <div className="col item-1">
        <div className="wishlist">{<FaRegHeart />}</div>
        {/* <Link to={id} key={id}> */}
        <Link to={`/product/${id.toString()}`} key={id}>
          <div className="image">
            <img src={image} alt={name} />
          </div>
        </Link>
        <div className="info">
          <h6 className="productName">{name} </h6>
          <h5 className="price">
            {price} <small className="discount">{discount}</small>
          </h5>
        </div>
        <div className="add-cart">
          <AddToCart />
        </div>
      </div>
    </>
  );
}

export default Item;
