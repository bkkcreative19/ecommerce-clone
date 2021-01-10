import React, { useState, useEffect } from "react";
import "./OrderSummary.css";

const OrderSummary = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  // const subtotal = cart.forEach((item) => {
  //   console.log(item.price + item.price);
  // });

  const getTotal = () => {
    if (cart) {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.qty;
      }, 0);
      setSubtotal(res.toFixed(2));
    }
  };

  useEffect(() => {
    getTotal();
  }, [cart]);

  // console.log(typeof cart[0].qty);
  return (
    <div className="cart-summary">
      <div className="cart-summary-totals">
        <h3>Order Summary</h3>
        <div className="sub-total">
          <p className="bold">Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="shipping">
          <p>Shipping</p>
          <p>TBD</p>
        </div>
        <div className="estimated-total">
          <p className="bold">Estimated Total</p>
          <p>$136.00</p>
        </div>
        <p className="after">
          or 4 interest-free installments of $19.50 by Afterpay ⓘ
        </p>
        <div className="tax">
          <p>Tax</p>
          <p>TBD</p>
        </div>
        <div className="estimated-total">
          <p className="bold">Estimated Total</p>
          <p>$136.00</p>
        </div>
        {/* <div className="input">
          <input type="text" placeholder="Enter Promo Code Here" />
          <button className="btn">Apply</button>
        </div> */}
      </div>
      <div className="cart-summary-checkout-form">
        <div className="form-options">
          <p>Log In</p>
          <p>Sign Up</p>
          <p>Checkout as Guest</p>
        </div>
        <form>
          <input type="text" placeholder="Enter email address" />
          <input type="password" placeholder="Enter password" />
          <button className="btn">Log in and proceed to Checkout</button>
          <span>Forgot Password?</span>
        </form>
      </div>
      <button className="paypal-btn">
        <img
          src="https://www.oakandfort.com/sca-dev-elbrus/img/Pay-pal-logo-blue.png"
          alt="paypal"
        />
      </button>
    </div>
  );
};

export default OrderSummary;
