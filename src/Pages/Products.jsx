import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
// import { product } from "../Components/Product";

const Products = () => {
  const { product } = useContext(ShopContext);
  const { id } = useParams();

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchData = () => {
    product.find((user) => {
      if (user.id === parseInt(id)) {
        setProductData(user);
        console.log(user);
        setImage(user.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <h1>{productData.name}</h1>
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
               {productData?.image?.map((img, index) => (
                 <img key={index} src={img} alt='' className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"/>
               ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Products;