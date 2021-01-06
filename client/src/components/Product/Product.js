import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/${product.name}`}>
        <img src={product.imgUrl} alt="product" />
      </Link>
      <div className="name-price">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>

      <p>4 colors available</p>
    </div>
  );
};

export default Product;
