import React from "react";
import "./CartProduct.css";

const CartProduct = ({ cartItem }) => {
  return (
    <div className="cart-product">
      <div className="cart-product-top">
        <div className="cart-product-img">
          <img src={cartItem.imgUrl} alt="product" />
        </div>
        <div className="cart-product-info">
          <div className="head">
            <h2>{cartItem.name}</h2>
            <span>${cartItem.price}</span>
          </div>
          <div className="inv-info">
            <p>
              Product Color:
              <span>
                <div className="color"></div>
              </span>
            </p>
            <p>
              Product Size<span>Medium</span>
            </p>
            <p>
              Quantity<span>1</span>
            </p>
          </div>
          <div className="options">
            <a href="#">Edit</a>
            <a href="#">Save For Later</a>
            <a href="#">Remove</a>
          </div>
        </div>
      </div>
      <div className="cart-product-bottom">
        <div className="cart-shippingOptions">
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
      </div>
    </div>
  );
};

export default CartProduct;
