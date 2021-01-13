import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../../context/context";
import "./Login.css";

const Login = (props) => {
  const {} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    const { data } = await axios.post("/api/users/signin", user);
    localStorage.setItem("auth-token", data.token);
    props.history.push("/");
    window.location.reload();
    // console.log(data);
    // console.log(props);
  };
  return (
    <div className="login-summary-checkout-form">
      <div className="form-options">
        <p>Log In</p>
        <Link to="sign-up">
          <p>Sign Up</p>
        </Link>
        <p>Checkout as Guest</p>
      </div>
      <form onSubmit={login}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter email address"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
        <button className="btn">Log in</button>
        <span>Forgot Password?</span>
      </form>
    </div>
  );
};

export default withRouter(Login);
