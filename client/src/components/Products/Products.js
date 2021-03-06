import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Product from "../Product/Product";
import Collapsible from "react-collapsible";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./Products.css";
import { Context } from "../../context/context";

const Products = (props) => {
  const { fetchProductsByCategory, products, setProducts } = useContext(
    Context
  );
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const callFunction = async () => {
      const resProducts = await fetchProductsByCategory(
        props.match.params.name
      );
      setProducts(resProducts);
    };
    callFunction();
  }, [props.match.params.name]);
  const [price, setPrice] = useState(
    1000
    // Math.trunc(Math.max(...products.map((product) => product.price))) + 1
  );
  // const [maxPrice, setMaxPrice] = useState(
  //   Math.trunc(Math.max(...products.map((product) => product.price))) + 1
  // );
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");

  useEffect(() => {
    const stuff = products.filter((item) => item.price < price);
    setFilterProducts(stuff);
  }, [price, products]);

  // useEffect(() => {
  //   const calculateMaxPrice = () => {
  //     return (
  //       Math.trunc(Math.max(...products.map((product) => product.price))) + 1
  //     );
  //   };
  // }, []);

  return (
    <div className="products">
      <aside className="filter">
        <div className="form-group">
          <label htmlFor="price">Product price ${price}</label>
          <input
            type="range"
            name="price"
            min={0}
            max={1000}
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="capacity">Sort By</label>
          <select
            name="capacity"
            id="capacity"
            value={sortBy}
            className="form-control"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="hi">hi</option>
            <option value="hi2">hi2</option>
          </select>
        </div> */}
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
