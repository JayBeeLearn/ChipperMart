import React, { useState } from "react";
import "./styling/ContentLayout.css";
import AddToCart from "./components/AddToCart";
import { Link } from "react-router-dom";

import { FaAccessibleIcon, FaRegHeart } from "react-icons/fa";
import { useGlobalContext } from "./context";
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
  inCart
}) {
  // console.log(newProduct)
  // const [wishList, setWishList] = useState(wishlist)
  const { addToWishlist } = useGlobalContext();

  // console.log(wishList);
  // console.log(wishlist);
  return (
    <>
      <div className="col item bg-white rounded">
        <div className="wishlist">
          <button
            className="nb-btn btn-wishlist"
            onClick={() => addToWishlist(id)}
          >
            <FaRegHeart className={wishlist ? "text-primary_orange" : ""} />
          </button>
        </div>
        {/* <Link to={id} key={id}> */}

        <div className="image w-[100%] h-[50%] my-4 mx-auto flex justify-center">
          <Link to={`/product/${id.toString()}`} key={id}>
            <img
              src={image}
              alt={name}
              className=" w-full self-center object-contain"
            />
          </Link>
        </div>
        <div className="info">
          <h6 className="capitalize font-bold productName ">{name} </h6>
          <h5 className="price">
            {price} <small className="discount">{discount}</small>
          </h5>
        </div>
        <div className="add-cart">
          <AddToCart id={id} inCart={inCart} />
        </div>
      </div>
    </>
  );
}

export default Item;
