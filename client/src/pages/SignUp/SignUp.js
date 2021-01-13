import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../../context/context";
import axios from "axios";
import "./SignUp.css";
import Message from "../../components/Message";

const SignUp = (props) => {
  const { userData, setUserData } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState();

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
      console.log({ data });
      setUserData({
        token: data.token,
        userData: data.user,
      });
      localStorage.setItem("auth-token", data.token);
      props.history.push("/");
    } catch (err) {
      err.response.data.errors && setErrors(err.response.data.errors);
      // console.log(err.response.data);
    }

    // window.location.reload();
    // console.log(response);
    // console.log(props);
  };

  // console.log(errors);
  return (
    <div className="sign-up-summary-checkout-form">
      <div className="form-options">
        <Link to="/login">
          <p>Log In</p>
        </Link>
        <p>Sign Up</p>
        <p>Checkout as Guest</p>
      </div>
      {errors && (
        <Message message="nope" clearError={() => setErrors(undefined)} />
      )}
      <form onSubmit={submit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
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
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm password"
        />
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
