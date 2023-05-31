import React, { useState } from "react";
import "./content.css";
import { FaRegHeart } from "react-icons/fa";
import OkroSoup from "./images/products/okro soup.png";
import Malt from "./images/products/malt.png";
import Detergent from "./images/products/detergent.png";
import Carrot from "./images/products/carrot.png";
import AddToCart from "./components/AddToCart";

import data from "./assets/Data";

function StaticContent() {
  const [product, setProduct] = useState(data);
  console.log(product);
  return (
    <div>
      <div className="hotdeal">
        <h3>Hot Deal</h3>
      </div>
      <div className="row">
        {/* First Item  */}
        <div className="col item-1">
          <div className="wishlist">{<FaRegHeart />}</div>
          <div className="image">
            <img src={OkroSoup} alt="okro soup" />
          </div>
          <div className="info">
            <h6 className="productName">Okro Soup</h6>
            <h5 className="price">
              2200 <small className="discount">2800</small>
            </h5>
          </div>
          <AddToCart />
        </div>
        {/* Second Item  */}
        <div className="col item-2">
          <div className="wishlist">{<FaRegHeart />}</div>
          <div className="image">
            <img src={Malt} alt="malt" />
          </div>
          <div className="info">
            <h6 className="productName">Malt</h6>
            <h5 className="price">
              180 <small className="discount">200</small>
            </h5>
          </div>
          <AddToCart />
        </div>

        {/* The Third Item  */}
        <div className="col item-3">
          <div className="wishlist">{<FaRegHeart />}</div>
          <div className="image">
            <img src={Detergent} alt="detergent" />
          </div>
          <div className="info">
            <h6 className="productName">Detergent</h6>
            <h5 className="price">
              250 <small className="discount">320</small>
            </h5>
          </div>
          <AddToCart />
        </div>

        {/* Last Item  */}
        <div className="col item-4">
          <div className="wishlist">{<FaRegHeart />}</div>
          <div className="image">
            <img src={Carrot} alt="carrot" />
          </div>
          <div className="info">
            <h6 className="productName">Carrot</h6>
            <h5 className="price">
              N2000 <small className="discount">2500</small>
            </h5>
          </div>
          <AddToCart />
        </div>
      </div>
    </div>
  );
}

export default StaticContent;
