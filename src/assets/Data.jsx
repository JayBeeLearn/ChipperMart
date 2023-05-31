import React from "react";
import Spaghetti from "../images/products/spaghetti.png";
import Carrot from "../images/products/carrot.png";
import Malt from "../images/products/malt.png";
import OkroSoup from "../images/products/okro soup.png";
import BeansPorridge from "../images/products/beans porridge.png";
import AfangSoup from "../images/products/afang soup.jpg";
import FufuSoup from "../images/products/fufu soup.jpg";
import Lettuce from "../images/products/lettuce.png";
import pepper from "../images/products/pepper.jpg";
import onions from "../images/products/onions.png";
import semovita from "../images/products/semovita.png";
import wines from "../images/products/wines.png";
import baby1 from "../images/products/baby1.png";
import malt from "../images/products/malt.png";
import drink from "../images/products/drink.png";
import rice from "../images/products/rice.png";
import avocado from "../images/products/avocado.jpg";
import scent from "../images/products/scent.jpg";
import bigbull from "../images/products/bigbull.jpg";
import indomie from "../images/products/indomie.jpg";
import peanut from "../images/products/peanut.jpg";
import garri from "../images/products/garri.jpg";
import tomato from "../images/products/tomato.jpg";
import plantain from "../images/products/plantain.jpg";
import sunlight from "../images/products/sunlight.jpg";
import soap from "../images/products/soap.jpg";
import cream from "../images/products/cream.jpg";
import dettol from "../images/products/dettol.jpg";
import sunlightPack from "../images/products/sunlight pack.jpg";
import biscuit from "../images/products/biscuit.jpg";
import baby2 from "../images/products/baby2.jpg";
import baby3 from "../images/products/baby3.jpg";
import baby4 from "../images/products/baby4.jpg";
import Maltina from "../images/products/Maltina.jpg";
import babies from "../images/products/babies.jpg";
import cokePack from "../images/products/coke pack.jpg";
import freshTomatoes from "../images/products/fresh tomatoes.png";

const data = [
  {
    id: 1,
    name: "Spaghetti",
    category: "food",
    subcategory: "hotdeals",
    price: "4500",
    discount: "5000",
    image: Spaghetti,
  },
  {
    id: 2,
    name: "Carrot",
    category: "food",
    subcategory: "hotdeals",
    price: "2000",
    discount: "2650",
    image: Carrot,
  },
  {
    id: 3,
    name: "Malt",
    category: "Drink",
    subcategory: "hotdeals",
    price: "1800",
    discount: "2300",
    image: Malt,
  },
  {
    id: 4,
    name: "Okro Soup",
    category: "food",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: OkroSoup,
  },
  {
    id: 5,
    name: "Beans Porridge",
    category: "food",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: BeansPorridge,
  },

  {
    id: 6,
    name: "Afang Soup",
    category: "food",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: AfangSoup,
  },
  {
    id: 7,
    name: "Fufu and Soup",
    category: "food",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: FufuSoup,
  },

  {
    id: 8,
    name: "Lettuce",
    category: "vegetables",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: Lettuce,
  },

  {
    id: 9,
    name: "Pepper",
    category: "vegetables",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: pepper,
  },

  {
    id: 10,
    name: "Onions",
    category: "vegetables",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: onions,
  },

  {
    id: 11,
    name: "Avocado ",
    category: "vegetables",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: avocado,
  },

  {
    id: 12,
    name: "Scent Leaf",
    category: "vegetables",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: scent,
  },

  {
    id: 13,
    name: "Rice",
    category: "household",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: rice,
  },

  {
    id: 14,
    name: "Semovita",
    category: "household",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: semovita,
  },

  {
    id: 14,
    name: "Big Bull",
    category: "household",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: bigbull,
  },

  {
    id: 15,
    name: "Indomie",
    category: "household",
    subcategory: "hotdeals",
    price: "1750",
    discount: "2000",
    image: indomie,
  },

  {
    id: 16,
    name: "Basket of Tomatoes",
    category: "household",
    subcategory: "Subcategory One",
    price: "1750",
    discount: "2000",
    image: freshTomatoes,
  },

  {
    id: 17,
    name: "Peanut",
    category: "snacks",
    subcategory: "Subcategory One",
    price: "1750",
    discount: "2000",
    image: peanut,
  },

  {
    id: 18,
    name: "Biscuit",
    category: "snacks",
    subcategory: "Subcategory One",
    price: "1750",
    discount: "2000",
    image: biscuit,
  },

  {
    id: 19,
    name: "Garri",
    category: "snacks",
    subcategory: "Subcategory One",
    price: "1750",
    discount: "2000",
    image: garri,
  },

  {
    id: 20,
    name: "Tomato",
    category: "snacks",
    subcategory: "Subcategory One",
    price: "1750",
    discount: "2000",
    image: tomato,
  },

  {
    id: 21,
    name: "Plantain",
    category: "snacks",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: plantain,
  },

  {
    id: 22,
    name: "Malt",
    category: "drinks",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: malt,
  },

  {
    id: 23,
    name: "Wines",
    category: "drinks",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: wines,
  },

  {
    id: 24,
    name: "Coke",
    category: "drinks",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: cokePack,
  },

  {
    id: 25,
    name: "Drink",
    category: "drinks",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: drink,
  },

  {
    id: 26,
    name: "Maltina",
    category: "drinks",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: Maltina,
  },

  {
    id: 27,
    name: "Sunlight",
    category: "toiletries",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: sunlight,
  },

  {
    id: 28,
    name: "Soap",
    category: "toiletries",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: soap,
  },

  {
    id: 29,
    name: "cream",
    category: "toiletries",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: cream,
  },

  {
    id: 30,
    name: "dettol",
    category: "toiletries",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: dettol,
  },

  {
    id: 31,
    name: "Sunlight Pack",
    category: "toiletries",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: sunlightPack,
  },

  {
    id: 32,
    name: "babies",
    category: "babies",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: babies,
  },

  {
    id: 33,
    name: "baby1",
    category: "babies",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: baby1,
  },

  {
    id: 34,
    name: "baby2",
    category: "babies",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: baby2,
  },

  {
    id: 35,
    name: "baby3",
    category: "babies",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: baby3,
  },

  {
    id: 35,
    name: "baby4",
    category: "babies",
    subcategory: "Another Subcategory",
    price: "1750",
    discount: "2000",
    image: baby4,
  },

  //   DUPLICATE DATA FROM HERE JUST TO PROPERLY BE ABLE TO DISPLAY EVERYTHING AS NEEDED IN THE FRONT END SIDE OF THE WEB PROJECT - LONG COMMENT WILL HELP INDICATE IN OVERVIEW
  {
    id: 36,
    name: "Malt",
    category: "Drink",
    subcategory: "A Sub Cate.",
    price: "1800",
    discount: "2300",
    image: Malt,
  },
  {
    id: 37,
    name: "Okro Soup",
    category: "food",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: OkroSoup,
  },
  {
    id: 38,
    name: "Beans Porridge",
    category: "food",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: BeansPorridge,
  },

  {
    id: 39,
    name: "Afang Soup",
    category: "food",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: AfangSoup,
  },
  {
    id: 40,
    name: "Fufu and Soup",
    category: "food",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: FufuSoup,
  },
  {
    id: 41,
    name: "Lettuce",
    category: "vegetables",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: Lettuce,
  },

  {
    id: 42,
    name: "Pepper",
    category: "vegetables",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: pepper,
  },

  {
    id: 43,
    name: "Onions",
    category: "vegetables",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: onions,
  },

  {
    id: 44,
    name: "Avocado ",
    category: "vegetables",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: avocado,
  },

  {
    id: 45,
    name: "Scent Leaf",
    category: "vegetables",
    subcategory: "A Sub Cate.",
    price: "1750",
    discount: "2000",
    image: scent,
  },

  {
    id: 46,
    name: "Rice",
    category: "household",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: rice,
  },

  {
    id: 47,
    name: "Semovita",
    category: "household",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: semovita,
  },

  {
    id: 48,
    name: "Big Bull",
    category: "household",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: bigbull,
  },

  {
    id: 49,
    name: "Indomie",
    category: "household",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: indomie,
  },

  {
    id: 50,
    name: "Rice",
    category: "saved",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: freshTomatoes,
  },

  {
    id: 51,
    name: "Peanut",
    category: "saved",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: peanut,
  },

  {
    id: 52,
    name: "Biscuit",
    category: "snacks",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: biscuit,
  },

  {
    id: 54,
    name: "Garri",
    category: "snacks",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: garri,
  },

  {
    id: 55,
    name: "Tomato",
    category: "cart",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: tomato,
  },

  {
    id: 56,
    name: "Plantain",
    category: "snacks",
    subcategory: "Subcategory Item",
    price: "1750",
    discount: "2000",
    image: plantain,
  },

  {
    id: 57,
    name: "Malt",
    category: "drinks",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: malt,
  },

  {
    id: 58,
    name: "Wines",
    category: "drinks",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: wines,
  },

  {
    id: 59,
    name: "Coke",
    category: "drinks",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: cokePack,
  },

  {
    id: 60,
    name: "Drink",
    category: "drinks",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: drink,
  },

  {
    id: 61,
    name: "Maltina",
    category: "cart",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: Maltina,
  },

  {
    id: 62,
    name: "Sunlight",
    category: "cart",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: sunlight,
  },

  {
    id: 62,
    name: "Soap",
    category: "toiletries",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: soap,
  },

  {
    id: 64,
    name: "cream",
    category: "toiletries",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: cream,
  },

  {
    id: 65,
    name: "dettol",
    category: "toiletries",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: dettol,
  },

  {
    id: 66,
    name: "Sunlight Pack",
    category: "cart",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: sunlightPack,
  },

  {
    id: 67,
    name: "babies",
    category: "cart",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: babies,
  },

  {
    id: 68,
    name: "baby1",
    category: "babies",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: baby1,
  },

  {
    id: 69,
    name: "baby2",
    category: "babies",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: baby2,
  },

  {
    id: 70,
    name: "baby3",
    category: "babies",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: baby3,
  },

  {
    id: 71,
    name: "baby4",
    category: "babies",
    subcategory: "Last Subcategory",
    price: "1750",
    discount: "2000",
    image: baby4,
  },
];

export default data;
