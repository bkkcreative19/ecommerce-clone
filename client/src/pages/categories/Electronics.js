import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Context } from "../../context/context";
const Electronics = () => {
  const { products } = useContext(Context);
  const electronicsProducts = products.filter(
    (product) => product.category === "electronics"
  );

  return (
    <>
      <Products products={electronicsProducts} />
    </>
  );
};

export default Electronics;
