import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Context } from "../../context/context";
const Shoes = () => {
  const { products } = useContext(Context);
  const shoesProducts = products.filter(
    (product) => product.category === "shoes"
  );

  return (
    <>
      <Products products={shoesProducts} />
    </>
  );
};

export default Shoes;
