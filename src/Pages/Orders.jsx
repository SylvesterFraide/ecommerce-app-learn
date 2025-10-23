import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';

const Orders = () => {
 const { product, currency} = useContext(ShopContext);

 return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
          {
            
          }
      </div>
    </div>
  )
}

export default Orders;