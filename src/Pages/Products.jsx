import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RelatedProducts from "../Components/RelatedProducts";
// import { product } from "../Components/Product";

const Products = () => {
  const { product, currency, delivery_fee, addToCart } = useContext(ShopContext);
  const { id } = useParams();

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState('');

  const fetchData = () => {
    product.find((user) => {
      if (user.id === parseInt(id)) {
        setProductData(user);
        // console.log(user);
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
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.image.map((img, index) => (
              <img
                onMouseEnter={() => setImage(img)}
                key={index}
                src={img}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* product details */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarOutlineIcon className="text-yellow-500" />
            <p className="pl-2">(120)</p>
          </div>
          <p className="font-medium text-3xl mt-5">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className=" flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.Size.map((item, index) => (
                <button
                  key={index}
                  className={` py-2 px-4 bg-gray-200 ${item === size ? 'bg-gray-500' : ''}`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData.id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded">ADD TO CART</button>
           <hr className="mt-8 sm:w-4/5" />
           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on Delivery Available.</p>
            <p>Easy return and exchange policy on this product.</p>
           </div>
        </div>
      </div>

      {/* object description and review */}
      <div className="mt-5">
        <div className="flex">
          <b className="border px-5 py-3 text-sm rounded">Description</b>
          <p className="border px-5 py-3 text-sm rounded">Reviews (120)</p>
        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores libero eum voluptatem animi! Cum aliquid inventore maiores! Nemo pariatur sapiente aliquid dolor ab sed voluptate quos suscipit fuga hic.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nemo totam eligendi, consequatur architecto voluptate ratione velit omnis, ea, sit tenetur aut quas? Aspernatur numquam rem cum possimus. Ipsum, quod.</p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div>
      <p className="text-gray-500">Item Not Found</p>
    </div>
  );
};

export default Products;
