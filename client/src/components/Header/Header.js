import React from "react";
import { Link } from "react-router-dom";
import flag from "../../assets/images/0_o0-6o1W1DKmI5LbX.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-promo">
        <Link>FREE DOMESTIC SHIPPING ON ORDERS OVER $150</Link>
      </div>
      <div className="nav-main">
        <div className="nav-main-left">
          <ul>
            <li></li>
            <span>USA($USD)</span>
            <li>
              <i class="fas fa-map-marker-alt"></i>
            </li>
            <li>Order Status</li>
          </ul>
        </div>
        <div className="nav-main-right">
          <ul>
            <li>
              <i class="fas fa-search"></i>
            </li>
            <li>
              <i class="far fa-user"></i>
            </li>
            <li>
              <i class="fas fa-shopping-bag"></i> 0
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-logo">
        <h1>OAK + FORT</h1>
      </div>
      <div className="nav-secondary">
        <ul>
          <li>
            <Link>New</Link>
          </li>
          <li>
            <Link>Womens</Link>
          </li>
          <li>
            <Link>Mens</Link>
          </li>
          <li>
            <Link>Sale</Link>
          </li>
          <li>
            <Link>Jewelry</Link>
          </li>
          <li>
            <Link>Lifestyle</Link>
          </li>
          <li>
            <Link>Loungewear</Link>
          </li>
          <li>
            <Link>Shop Instagram</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
