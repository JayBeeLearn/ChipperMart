import React from "react";
import Spaghetti from "../images/products/spaghetti.png";
import Carrot from "../images/products/carrot.png";
import Malt from "../images/products/malt.png";
import OkroSoup from "../images/products/okro soup.png";
import BeansPorridge from "../images/products/beans porridge.png";
import AfangSoup from "../images/products/afang soup.jpg";
import FufuSoup from "../images/products/fufu soup.jpg";

const orders = [
  {
    id: 1,
    total: 15000,
    order_no: 100,
    payment_method: "Payment on collection",
    date: "19th February 2023",
    image: Spaghetti,
  },

  {
    id: 2,
    total: 25000,
    order_no: 110,
    payment_method: "Payment on collection",
    date: "10th February 2023",
    image: Malt,
  },

  {
    id: 3,
    total: 50000,
    order_no: 215,
    payment_method: "Online Payment",
    date: "1st March 2023",
    image: Carrot,
  },

  {
    id: 4,
    total: 5000,
    order_no: 170,
    payment_method: "Payment on collection",
    date: "15th February 2023",
    image: OkroSoup,
  },

  {
    id: 5,
    total: 1000,
    order_no: 104,
    payment_method: "Payment on collection",
    date: "11th February 2023",
    image: BeansPorridge,
  },

  {
    id: 6,
    total: 15000,
    order_no: 105,
    payment_method: "Payment on collection",
    date: "10th February 2023",
    image: AfangSoup,
  },

  {
    id: 7,
    total: 17000000,
    order_no: 117,
    payment_method: "Payment on collection",
    date: "17th July 2023",
    image: FufuSoup,
  },
];

export default orders;
