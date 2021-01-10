import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import Men from "./pages/categories/Men";
import Women from "./pages/categories/Women";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Shoes from "./pages/categories/Sale";
import Electronics from "./pages/categories/Electronics";
import Jewelry from "./pages/categories/Jewelry";
import Beauty from "./pages/categories/Beauty";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin"></Route>
        {/* <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route> */}
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
