import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Context } from "../../context/context";
const Beauty = () => {
  const { products } = useContext(Context);
  const beautyProducts = products.filter(
    (product) => product.category === "beauty"
  );

  return (
    <>
      <Products products={beautyProducts} />
    </>
  );
};

export default Beauty;
