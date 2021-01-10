import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Product from "../Product/Product";
import Collapsible from "react-collapsible";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./Products.css";
import { Context } from "../../context/context";

const Products = (props) => {
  const [price, setPrice] = useState(
    Math.trunc(Math.max(...props.products.map((product) => product.price))) + 1
  );
  const [filterProducts, setFilterProducts] = useState([]);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    const stuff = props.products.filter((item) => item.price < price);
    setFilterProducts(stuff);
  }, [price]);

  return (
    <div className="products">
      <aside className="filter">
        <div className="form-group">
          <label htmlFor="price">Product price ${price}</label>
          <input
            type="range"
            name="price"
            min={0}
            max={
              Math.trunc(
                Math.max(...props.products.map((product) => product.price))
              ) + 1
            }
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </aside>
      <div className="main-container">
        <header>
          <h3>
            Home / <span>{props.match.path.substr(1, 20).toUpperCase()}S</span>
          </h3>
        </header>
        {/* <div className="banner"></div>
        <div className="categories">
          <div className="categorie">
            <img src="https://images.unsplash.com/photo-1605924544497-6f10944a5aed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80" />
            <span>All Men's Clothing</span>
          </div>
          <div className="categorie">
            <img src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
            <span>Accessories</span>
          </div>
        </div> */}
        <div className="product-list">
          {/* {filter.length > 0
            ? filter.map((product) => {
                return <Product key={product._id} product={product} />;
              })
            : props.products.map((product) => {
                return <Product key={product._id} product={product} />;
              })} */}
          {filterProducts.length > 0 ? (
            filterProducts.map((product) => {
              return <Product key={product._id} product={product} />;
            })
          ) : (
            <h1>No products match your criteria</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Products);
