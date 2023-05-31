import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import data from "../assets/Data";

// import "../styling/ProductLayout";

import '../styling/ProductLayout.css'

import Content from "../Contents";

function ProductLayout() {
  const [products, setProducts] = useState(data);

  const filterProduct = products.filter((product) => 
      product.category == "food").slice(0, 4);
    
    
  return (
    <>
      <Outlet />

      <div className="similar">
        <div className="similar-top">
          <h2>Similar items you may like</h2>
          <Link>
            See all items <FaChevronRight />
          </Link>
        </div>

        <div className="homepage">
          <Content filterProduct={filterProduct} />
        </div>
      </div>
    </>
  );
}

export default ProductLayout;
