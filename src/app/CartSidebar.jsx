'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useCart } from './context/CartContext';
import Link from 'next/link';
import Pardakht from './pardakht/Pardakht';

export default function CartSidebar({ isOpen, onClose, cartItems }) {
  const [mounted, setMounted] = useState(false);
          const[detail,setDetail]=useState([])
            const { removeFromCart } = useCart(); // گرفتن removeFromCart

  const params = useParams();
const id = params.id;
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(()=>{
        if (!id) return; // اگر id هنوز undefined است، API فراخوانی نشود
  
  fetch(`/api/products/${id}`)
        .then(res=>res.json())
        .then(data=>setDetail(data))
      },[id])
  
 const close=useRef()
 const handkeclick=()=>{
close.style.dispaly="none"
 }

  if (!mounted || !isOpen) return null; // نمایش فقط در صورت باز بودن

  return (
    <div className="fixed inset-0 z-50">
      {/* بک‌دراپ نیمه‌شفاف */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      />
      {/* پنل از چپ */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl p-4 overflow-y-auto transition-transform duration-300 ease-in-out translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">سبد خرید شما</h2>
          <button onClick={onClose}>
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        
      {cartItems.length === 0 ? (
  <p className="text-gray-500">سبد خرید خالی است.</p>
) : (
  <ul className="space-y-2">
    {cartItems.map((item, index) => (
      <>
   <button onClick={() => removeFromCart(item.id)} >
            <IoClose className="w-3 h-3"  />
          </button>
      <li key={item.id} className="flex justify-between items-center border-b pb-2">
        <div className="flex flex-col text-sm text-right mr-4">
        <span>{item.name}</span>
        <div className="flex text-xs justify-end"> 
            <span className='mt-1.5 mr-1'>تومان</span>

            <span className='font-bold text-amber-950 mt-2 mr-1'>  {(item.price * 1000).toLocaleString()}
</span>
<span className='text-gray-400 mt-2'>x {item.quantity}</span>
</div>
<div className="flex text-sm justify-end">
  <span className=' text-xs mt-2 mr-1'>تومان</span>

  <span className='font-bold text-amber-950 mt-2'>
        {(item.price * item.quantity * 1000).toLocaleString()}
</span>

</div>

        </div>
        <Image src={item.image} width={80} height={80} alt={item.name || "product"} />
      </li>
  
      </>
    ))}
        <li>
          <div className="flex flex-col">
  <p className='felx justify-center font-bold text-center'>:مجموع خرید شما</p>
  <div className="flex text-sm justify-center">
  <span className=' text-xs mt-2 mr-1'>تومان</span>

  <p className='font-bold text-amber-950 mt-2'>{cartItems.reduce((total, item) => total + item.price * item.quantity * 1000, 0).toLocaleString()}</p>

  </div>
</div>
      </li>
  </ul>
)}


        <button className='bg-green-600 text-white h-10 mt-4 w-36 ml-16 font-bold hover:bg-amber-950 '>
          <Link href='/pardakht'>          تسویه حساب
</Link>
          </button>
        
      </div>
    </div>
  );
}
