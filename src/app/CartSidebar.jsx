'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from "react-icons/io5";

export default function CartSidebar({ isOpen, onClose, cartItems }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      {/* بک‌دراپ نیمه‌شفاف */}
      {isOpen && (
        <div
          className="absolute inset-0 bg-black/50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      {/* پنل از چپ */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl p-4 overflow-y-auto transition-transform duration-300 ease-in-out`}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
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
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>{item.name}</span>
                <span>{item.price.toLocaleString()} تومان</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>,
    document.body
  );
}
