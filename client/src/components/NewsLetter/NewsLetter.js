import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h3>Join Our Newsletter</h3>
        <input type="text" placeholder="ENTER YOUR EMAIL" />
        <button className="btn">Subscribe</button>
        <ul className="social-icons">
          <li className="social-icon">
            <i className="fab fa-facebook-square"></i>
          </li>
          <li className="social-icon">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="social-icon">
            <i className="fab fa-tiktok"></i>
          </li>
          <li className="social-icon">
            <i className="fab fa-pinterest"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NewsLetter;
