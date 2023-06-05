import React, { useState } from "react";

function CartItem({ id, name, category, subcategory, price, discount, image }) {
  const [quantity, setQuantity] = useState(100);
  return (
    <>
      <div className="cart-item">
        <div className="cart-product-image">
          <img src={image} alt="" />
        </div>
        <div className="cart-product-name">
          <h3> {name}</h3>
          <small>In stock</small>
        </div>
        <div className="qtn-btns">
          <button
            className="qtn-btn"
            onClick={() => {
              if (quantity <= 1) {
                setQuantity(1);
              } else {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="quantity">{quantity} </span>
          <button
            className="qtn-btn"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
              <div className="cart-item-amount">
                  <h4>{quantity * price}</h4>
                  <p>N{price} x {quantity} {quantity > 1? 'items': 'item'}</p>
        </div>
        <div className="item-control-btns">
          <button>Remove item</button>
          <button>Save for later</button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
