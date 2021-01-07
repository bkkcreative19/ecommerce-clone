import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext("light");

const MyContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  const addItemToCart = (id, qty) => {
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

  const fetchProductsFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    return data;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        cart,
        setCart,
        fetchProduct,
        fetchProductsFromLocalStorage,
        addItemToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
