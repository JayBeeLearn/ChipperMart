import React, { useContext, useEffect, useRef, useState } from "react";
import "./content.css";

import data from "./assets/Data";
import Item from "./Item";

import { SearchContext } from "./App";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// const allCategories = ['all', ...new Set(data.map((item) => item.subcategory))]

// console.log(allCategories);

function Content({ test, filterProduct, categoryItems }) {
  const [products, setProducts] = useState(data);

  categoryItems = [
    "all",
    ...new Set(filterProduct.map((item) => item.subcategory)),
  ];

  const { setFilterOptions, setCategoryProducts } = useContext(SearchContext)

  // const category = filterProduct[0].category

  // console.log(category);
  
  useEffect(() => {
    setFilterOptions(categoryItems)
    setCategoryProducts(filterProduct)
  }, [])

  // console.log(categoryItems);
  //  console.log(allCategories);
  //  console.log(filterProduct);
  const newProduct = filterProduct;
  // console.log(newProduct)

  const rowRef = useRef(null);

  useEffect(() => {
    const rowWidth = rowRef.current.getBoundingClientRect();

    // console.log(rowWidth);
  }, []);
  return (
    <div className="row" ref={rowRef}>
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
  );
}

export default Content;
