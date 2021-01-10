import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
// import { Context } from "../../context/context";
// import flag from "../../assets/images/0_o0-6o1W1DKmI5LbX.png";
import "./Header.css";

const Header = () => {
  // const [cart, setCart] = useState([]);
  const { cart } = useContext(Context);
  // const [numberInCart, setNumberInCart] = useState(0);
  // useEffect(() => {
  //   const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
  //   setCart(cartFromStorage);
  // }, []);

  // useEffect(() => {
  //   setNumberInCart(cart.length);
  // }, [cart]);
  return (
    <nav className="nav">
      <div className="nav-promo">
        <Link to="dome">FREE DOMESTIC SHIPPING ON ORDERS OVER $150</Link>
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
            <Link to="/login">
              <li>
                <i className="far fa-user"></i>
              </li>
            </Link>
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
            <Link to="/women">Womens</Link>
          </li>
          <li>
            <Link to="/men">Mens</Link>
          </li>
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/jewelry">Jewelry</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/beauty">Beauty</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
