"use client"

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import { RiTelegram2Fill } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import Login from "./Login";
import CartSidebar from "./CartSidebar";
// import { CartProvider, useCart } from "./products/[id]/detail/CartContext";
import Navbar from "./Navbar";
import {CartProvider ,useCart } from "./context/CartContext";
export default function RootLayout({ children }) {
  const [show,setShow]=useState(false)
  const[cartItems,setCartItems]=useState([])
  // const { addToCart, cartItems } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: detail[0]?.id,
      name: detail[0]?.title,
      price: detail[0]?.price,
      image: detail[0]?.image
    }, changevalue);
    setIsopen(true);
  };
  const[isOpen,setIsopen]=useState(false)
// const { cartItems } = useCart();

  return (
    <html lang="en">
      <body>
                  <CartProvider>

        <header>
          <nav className="mt-10">
            <ul className="flex no-underline list-none justify-evenly ">
              <li className="bg-black w-12 h-12 rounded-full relative -mt-2">
                <button className="bg-white w-10 h-10 rounded-full relative ml-1 mt-1" onClick={()=>setIsopen(true)} >
                  <SlBasket className="text-2xl ml-1 -mt-4 absolute" />
<div className="bg-white top-0 left-0 -ml-2 w-4 h-4 rounded-full  absolute ">
                      <p className="text-sm">{cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
</div>
                </button>
                  <CartSidebar
                                   isOpen={isOpen}
                                   onClose={() => setIsopen(false)}
                                   cartItems={cartItems}
                                 />
                
                {/* <Navbar
                 isOpen={isOpen}
  onClose={() => setIsopen(false)}
  cartItems={cartItems}
                /> */}
              </li>
              <li className="flex gap-4" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                <button className="rounded-4xl w-32 h-10 text-sm font-bold -mt-1 " style={{border:'1px solid gray'}}>
                  <p className="mr-6 ">                  ورود/عضویت
</p>
                  <CiUser className="w-6 h-6 ml-24 -mt-6" />

                </button>

              </li>
              <li>
               <Link href="/">
               باشگاه مشتریان</Link> 
              </li>
              <li className="flex">
                <Link href="/">
                
                <p className="ml-4  ">                درباره ما
</p>
</Link>
              </li>
                       <li>
                <Link href="/">
                
تماس با ما
</Link>
   </li>
   <li>
               <Link href="/">
                
دیکشنری قهوه
</Link>
              </li>
                       <li className="flex">
                <Link href="/">
                
                <p className="ml-4  ">              وبلاگ
</p>
</Link>
              </li>
                            <li>
                <Link href="/">
                
فروش سازمانی
</Link>
              </li>
                      <li className="flex">
                <Link href="/products">
                
                <p className="ml-4  ">               فروشگاه
</p>
</Link>
              </li>
                                  <li>
                <Link href="/">
                
صفحه اصلی
</Link>
              </li>
                      <li>
                <Link href="/">
             <Image src="/logonew.png" width={150}
             height={50} alt="logo" className="-mt-2"/>   
</Link>
              </li>
            </ul>
          </nav>
             <div className="relative z-50">
            <Login show={show} />
          </div>
        </header>

        {children}

        <footer className="w-full bg-black mt-6 z-50" style={{height:'28rem'}}>
<div className="flex">
  <div className="flex-col ml-20 mt-10" >
    <div className="flex gap-2">
      <div className="bg-amber-100 rounded-xl">
      <img src="/logo.png" alt="" className="w-16 h-16 rounded-xl" />
      </div>
       <div className="bg-amber-100 rounded-xl">
        <img src="/logo (1).png" alt="" className="w-16 h-16 rounded-xl" />
        </div>
               <div className="bg-amber-100 rounded-xl">

          <img src="/logonama.png" alt="" className="w-16 h-16 rounded-xl" />
                </div>

    </div>
     <div className="flex gap-2 mt-3">
      <img src="L-O-G-O-new-color-01.jpg" alt="" className="w-16 h-16 rounded-xl" />
        <img src="Logo-mellatbank.jpg" alt="" className="w-16 h-16 rounded-xl" />
          <img src="پرداخت-الکترونیک-سداد.jpg" alt="" className="w-16 h-16 rounded-xl" />
    </div>
  </div>
  <div className="flex flex-col text-amber-100 text-right ml-20 mt-8 space-y-3">
    <h6 className="font-bold">منوی فوتر</h6>
    <Link href='/' className="text-gray-400  hover:text-white">
    شرایط و قوانین
    </Link>
     <Link href='/' className="text-gray-400  hover:text-white">
     شرایط و هزینه ارسال
    </Link>
      <Link href='/' className="text-gray-400  hover:text-white">
ثبت شکایات    
</Link>
    <Link href='/' className="text-gray-400  hover:text-white">
حفظ حریم شخصی
</Link>
   <Link href='/' className="text-gray-400  hover:text-white">
   دیکشنری قهوه
</Link>
  </div>
    <div className="flex flex-col text-amber-100 text-right ml-20 mt-8 space-y-3">
    <h6 className="font-bold">دسترسی سریع</h6>
    <Link href='/' className="text-gray-400 hover:text-white">
حفظ حریم شخصی
    </Link>
     <Link href='/' className="text-gray-400  hover:text-white">
ثبت شکایات    
</Link>

      <Link href='/' className="text-gray-400  hover:text-white">
درباره ما
</Link>
    
  </div>
   <div className="flex flex-col text-amber-100 text-right ml-14 mt-8 space-y-3">
    <h6 className="font-bold">آخرین نوشته ها</h6>
    <div className="flex gap-4 ml-14">
    <div className="flex flex-col">
    <Link href='/' className="hover:text-gray-400">
تفاوت آمریکانو و لانگ بلک
</Link>
    <div className="flex">
    <p className="text-sm text-gray-400 ml-4 mt-2">بدون دیدگاه</p>
        <p className="text-sm text-gray-400 ml-8 mt-2">تیر 1404 </p>
            <p className="text-sm text-gray-400  mt-2">21</p>


    </div>
    </div>
    <Image src='/americano-vs-long-.png' width={70} height={70} className="object-cover"/>
    </div>
    <hr className="text-gray-400" />
     <div className="flex gap-4">
    <div className="flex flex-col">
    <Link href='/' className="max-w-60 hover:text-gray-400 ">

قهوه مازاگران چیست و چطور تو خونه درستش کنیم؟
</Link>
    <div className="flex">
    <p className="text-sm text-gray-400 ml-4 mt-2">بدون دیدگاه</p>
        <p className="text-sm text-gray-400 ml-8 mt-2">تیر 1404 </p>
            <p className="text-sm text-gray-400  mt-2">18</p>


    </div>
    </div>
    <Image src='/Leonardo_Kino.jpg' width={70} height={70} className="object-cover"/>
    </div>
        <hr className="text-gray-400" />

     <div className="flex gap-4">
    <div className="flex flex-col">
    <Link href='/' className="max-w-60 hover:text-gray-400">
چرا قهوه صبحگاهی برای قلب شما بهتر است؟
</Link>
    <div className="flex">
    <p className="text-sm text-gray-400 ml-4 mt-2">بدون دیدگاه</p>
        <p className="text-sm text-gray-400 ml-8 mt-2">تیر 1404 </p>
            <p className="text-sm text-gray-400  mt-2">15</p>


    </div>
    </div>
    <Image src='/best-time-to.jpg' width={70} height={70} className="object-cover"/>
    </div>
  </div>
  <div className="flex flex-col max-w-64 text-sm space-y-3 ml-2 mt-8">
   <p className="text-gray-300">شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست</p>
  <div className="flex">
  <p className="text-gray-300 ml-1">تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان. خیابان ماگنولیا بلوک آ117</p>

  </div>
  <div className="flex justify-end mr-2">
  <p className="text-gray-300">پیگیری سفارشات : 02188305827
</p>
<IoIosPhonePortrait  className="text-gray-300 w-4 h-4"/>
</div>
<div className="flex justify-end mr-3">
  <p className="text-gray-300">support [at] set-coffee.com
</p>
<MdOutlineEmail className="text-gray-300 w-4 h-4" />
</div>
  </div>
</div>       
 

        </footer>
                              </CartProvider>

      </body>
    </html>
  );
}
