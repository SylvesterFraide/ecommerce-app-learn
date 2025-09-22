import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
  const { product } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(product.slice(0,10))
  },[])

  return (
    <div className="my-5">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ratione rem voluptatum veritatis. Unde culpa temporibus obcaecati nostrum accusamus autem totam sequi. Enim reprehenderit veritatis ipsam iste! Cupiditate, magni nulla?</p>
      </div>


    </div>
  );
};

export default LatestCollection;
