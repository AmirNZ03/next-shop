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
        <div className="flex flex-col bg-gray-200 h-[40rem] w-[35rem] text-center ml-24 mt-6 ">
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
        <div className="flex flex-col text-right space-y-4 ml-40 mt-4">
          <div className="flex gap-5">
            <div className="flex flex-col">
            <label htmlFor="">*نام خانوادگی 
</label>
<input type="text" style={{border:'1px solid gray'}} />
</div>
            <div className="flex flex-col">
            <label htmlFor="">*نام 
</label>
<input type="text"style={{border:'1px solid gray'}} />
</div>
          </div>
          <label htmlFor="">*استان
</label>
<select name="" id="" style={{border:'1px solid gray'}}>
    <option value="">(فقط شهر تهران)تهران</option>

  <option value=""></option>
</select>
          <label htmlFor="">*شهر
</label>
<select name="" id="" style={{border:'1px solid gray'}}>
    <option value="">لطفا ایتدا استان خودرا انتخاب کنید</option>

  <option value=""></option>
</select>
           <label htmlFor="">*آدرس خیابان 
</label>
<input type="text" placeholder='نام خیابان و پلاک خانه' style={{border:'1px solid gray'}} />
           <label htmlFor="">*کدپستی 
</label>
<input type="text" style={{border:'1px solid gray'}} />
           <label htmlFor="">*شماره موبایل 
</label>
<input type="text"  style={{border:'1px solid gray'}}/>
          <label htmlFor="">* ایمیل
</label>
<input type="text"  style={{border:'1px solid gray'}}/>
        </div>

    </div>
  )
}