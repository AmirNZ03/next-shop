"use client"
import React, { useEffect, useState } from 'react'
import Pardakht from './Pardakht'

export default function page() {
    const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  

  return (
    <div className='flex'>
        <div className="flex flex-col bg-gray-200 h-[40rem] w-[35rem] text-center ">
            <p className='font-bold mt-8'>سفارش شما</p>
            <div className="flex flex-col bg-white w-[32rem] h-[30rem] ml-6 mt-3">
<div className="flex justify-around font-bold mt-3">
    <p>قیمت کل</p>
    <p>محصول</p>
</div>
<hr  className='text-gray-300 mt-4'/>
<Pardakht cartItems={cartItems}  />

 
            </div>
        </div>
    </div>
  )
}