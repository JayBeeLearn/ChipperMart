import React, { useState } from 'react'
import data from '../../assets/Data'
import Item from '../../Item'
import { useGlobalContext } from '../../context'

function SavedItems() {

  // const [products, setProducts] = useState(data)
  const {products} = useGlobalContext()

  const wishList = products.filter((product) => {
    return product.wishlist
  })

  console.log(wishList);
  
  return (
    <>
      <div className="bg-transparent saved-items">
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