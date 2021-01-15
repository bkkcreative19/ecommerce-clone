import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext("light");

const MyContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [profile, setProfile] = useState({});
  const intialCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(intialCart);

  const fetchProductsByCategory = async (path) => {
    const { data } = await axios.get(`/api/products/${path}`);
    return data;
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
      const newCart = cart.filter((item) => item._id !== id);
      setCart(newCart);
    }
  };

  const fetchProduct = async (name) => {
    const { data } = await axios.get(`/api/product/${name}`);
    return data;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logOut = (props) => {
    localStorage.setItem("auth-token", "");
    props.history.push("/");
    window.location.reload();
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
  };

  const getProfile = async (token) => {
    const { data } = await axios.get("/api/users/profile", {
      headers: { "x-auth-token": token },
    });

    setProfile(data);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        fetchProduct,
        addItemToCart,
        removeProductFromCart,
        logOut,
        login,
        getProfile,
        profile,
        fetchProductsByCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
