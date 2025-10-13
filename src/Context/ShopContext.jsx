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
     if(!Size) {
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

  const updateQuantity = (id, Size, quantity) => {
     let cartData  = structuredClone(cartItems);
     cartData[id][Size] = quantity;
     setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]){
        try {
           if(cartItems[items][item] > 0) {
             totalCount += cartItems[items][item];
           }
        }catch (error) {

        }
      }
    }
    return totalCount;
  }

  const value = {
    product,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
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
