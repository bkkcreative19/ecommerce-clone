import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import { Context } from "../../context/context";

const Auth = (props) => {
  const { userData, setUserData } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      // props.history.push("/login");
      const { data } = await axios.post("/api/users/signin", {
        email,
        password,
      });
      //   console.log({ data });
      setUserData({
        token: data.token,
        userData: data.user,
      });
      localStorage.setItem("auth-token", data.token);
      props.history.push("/");
    } catch (err) {
      //   err.response.data.errors && setErrors(err.response.data.errors);
      // console.log(err.response.data);
    }

    // window.location.reload();
    // console.log(response);
    // console.log(props);
  };
  return (
    <div className="auth">
      <h2>Log in | Register</h2>
      <div className="forms">
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
        <div className="form register">
          <h3>New Customer</h3>
          <span>Required *</span>
          <form onSubmit={submit}>
            <label htmlFor="name">Full Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <label htmlFor="email">Email Address *</label>
            <input
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your@gmail.com"
            />
            <label htmlFor="password">Password *</label>
            <input
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
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
      </div>
    </div>
  );
};

export default withRouter(Auth);
