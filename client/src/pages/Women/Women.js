import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Context } from "../../context/context";
const Women = () => {
  const { products } = useContext(Context);
  const womenProducts = products.filter(
    (product) => product.gender === "women"
  );
  console.log(womenProducts);
  return (
    <>
      <Products products={womenProducts} />
    </>
  );
};

export default Women;
