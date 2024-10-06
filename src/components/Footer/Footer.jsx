import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img className="h-logo" src="./logo3.png" alt="" width={150} />
          <span className="secondaryText">
            Our vision is to create the perfect <br />
            place for everyone to call HOME.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">
            Suman Towers, Office No - 333, Moshi Pune, 412105
          </span>
          <div className="flexCenter f-menu">
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
