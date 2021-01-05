import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>
          Additional 30% off<span>All Sale Items</span>
        </p>
        <Link to="/men">
          <button className="btn">Shop Sale Men's</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
