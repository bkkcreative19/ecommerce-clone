import React, { useContext, useState, useEffect } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { Context } from "../../context/context";
import "./Cart.css";

const Cart = () => {
  const { fetchProductsFromLocalStorage } = useContext(Context);
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    const data = fetchProductsFromLocalStorage();
    setCart(data);
  }, []);

  return (
    <section className="cart">
      <div className="cart-content">
        <h2>Shopping Cart</h2>
        <div className="cart-item-list">
          {cart.map((cartItem) => {
            return <CartProduct key={cartItem._id} cartItem={cartItem} />;
          })}
        </div>
      </div>
      <OrderSummary />
    </section>
  );
};

export default Cart;
