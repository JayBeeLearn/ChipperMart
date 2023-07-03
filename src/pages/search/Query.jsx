import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import data from '../../assets/Data'
import Item from '../../Item'

function Query() {
    const [products, setProducts] = useState(data)
    const { query } = useParams()

    const searchProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())||product.category.toLowerCase().includes(query)).sort((a, b)=> a.name.localeCompare(b.name))


    // console.log(searchProducts);
    console.log(query);

    // const product = searchProducts.map((product) => {
    //     return product.name
    // })
    return (
      <>
        <div className="container min-h-[50vh]">
           
          <h6 className="font-normal text-2xl">
            Your search for <span className="font-bold">{query}</span> returned{" "}
            {""}
            <span className="font-bold">{searchProducts.length}</span> {""}
            {searchProducts.length > 1 ? "items" : "item"}{" "}
          </h6>
          <h4 className="font-normal text-3xl my-4">
            {searchProducts.length < 1 &&
              "Try Again with a different search term"}
          </h4>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {searchProducts.map((product) => {
              return <Item key={product.id} {...product} />;
            })}
          </div>
        </div>
      </>
    );
}

export default Query