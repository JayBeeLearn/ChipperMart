import React from 'react'

function CheckOutItem({ id, name, image, price }) {
    
    console.log(id, name);
  return (
      <>
          <div className="checkout-item">
              <div className="checkout-image">
                  <img src={image} alt="" />
              </div>

              <div className="checkout-details">
                  <p><b>{name}</b></p>
                  <h6>N{price}</h6>
                  <p>Quantity: 1</p>
              </div>
      </div>
      </>
  )
}

export default CheckOutItem