import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext("light");

const MyContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const intialCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(intialCart);

  const fetchProducts = async (path) => {
    const { data } = await axios.get(`/api/products`);
    setProducts(data);
    // return data;
  };

  const addItemToCart = (id, qty, props) => {
    if (!cart) return;
    const inCartAlready = cart.find((item) => item._id === id);

    if (inCartAlready) {
      alert("already in cart");
      return;
    } else {
      const data = products.filter((product) => product._id === id);
      data[0].qty = qty;
      setCart([...cart, ...data]);
    }
  };
  const removeProductFromCart = (id) => {
    if (window.confirm("Do you want to delete this product")) {
      const newCart = [...cart];
      const hi = newCart.filter((item) => item._id !== id);
      setCart(hi);
    }
  };

  const fetchProduct = async (name) => {
    const { data } = await axios.get(`/api/product/${name}`);
    return data;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      // console.log(token);
      const res = await axios.post("/api/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });

      if (token) {
        const { data } = await axios.get("/api/users/profile", {
          headers: { "x-auth-token": token },
        });

        setUserData({
          token: token,
          user: data,
        });
      }
    };
    // console.log(userData);

    checkLoggedIn();
  }, []);

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  const login = async (email, password) => {
    const res = await axios.post(
      "/api/users/signin",
      {
        email: email,
        password: password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    //  localStorage.setItem("auth-token", );
    console.log(res);
  };

  return (
    <Context.Provider
      value={{
        products,
        cart,
        setCart,
        fetchProduct,
        addItemToCart,
        removeProductFromCart,
        userData,
        setUserData,
        logOut,
        login,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
