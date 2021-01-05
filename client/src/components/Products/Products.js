import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";

const Products = (props) => {
  //
  return (
    <div className="products">
      <aside>lhiibjo</aside>
      <div className="main-container">
        <header>
          <h3>
            Home / <span>{props.match.path.substr(1, 20).toUpperCase()}S</span>
          </h3>
        </header>
        <div className="banner"></div>
        <div className="categories">
          <div className="categorie">
            <img src="https://images.unsplash.com/photo-1605924544497-6f10944a5aed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80" />
            <span>All Men's Clothing</span>
          </div>
          <div className="categorie">
            <img src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
            <span>Accessories</span>
          </div>
        </div>
        <div className="product-list">
          {props.products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Products);
