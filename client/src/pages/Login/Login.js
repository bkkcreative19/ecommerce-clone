import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-summary-checkout-form">
      <div className="form-options">
        <p>Log In</p>
        <Link to="sign-up">
          <p>Sign Up</p>
        </Link>
        <p>Checkout as Guest</p>
      </div>
      <form>
        <input type="text" placeholder="Enter email address" />
        <input type="password" placeholder="Enter password" />
        <button className="btn">Log in and proceed to Checkout</button>
        <span>Forgot Password?</span>
      </form>
    </div>
  );
};

export default Login;
