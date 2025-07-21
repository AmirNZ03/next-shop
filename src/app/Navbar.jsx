'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { useCart } from './context/CartContext';

export default function Navbar({ isOpen, onClose, cartItems }) {
  const [mounted, setMounted] = useState(false);
  const { removeFromCart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl p-4 overflow-y-auto transition-transform duration-300 ease-in-out translate-x-0">
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
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex flex-col text-sm text-right mr-4">
                  <span>{item.name}</span>
                  <div className="flex text-xs justify-end"> 
                    <span className='mt-1.5 mr-1'>تومان</span>
                    <span className='font-bold text-amber-950 mt-2 mr-1'>{(item.price * 1000).toLocaleString()}</span>
                    <span className='text-gray-400 mt-2'>x {item.quantity}</span>
                  </div>
                  <div className="flex text-sm justify-end">
                    <span className='text-xs mt-2 mr-1'>تومان</span>
                    <span className='font-bold text-amber-950 mt-2'>{(item.price * item.quantity * 1000).toLocaleString()}</span>
                  </div>
                </div>
                <div className="relative">
                  <Image src={item.image} width={80} height={80} alt={item.name || "product"} />
                  <IoClose
                    className="w-4 h-4 absolute top-1 left-1 text-red-500 cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        <button className='bg-green-600 text-white h-10 w-36 ml-14 font-bold hover:bg-amber-950 mt-4 text-center'>تسویه حساب</button>
      </div>
    </div>
  );
}
