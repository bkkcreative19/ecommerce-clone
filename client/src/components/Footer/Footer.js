import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left footer-item">
          <h3>Oak + Fort</h3>
          <ul>
            <li>About Us</li>
            <li>Locations</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-mid footer-item">
          <h3>Help</h3>
          <ul>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Returns + Exchange</li>
            <li>Shipping + Pickup</li>
            <li>Home Trade Program</li>
            <li>Store Pickup</li>
          </ul>
        </div>
        <div className="footer-right footer-item">
          <h3>Connect</h3>
          <ul>
            <li>@OAKANDFORTMAN</li>
            <li>@OAKANDFORTHOME</li>
            <li>@OAKANDFORT</li>
            <li>BLOG</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
