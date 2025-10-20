import React from 'react'
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 bg-gray-100 sm:pt-14 min-h-[80vh]'>
     {/* -----Left Side---- */}
     <div className=" flex flex-col gap-4 w-full bg-blue-100 p-4 sm:max-w-[480px]">
      <div className="text-xl sm:text-2xl my-3">
        <Title text1={"PLACE"} text2={"ORDER"} />
      </div>
      <div className="flex gap-3">
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
      </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' /> 
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
          <div className="flex gap-3">
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
      </div>
           <div className="flex gap-3">
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip Code' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
      </div>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
     </div>

     {/* -----Right Side---- */}
     <div className="bg-blue-100 mt-8">
      <div className="mt-8 min-w-80">
        <CartTotal />
      </div>
      <div className="mt-12">
        <Title text1={"PAYMENT"} text2={"METHOD"} />
        <div className="">

        </div>
      </div>
     </div>
    </div>
  )
}

export default PlaceOrder;