import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../../context/context";
import "./SignUp.css";

const SignUp = (props) => {
  const { register } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="sign-up-summary-checkout-form">
      <div className="form-options">
        <Link to="/login">
          <p>Log In</p>
        </Link>
        <p>Sign Up</p>
        <p>Checkout as Guest</p>
      </div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter email address"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
        <button onClick={() => register(name, email, password)} className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
