import { createContext, useEffect, useState } from "react";
import { product } from "../Components/Product";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 5;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, Size) => {
     if(!id) {
      toast.error('Please Select Product Size')
      return;
     }


    let cartData = structuredClone(cartItems);

    if (cartData[id]) {
      if (cartData[id][Size]) {
        cartData[id][Size] += 1;
      } else {
        cartData[id][Size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][Size] = 1;
    }

    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    product,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
