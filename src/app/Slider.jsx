"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Slider() {
      const images = [
        { id: 1, src: "/coffee2.jpg" },
        { id: 2, src: "/coffee3.jpg" },
        { id: 3, src: "/coffee.jpg" }
      ];
      const [index, setIndex] = useState(0);
    
      const handleBack = () => {
        setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
      };
    
      const handleForward = () => {
        setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      };
  return (
    <div className="flex justify-center items-center mt-8">
          <div className="relative">
            <Image
              key={images[index].id}
              src={images[index].src}
              width={1400}
              height={150}
              className=" h-96  object-cover rounded"
              alt={`coffee-${index}`}
            />
            <button onClick={handleBack}>
              <IoIosArrowBack className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-800 cursor-pointer" />
            </button>
            <button onClick={handleForward}>
              <IoIosArrowForward className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-gray-800 cursor-pointer" />
            </button>
          </div>
        </div>
  )
}
