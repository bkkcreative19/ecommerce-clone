import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="instagram">
        <h4>Shop Instagram</h4>
        <div className="instagram-cards">
          <div className="card-1 card">
            <span className="shop">Shop Now</span>
            <p className="likes">
              <i className="far fa-heart"></i> 10234 Likes
            </p>
          </div>
          <div className="card-2 card">
            <span className="shop">Shop Now</span>
            <p className="likes">
              <i className="far fa-heart"></i> 10234 Likes
            </p>
          </div>
          <div className="card-3 card">
            <span className="shop">Shop Now</span>
            <p className="likes">
              <i className="far fa-heart"></i> 10234 Likes
            </p>
          </div>
        </div>
      </section>
      <section className="pay-later">
        <div className="pay-later-content">
          <p>
            Additional 30% off<span>All Sale Items</span>
          </p>
          <button className="btn">Shop With Afterpay</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
