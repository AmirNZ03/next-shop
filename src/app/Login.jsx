"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Login({show}) {
  const[login,setLogin]=useState(false)
     if (!show && !login) return null; // اگر show false بود نمایش نده


  return (
<div className="bg-white w-80 h-72 shadow-2xl fixed top-32 left-1/2 -translate-x-1/2 z-[9999]" >
        <div className="flex flex-col">
        <div className="flex justify-between">
<Link href='/' className='ml-3'>
عضویت</Link>
<p className='font-bold mr-4 '>ورود</p>
        </div>
        <hr className='text-gray-400 mt-2 ' />
        <label htmlFor="email" className='text-right mt-4 mr-4'>ایمیل / شماره موبایل 
</label>
<input type="text" name='email' className='w-72 h-9 ml-4 mt-3' style={{border:'1px solid gray'}} />
<Link href='/' className='text-right mt-3 mr-4'>
گذرواژه خود را فراموش کرده اید؟</Link>
<div className="flex ml-40 mt-3 gap-1">
    <p>مرا به خاطر بسپار</p>
    <input type="checkbox" name="" id="" />
</div>
<button className='bg-green-600 h-10 w-72 mt-4 ml-4 text-white font-bold'>ادامه</button>
        </div>
    </div>
  )
}
