import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  const { product, currency, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            Size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="pt-5">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = product.find(
            (productItem) => productItem._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-b  border-t border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-xs sm:text-lg front-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                     <p className="px-2 sm:px-3 sm:py-1  bg-slate-100">{item.Size}</p>
                  </div>
                </div>
              </div>
              <input type="number" defaultValue={item.quantity} min={1} onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.Size, parseInt(e.target.value))}  className="border rounded border-gray-300 text-gray-500 outline-none max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" />
              <DeleteOutlineIcon onClick={() => updateQuantity(item.id, item.Size, 0)} className="cursor-pointer text-gray-500 hover:text-gray-700" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
