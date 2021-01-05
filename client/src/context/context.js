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

  const addToCart = (product) => {
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
