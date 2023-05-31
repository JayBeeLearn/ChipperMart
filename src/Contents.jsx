import React, { useState } from "react";
import "./content.css";
import { FaRegHeart } from "react-icons/fa";
import AddToCart from "./components/AddToCart";

import data from "./assets/Data";
import Item from "./Item";
import { Link } from "react-router-dom";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// const allCategories = ['all', ...new Set(data.map((item) => item.subcategory))]

// console.log(allCategories);

function Content({test, filterProduct, categoryItems}) {
  const [products, setProducts] = useState(data);

    categoryItems = ["all",...new Set(filterProduct.map((item) => item.subcategory)),
   ];
  //  console.log(allCategories);
//  console.log(filterProduct);
  const newProduct = filterProduct.slice(0, 4)
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
