import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../../context/context";

import "./ProductPage.css";

const ProductPage = (props) => {
  const { fetchProduct } = useContext(Context);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const callFunction = async () => {
      const data = await fetchProduct(props.match.params.name);
      setProduct(data[0]);
    };
    callFunction();
  }, []);

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.imgUrl} alt="product" />
      </div>

      <div className="product-page-content">
        <div className="head">
          <h2>{product.name}</h2>
          <span>${product.price}</span>
          <span>or 4 interest-free installments of $19.50 by Afterpay ⓘ</span>
        </div>

        <div className="color-container">
          <p>
            Color: <span>Black</span>
          </p>
          <div className="color-choices">
            <div className="color"></div>
            <div className="color"></div>
          </div>
        </div>
        <div className="size-container">
          <p>
            Size: <span>Small</span>
          </p>
          <div className="size-choices">
            <div className="size">S</div>
            <div className="size">M</div>
          </div>
          <a href="#">Size Guide</a>
        </div>
        <div className="shippingOptions">
          <div>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">
              SHIP IT TO ME - CALCULATED AT CHECKOUT{" "}
              <span>Shipping Policy</span>
            </label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">
              PICKUP IN STORE - FREE!
              <span>Select Store to check availability.</span>
            </label>
          </div>
        </div>
        <div className="button">
          <button className="btn">Add to Cart</button>

          <span className="heart">
            <i class="fas fa-heart"></i>
          </span>
        </div>
        <a className="inv" href="#">
          Check All Store Inventory
        </a>
      </div>
    </div>
  );
};

export default withRouter(ProductPage);
