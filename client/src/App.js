import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { Context } from "./context/context";
import Products from "./components/Products/Products";

const App = () => {
  const { getProfile } = useContext(Context);
  useEffect(() => {
    getProfile(localStorage.getItem("auth-token"));
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin"></Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/category/:name">
          <Products />
        </Route>
        <Route exact path="/payment">
          hi
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/:name">
          <ProductPage />
        </Route>
      </Switch>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
