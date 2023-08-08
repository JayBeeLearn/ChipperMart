import React, { useState } from "react";
import data from "../assets/Data";
import { useGlobalContext } from "../context";
import { useLoaderData, useParams } from "react-router-dom";
// const { products } = useGlobalContext();

import "../styling/Product.css";
import {
  FaFacebook,
  FaGlobe,
  FaHeart,
  FaHome,
  FaLinkedin,
  FaMotorcycle,
  FaRecycle,
  FaRegHeart,
  FaShoppingCart,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import AddToCart from "../components/AddToCart";

function Product() {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  // console.log(id);
  const {products, increase, decrease} = useGlobalContext()

  const displayProduct = products.filter(
    (product) => product.id === parseInt(id)
  );

  const savedAmount = displayProduct[0].discount - displayProduct[0].price;

  const { name, image, price, category, discount, amount, inCart, wishlist } = displayProduct[0];
  const productID = displayProduct[0].id;

  return (
    <>
      <section className="product-layout">
        <div className="page-title">
          <h2>{name}</h2>
        </div>
        <div className="bg-white my-4 rounded-md flex justify-center items-center flex-col sm:flex sm:flex-row //product-view">
          <div className="flex flex-col justify-center items-center sm:w-1/2 //view-images">
            <div className="main-image">
              <img src={image} alt="" />
            </div>
            <div className="other-images">
              <div className="other-image image-1">
                <img src={image} alt="" />
              </div>
              <div className="other-image image-2">
                <img src={image} alt="" />
              </div>
              <div className="other-image image-3">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="view-details">
            <div className="details-top">
              <h3 className="product-name">{name}</h3>

              <div className="wishlist">
                <button className="nb-btn btn-wishlist">
                  <FaRegHeart />
                </button>
              </div>
            </div>
            <div className="product-code">
              <p>
                Product Code: <b>2DT457</b>{" "}
              </p>
            </div>
            <div className="price">
              <p>
                <span className="discount-price">N{price}</span>

                <span className="main-price">N{discount}</span>

                <span className="saved"> You have save {savedAmount}</span>
              </p>

              <div className="quantity-btns">
                <span>Quantity:</span>{" "}
                <button
                  className="qtn-btn"
                  onClick={() => {
                    decrease(productID)
                  }}
                >
                  -
                </button>
                <span className="quantity">{amount} </span>
                <button
                  className="qtn-btn"
                  onClick={() => {
                    increase(productID)
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="add-to-cart">
              <AddToCart
                id={productID}
                hello={productID}
                className="addToCart"
                onClick={() => {}}
              />
              {/* <button className="addToCart">
                Add to cart {<FaShoppingCart />}
              </button> */}
            </div>
            <hr />
            <div className="details-bottom">
              <div className="promotions">
                <h6>PROMOTIONS</h6>
                <p>
                  <FaGlobe /> Enjoy free delivery for your first five orders
                </p>
                <p>
                  <FaHome /> Transfer money to any bank for free
                </p>
              </div>
              <div className="share">
                <h6>SHARE WITH FRIENDS</h6>
                <p>
                  <FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaWhatsapp />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <div className="overview col">
            <h6>OVERVIEW</h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              assumenda animi rem molestiae doloremque incidunt.
            </p>
          </div>

          <div className="key-feature col">
            <h6>KEY FEATURES</h6>
            <hr />
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </div>

          <div className="delivery col">
            <h6>DELIVERY</h6>
            <hr />
            <p>
              <FaMotorcycle /> Free Delivery
            </p>
            <p>
              <FaRecycle /> Free return policy
            </p>
          </div>
        </div>
      </section>

      <div></div>
    </>
  );
}

export default Product;

export const productLoader = () => {
  return data;
};
