import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import Men from "./pages/Categories/Men";
import Women from "./pages/Categories/Women";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";
import Shoes from "./pages/Categories/Sale";
import Electronics from "./pages/Categories/Electronics";
import Jewelry from "./pages/Categories/Jewelry";
import Beauty from "./pages/Categories/Beauty";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { Context } from "./context/context";

const App = () => {
  const { userData, getProfile, profile } = useContext(Context);
  console.log(profile);
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
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/men">
          <Men />
        </Route>
        <Route exact path="/women">
          <Women />
        </Route>
        <Route exact path="/shoes">
          <Shoes />
        </Route>
        <Route exact path="/beauty">
          <Beauty />
        </Route>
        <Route exact path="/jewelry">
          <Jewelry />
        </Route>
        <Route exact path="/electronics">
          <Electronics />
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
