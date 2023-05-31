import React from "react";
import "../styling/layout.css";

import Android from "../images/playstore.png";
import Apple from "../images/applestore.png";
import LogoWhite from "../images/logo-white.png";
// import App from "../App";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="top-footer">
          <div className="downloads">
            <h3>Download Our App for A Better Experience</h3>
            <div className="images">
              <div className="image">
                <img src={Android} alt="" />
              </div>
              <div className="image">
                <img src={Apple} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="image">
                <img src={LogoWhite} alt="" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                nam officiis numquam adipisci a hic sunt quibusdam odit, tempora
                ipsa voluptatibus voluptatum voluptatem ea consequuntur!
              </p>

              <hr className="whiteline" />

              <div className="socials">
                <a href="">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="footer-center">
              <ul>
                <h4>My Account</h4>
                <li>
                  <Link to={"auth/login"}>Sign In</Link>
                </li>
                <li>
                  <Link to={"auth/signup"}>Create Account</Link>
                </li>
              </ul>

              <ul>
                <h4>ClipperMart</h4>
                <li>
                  <Link to={"/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link to={'/faq'}>FAQ</Link>
                </li>
              </ul>

              <ul>
                <h4>Customer Service</h4>
                <li><Link to={'/contact-us'}>Contact Us</Link></li>
                <li>Wishlist</li>
              </ul>

              <ul>
                <h4>Policy</h4>
                <li>
                  <Link to={"/policy/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/policy/return-policy"}>Return Policy</Link>
                </li>
                <li>
                  <Link to={"/policy/terms-and-conditions"}>
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to={"/policy/cookies-policy"}>Cookies Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-right">
              <h4>Stay Connected</h4>
              <p>Suscribe to our newsletter and get our latest offers.</p>

              <div className="box">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" />
                  <span id="suscribe">Suscribe</span>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright"> &copy; Copyright 2023 chippermart.store</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
