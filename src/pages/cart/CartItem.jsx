import React, { useState } from "react";
import { useGlobalContext } from "../../context";

function CartItem({
  id,
  name,
  category,
  subcategory,
  price,
  discount,
  image,
  amount,
}) {
  const {increase, decrease} = useGlobalContext()
  return (
    <>
      <div className="flex justify-between items-center bg-white my-4 p-2 sm:p-4 rounded-md //cart-item">
        <div className=" w-[12%] h-full flex justify-between items-center //cart-product-image">
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-[35%] flex justify-between items-center cart-product-name">
          <div className="text-center text-sm //name">
            <h3> {name}</h3>
            <small>In stock</small>
          </div>
          <div className="text-sm flex  sm:qtn-btns">
            <button className="py-[3px] px-[7px] qtn-btn" onClick={() => {decrease(id)}}>
              -
            </button>
            <span className="py-[3px] px-[10px] quantity">{amount} </span>
            <button className="py-[3px] px-[7px] qtn-btn" onClick={() => {increase(id)}}>
              +
            </button>
          </div>
        </div>

        <div className="text-sm //cart-item-amount">
          <h4>{amount * price}</h4>
          <p>
            N{price} x {amount} {amount > 1 ? "items" : "item"}
          </p>
        </div>
        <div className="text-[12px] p-0 flex flex-col justify-end items-end  //item-control-btns">
          <button className="bg-transparent p-0">Remove item</button>
          <button className="bg-transparent p-0">Save for later</button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
