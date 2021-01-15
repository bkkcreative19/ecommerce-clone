import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import { Context } from "../../context/context";
import Message from "../../components/Message";

const Auth = (props) => {
  const Login = () => {
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
    };
    return (
      <div className="form login">
        <h3>Returning Customer</h3>
        <span>Required *</span>
        <form onSubmit={login}>
          <label htmlFor="email">Email Address *</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your@gmail.com"
          />
          <label htmlFor="password">Password *</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button className="btn">Log In</button>
        </form>
      </div>
    );
  };

  const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const submit = async (e) => {
      e.preventDefault();
      try {
        const newUser = {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        };
        await axios.post("/api/users/signup", newUser);
        const { data } = await axios.post("/api/users/signin", {
          email,
          password,
        });
        localStorage.setItem("auth-token", data.token);
        props.history.push("/");
        window.location.reload();
      } catch (err) {
        err.response.data.errors && setErrors(err.response.data.errors);
        // console.log(err.response.data.errors[0]);
      }
    };

    return (
      <div className="form register">
        <h3>New Customer</h3>
        <span>Required *</span>
        {/* <Message message={errors[0]} /> */}
        <form onSubmit={submit}>
          <label htmlFor="name">Full Name *</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <label htmlFor="email">Email Address *</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your@gmail.com"
          />
          <label htmlFor="password">Password *</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <label htmlFor="confirm-password">Confirm Password *</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
          <button className="btn">Sign Up</button>
        </form>
      </div>
    );
  };
  return (
    <div className="auth">
      <h2>Log in | Register</h2>
      <div className="forms">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default withRouter(Auth);
