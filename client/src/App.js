import React, { useEffect, useState } from "react";

import "./App.css";

import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin"></Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/men">
          <Men />
        </Route>
        <Route exact path="/women">
          <Women />
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
