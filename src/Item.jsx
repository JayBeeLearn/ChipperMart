import React, { useState } from "react";
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
  wishlist,
}) {
  // console.log(newProduct)
  const [wishList, setWishList] =useState(wishlist)

  // console.log(wishList);
  // console.log(wishlist);
  return (
    <>
      <div className="col item bg-white rounded">
        <div className="wishlist">
          <button className="nb-btn btn-wishlist" onClick={() => {
            setWishList(!wishlist)
          }}>{<FaRegHeart />}</button>
        </div>
        {/* <Link to={id} key={id}> */}
       
        <div className="image">
           <Link to={`/product/${id.toString()}`} key={id}>
            <img src={image} alt={name} />
        </Link>
          </div>
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
