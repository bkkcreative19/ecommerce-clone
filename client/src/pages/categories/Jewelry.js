import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Context } from "../../context/context";
const Jewelry = () => {
  const { products } = useContext(Context);
  const jewelryProducts = products.filter(
    (product) => product.category === "jewelry"
  );

  return (
    <>
      <Products products={jewelryProducts} />
    </>
  );
};

export default Jewelry;
