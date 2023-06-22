import React from "react";
import "../styling/layout.css";

import Android from "../images/playstore.png";
import Apple from "../images/applestore.png";
import LogoWhite from "../images/logo-white.png";
// import App from "../App";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="bg-deep_blue div_padding py-4 //top-footer">
          <div className="w-[100%] text-white px-6  sm:font-bold sm:flex justify-between sm:text-xl //downloads">
            <h3 className="text-[18px] font-semibold sm:text-lg  text-left">
              Download Our App for A Better Experience
            </h3>
            <div className="flex justify-between w-[70%] sm:w-[30%] //images">
              <div className="w-[45%] //image">
                <img src={Android} alt="" className="w-[100%] object-contain" />
              </div>
              <div className="w-[45%] //image">
                <img src={Apple} alt="" className="w-[100%] object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary_blue  //bottom-footer text-white">
          <div className="flex flex-col-reverse px-6 sm:flex py-4  //footer-content">
            <div className="w-[100%] sm:w-[20%] mx-0 sm:mr-4 xs:my-8 sm:my-0 //footer-left ">
              <div className="w-[50%] sm:w-[90%] //image">
                <img src={LogoWhite} alt="" className="w-[100%]" />
              </div>

              <p className="leading-loose">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                nam officiis numquam adipisci a hic sunt quibusdam odit, tempora
                ipsa voluptatibus voluptatum voluptatem ea consequuntur!
              </p>

              <hr className="border-b-[1px] border-white" />

              <div className=" flex justify-between w-3/5 mx-auto mt-2 //socials">
                <Link>
                  <FaFacebook className="text-white" />
                </Link>

                <Link>
                  <FaTwitter className="text-white" />
                </Link>
                <Link>
                  <FaLinkedin className="text-white" />
                </Link>

                <Link>
                  <FaWhatsapp className="text-white" />
                </Link>
              </div>
            </div>
            <div className="my-4 sm:my-0 sm:w-[60%] flex flex-row justify-between //footer-center">
              <ul className="block w-[24%] ">
                <h4 className="font-bold text-sm text-left md:text-lg ">
                  My Account
                </h4>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"auth/login"}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"auth/signup"}
                  >
                    Create Account
                  </Link>
                </li>
              </ul>

              <ul className="block w-[24%] ">
                <h4 className="font-bold text-sm text-left md:text-lg ">
                  ClipperMart
                </h4>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"/about-us"}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"/faq"}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>

              <ul className="block w-[24%] ">
                <h4 className="font-bold text-sm text-left md:text-lg ">
                  Customer Service
                </h4>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"/contact-us"}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>Wishlist</li>
              </ul>

              <ul className="block w-[24%] ">
                <h4 className="font-bold text-sm text-left md:text-lg ">
                  Policy
                </h4>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"/policy/privacy-policy"}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"/policy/return-policy"}
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"/policy/terms-and-conditions"}
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[12px] py-2 font-normal sm:text-sm md:text-base"
                    to={"/policy/cookies-policy"}
                  >
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[100%] sm:w-[20%] //footer-right">
              <h4 className="font-bold text-sm text-left md:text-lg ">
                Stay Connected
              </h4>
              <p className="text-sm mt-8 mb-4">Suscribe to our newsletter and get our latest offers.</p>

              <div className="box">
                <div className="flex justify-between border-white rounded-[15px] border overflow-hidden //input-box">
                  <input type="text" placeholder="Enter email" className="border-none bg-transparent w-3/5 px-2" />
                  <span id="suscribe" className="bg-primary_orange text-sm rounded-[15px] py-[7px] px-[10px]">Suscribe</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white text-center pb-4 //copyright"> &copy; Copyright 2023 chippermart.store</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
