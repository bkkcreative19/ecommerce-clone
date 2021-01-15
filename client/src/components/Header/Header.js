import React, { useEffect, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../../context/context";
import "./Header.css";

const Header = () => {
  const { cart, profile } = useContext(Context);

  const token = localStorage.getItem("auth-token");

  return (
    <nav className="nav">
      <div className="nav-promo">
        <Link to="#">FREE DOMESTIC SHIPPING ON ORDERS OVER $150</Link>
      </div>
      <div className="nav-main">
        <div className="nav-main-left">
          <ul>
            <li></li>
            <span>USA($USD)</span>
            <li>
              <i className="fas fa-map-marker-alt"></i>
            </li>
            <li>Order Status</li>
          </ul>
        </div>
        <div className="nav-main-right">
          <ul>
            <li>
              <i className="fas fa-search"></i>
            </li>

            <li>
              <Link to={token ? "/profile" : "/auth"}>
                <i className="far fa-user"></i> {profile.name}
              </Link>
            </li>

            <Link to="/cart">
              <li>
                <i className="fas fa-shopping-bag"></i> {cart ? cart.length : 0}
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="nav-logo">
        <Link to="/">
          <h1>OAK + FORTS</h1>
        </Link>
      </div>
      <div className="nav-secondary">
        <ul>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/category/women">Womens</Link>
          </li>
          <li>
            <Link to="/category/men">Mens</Link>
          </li>
          <li>
            <Link to="/category/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/category/jewelry">Jewelry</Link>
          </li>
          <li>
            <Link to="/category/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/category/beauty">Beauty</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
