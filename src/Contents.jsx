import React, { useState } from "react";
import "./content.css";

import data from "./assets/Data";
import Item from "./Item";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// const allCategories = ['all', ...new Set(data.map((item) => item.subcategory))]

// console.log(allCategories);

function Content({test, filterProduct, categoryItems}) {
  const [products, setProducts] = useState(data);

    categoryItems = ["all",...new Set(filterProduct.map((item) => item.subcategory)),
   ];
  //  console.log(allCategories);
//  console.log(filterProduct);
  const newProduct = filterProduct
  // console.log(newProduct)
  return (
    <div>

      <div className="row">
        {/* First Item  */}


        {newProduct.map((product) => {
          // const newProduct = product.filter((prod, index) => {
          //   return prod.category == 'food'
            
          // })
          // console.log(product)
          return (
           
              <Item key={product.id} {...product} />
            // </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
