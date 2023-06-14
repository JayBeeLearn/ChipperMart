import React, { useState } from 'react'
import data from '../../assets/Data'
import Item from '../../Item'

function SavedItems() {

  const [products, setProducts] = useState(data)

  const wishList = products.filter((product) => {
    return product.wishlist
  })

  console.log(wishList);
  
  return (
    <>
      <div className="saved-items">
        <div className="category-content">
          <div className="row">
            {wishList.map((product) => {
              return <Item key={product.id} {...product} />
            })}
          </div>
        </div>
    </div>
    </>
  )
}

export default SavedItems