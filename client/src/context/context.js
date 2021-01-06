import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext("light");

const MyContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    // console.log(data);
    setProducts(data);
    const newProducts = [...products];
    const featured = newProducts.filter(
      (product) => product.isFeatured === true
    );
    const latest = products.filter((product) => product.isLatest === true);
    setFeaturedProducts(featured);
    setLatestProducts(latest);
  };

  const fetchProduct = async (name) => {
    // const product = products.find((product) => product.name === product.name);
    const { data } = await axios.get(`/api/product/${name}`);
    return data;
  };

  const addToCart = (product) => {
    const newCart = [...cart];
    newCart.push(product);

    setCart(newCart);
    console.log(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const fetchProductsFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    return data;
  };

  //   console.log(cart);
  // cart.push("hi");

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        cart,
        addToCart,
        fetchProduct,
        fetchProductsFromLocalStorage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
