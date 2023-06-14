import React from 'react'

import AboutImage from '../images/AboutUs.png'
import KFCLogo from '../images/KFCLogo.png'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function AboutUs() {
  return (
    <>
      <section className="about-us">
        <div className="welcome">
          <h1>Welcome to ChipperMart!</h1>
        </div>

        <div className="about-section">
          <div className="about-desc">
            <h2 className="text-left">About Us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam est suscipit architecto animi? Sed quisquam earum quas,
              pariatur assumenda molestiae odit excepturi eius sapiente, harum
              et nostrum. Sint, iste neque.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              blanditiis tenetur ipsa accusantium voluptate dolorum ab, expedita
              repellat. Eum voluptatibus corporis optio impedit ullam blanditiis
              enim quasi dolor magnam, nihil et. Libero vel iure consectetur
              atque voluptatum. Ratione, accusamus eum. Amet laborum beatae
              nostrum incidunt assumenda odit, nemo consequatur, possimus,{" "}
            </p>
          </div>

          <div className="about-image">
            <img src={AboutImage} alt="About us picture" />
          </div>
        </div>

        <div className="goals-mission">
          <div className="goals">
            <h2 className="text-left">Our Goals</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              assumenda, distinctio voluptatibus illum molestias esse corrupti
              veritatis! Fugit, in nisi!
            </p>
          </div>

          <div className="mission">
            <h2 className="text-left">Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe
              quidem voluptatem, omnis facilis voluptatibus id architecto,
              eveniet ipsa impedit fugit at?
            </p>
          </div>
        </div>

        <div className="partners">
          <h2>Our Partners</h2>
          <div className="logos">
            <div className="partner-logo">
              <img src={KFCLogo} alt="partner logo" />
            </div>

            <div className="partner-logo">
              <img src={KFCLogo} alt="partner logo" />
            </div>

            <div className="partner-logo">
              <img src={KFCLogo} alt="partner logo" />
            </div>
            <div className="partner-logo">
              <img src={KFCLogo} alt="partner logo" />
            </div>
            <div className="partner-logo">
              <img src={KFCLogo} alt="partner logo" />
            </div>
          </div>
        </div>

        <div className="people-comment">
          <h2>What People Are Saying About Us</h2>
          <p className="text-center">
            A shopping experience people love to talk about
          </p>

          <div className="comments">
            <div className="comment">
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
                rerum quisquam omnis tenetur sunt.
              </p>

              <FaQuoteRight />

              <h6 className="text-center">Moses Peter</h6>
              <p className="text-center">Deputy Manager</p>
            </div>

            <div className="comment">
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
                rerum quisquam omnis tenetur sunt.
              </p>

              <FaQuoteRight />

              <h6 className="text-center">Moses Peter</h6>
              <p className="text-center">Deputy Manager</p>
            </div>

            <div className="comment">
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
                rerum quisquam omnis tenetur sunt.
              </p>

              <FaQuoteRight />

              <h6 className="text-center">Moses Peter</h6>
              <p className="text-center">Deputy Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs