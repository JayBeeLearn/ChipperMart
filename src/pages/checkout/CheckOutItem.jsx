import React from 'react'

function CheckOutItem({ id, name, image, price, amount,  }) {
    
    // console.log(id, name);
  return (
    <>
      <div className="checkout-item">
        <div className="checkout-image">
          <img src={image} alt="" />
        </div>

        <div className="checkout-details">
          <p>
            <b>{name}</b>
          </p>
          <h6>
            N{price * amount} {amount > 1 && <small>N{price} for 1</small>}
          </h6>
          <p>Quantity: {amount}</p>
        </div>
      </div>
    </>
  );
}

export default CheckOutItem