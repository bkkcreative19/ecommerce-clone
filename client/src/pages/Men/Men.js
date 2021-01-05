import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { Context } from "../../context/context";
const Men = () => {
  const { products } = useContext(Context);
  const menProducts = products.filter((product) => product.gender === "men");
  console.log(menProducts);
  return (
    <>
      <Products products={menProducts} />
    </>
  );
};

export default Men;
