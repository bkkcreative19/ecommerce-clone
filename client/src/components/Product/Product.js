import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imgUrl} alt="product" />
      <div className="name-price">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>

      <p>4 colors available</p>
    </div>
  );
};

export default Product;
