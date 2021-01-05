import React, { useEffect, useState } from "react";

import "./App.css";

import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewsLetter from "./components/NewsLetter/NewsLetter";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin"></Route>
        <Route exact path="/cart"></Route>
      </Switch>
      <NewsLetter />
    </div>
  );
};

export default App;
