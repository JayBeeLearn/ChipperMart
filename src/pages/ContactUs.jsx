import React from "react";

import ContactImage from "../images/contactus.png";
import {
  FaLocationArrow,
  FaMailBulk,
  FaMapPin,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";

// STYLIING IS IN CONTENT.CSS

function ContactUs() {
  return (
    <>
      <div className="page-title">
        <h2>contact us</h2>
      </div>

      <section className="contact-us">
        <div className="contact">
          <div className="contact-form">
            <h2 className="text-left">
              We Love to hear from you, <br /> Get in touch!{" "}
            </h2>

            <form action="">
              <div className="form-group">
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message ..."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="form-group">
                <button>Send Message</button>
              </div>
            </form>
          </div>

          <div className="contact-image">
            <img src={ContactImage} alt="" />
          </div>
        </div>

        <div className="contact-details">
          <div className="location">
            <FaMapPin />
            <p>
              No 300 Oron Rd, Suite 207, 2nd Floor, Peace Plaza, Uyo, Akwa Ibom
              State
            </p>
          </div>

          <div className="email">
            <FaMailBulk />
            <p>
              <a href="mailto:chippermail@gmail.com">chippermail@gmail.com</a>
            </p>
          </div>

          <div className="phone">
            <FaPhone />
            <p>
              <a href="tel:+2349067872935">09067872935</a>
            </p>
            <p>
              <a href="tel:+2348066414797">08066414797</a>
            </p>
            <p>
              <a href="tel:+2347033282736">07033282736</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
