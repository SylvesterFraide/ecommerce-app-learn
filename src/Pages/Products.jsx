import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Products = ({
  name,
  description,
  image,
  gender,
  price,
  size,
  category,
  subCategory,
}) => {
  const { currency, product } = useContext(ShopContext);
  return <div>Products</div>;
};

export default Products;
