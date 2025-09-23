import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSaller = () => {
  const { product, currency } = useContext(ShopContext);
  const [bestSaller, setBestSaller] = useState([]);

  useEffect(() => {
    const bestProduct = product.filter((item) => item.bestSeller);
    setBestSaller(bestProduct.slice(13, 18));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          distinctio accusamus excepturi facere aut praesentium odio nisi eius
          minus ab doloremque labore officia sit, perspiciatis maiores debitis
          expedita in vel.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {bestSaller.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSaller;
