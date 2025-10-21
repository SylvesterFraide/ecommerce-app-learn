import React, { useState } from 'react'
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';
import mpesa from '../assets/icons/mpesa.png';
import paypal from '../assets/icons/paypal.png';
import sasapay from '../assets/icons/sasapay.jpg';
import visa from '../assets/icons/visa.jpg';

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
     {/* -----Left Side---- */}
     <div className=" flex flex-col gap-4 w-full p-4 sm:max-w-[480px]">
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
     <div className="mt-8">
      <div className="mt-8 min-w-80">
        <CartTotal />
      </div>
      <div className="mt-12">
        <Title text1={"PAYMENT"} text2={"METHOD"} />
        <div className="flex gap-1 flex-col lg:flex-row">
             <div className="flex items-center gap-1 p-2 px-3 cursor-pointer">
              <p className={`${paymentMethod === 'mpesa' ? 'bg-green-400' : ''} min-w-3.5 h-3.5 border rounded-full`} onClick={() => setPaymentMethod('mpesa')}></p>
              <img src={mpesa} alt="" className='h-6 mx-4' />
             </div>

              <div className="flex items-center gap-1 p-2 px-3 cursor-pointer">
              <p className={`${paymentMethod === 'paypal' ? 'bg-green-400' : ''} min-w-3.5 h-3.5 border rounded-full`} onClick={() => setPaymentMethod('paypal')}></p>
              <img src={paypal} alt="" className='h-10 mx-4' />
             </div>

               {/* <div className="flex items-center gap-1 p-2 px-3 cursor-pointer">
              <p className={`${paymentMethod === 'sasapay' ? 'bg-green-400' : ''} min-w-3.5 h-3.5 border rounded-full`} onClick={() => setPaymentMethod('sasapay')}></p>
              <img src={sasapay} alt="" className='h-5 mx-4' />
             </div> */}

              {/* <div className="flex items-center gap-1 p-2 px-3 cursor-pointer">
              <p className={`${paymentMethod === 'visa' ? 'bg-green-400' : ''} min-w-3.5 h-3.5 border rounded-full`} onClick={() => setPaymentMethod('visa')}></p>
              <img src={visa} alt="" className='h-5 mx-4' />
             </div> */}

              <div className="flex items-center gap-1 p-2 px-3 cursor-pointer">
              <p className={`${paymentMethod === 'cash' ? 'bg-green-400' : ''} min-w-3.5 h-3.5 border rounded-full`} onClick={() => setPaymentMethod('cash')}></p>
              <p className='text-gray-500 text-sm medium mx-4'>CASH ON DELIVERY</p>
             </div>
        </div>
        <div className="w-full text-end mt-8">
          <button className='bg-black text-white py-3 px-16 rounded text-sm '>PLACE ORDER</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default PlaceOrder;