import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const ProductItem = ({id,image,name,price}) => {

    const { currency } = useContext(ShopContext);

  return (
    <></>
  )
}

export default ProductItem;