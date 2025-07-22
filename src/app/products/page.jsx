'use client';

import React, { useEffect, useState } from 'react'
import "../layout"
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { FaStar } from 'react-icons/fa';
import Products2 from '../Products2';
import Productsfilter from '../Productsfilter';
export default function page() {
const [changevalue, setChangeValue] = useState([0, 725]);
      const [defaultvalue,setDefaultvalue]=useState(true)
      const[options,setOptions]=useState("1")
        const [products, setProducts] = useState([]);

            const[isapi,setIsapi]=useState(false)

      const changehandler = (value) => {
    const roundedValue = [Math.round(value[0]), Math.round(value[1])];
    setChangeValue(roundedValue);
    console.log("Slider changed to:", roundedValue);
    setDefaultvalue(false);
};

      const changehandleroption=(e)=>{
setOptions(e.target.value)
setIsapi(true)
      }

useEffect(() => {
  async function fetchProducts() {
    try {
      let sortParam = "";
      if (options === "2") sortParam = "&sort=asc";
      else if (options === "3") sortParam = "&sort=desc";
      // پیش‌فرض بدون sort ارسال می‌شود
console.log("Sending min:", changevalue[0], "max:", changevalue[1]);

      const res = await fetch(
        `/api/products/filter?min=${changevalue[0]}&max=${changevalue[1]}${sortParam}`,
        { cache: 'no-store' }
      );
      const data = await res.json();
      console.log("Fetched data:", data);

      setProducts(data);
    } catch (err) {
      console.error(err);
      
      setProducts([]);
    }
  }
  fetchProducts();
}, [options, changevalue]);


  return (
    
    <div className='overflow-x-hidden'>
        <div className='relative h-[500px]  overflow-x-hidden'>
            <Image src='/back1.jpg' width={1500} height={800} className='absolute h-96 '/>
<p className='absolute text-white font-bold text-6xl mt-12' style={{marginLeft:'30rem'}}>
Coffee Capsule</p>
<Link href='/products'></Link>
<div className="flex flex-col">
<div className="flex gap-8 flex-wrap ">
    <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>Coffee Capsule
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-10 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-28 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>همه موارد
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6  text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>35</Link>
    </div>
     <div className="flex flex-col text-right ml-16 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>Italian Passion
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>قهوه اسپشیالیتی
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>جدیدترین محصولات
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-20 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-32 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold ml-6 '>قهوه پرمیوم
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold ml-8 '>قهوه تجاری
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold ml-16 '>هورکا

      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>محصولات ویژه
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
      <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>فروش سازمانی
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-24 text-sm'>7</Link>
    </div>
   
</div>
<div className="flex gap-8 flex-wrap justify-center mr-24 -mt-14 ">
    <div className="flex flex-col text-right ml-24 mt-36">
        <Link href='/products' className='text-white absolute  font-bold '>کپسول قهوه
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-7 text-sm'>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-20 text-sm'>7</Link>
    </div>
     <div className="flex flex-col text-right ml-28 mt-36">
        <Link href='/products' className='text-white absolute  font-bold ml-8 '>قهوه
      </Link>
        <Link href='/products' className='absolute text-gray-300 mt-6  text-sm '>   محصول</Link>
        <Link href='/products' className='absolute text-gray-300 mt-6 ml-12 text-sm'>35</Link>
    </div>
    
   
</div>
</div>
        </div>
        <div className="flex relative -mt-24">
            <select name="" id="" onChange={changehandleroption} value={options}>
                <option value="1">مرتب سازی پیش فرض</option>
                <option value="2">مرتب سازی براساس هزینه:کم به زیاد</option>
                <option value="3">مرتب سازی براساس:زیاد به کم</option>

            </select>
            <p className='font-bold absolute' style={{marginLeft:'50rem'}}>Coffee Capsule /</p>
            <Link href='/' className='absolute' style={{marginLeft:'59rem'}}>
            خانه
            </Link>
            <p className='absolute' style={{marginLeft:'74rem'}}>:فیلتر بر اساس قیمت</p>
        </div>
        <div className="flex flex-row-reverse w-full px-4 mt-8 gap-8">
       
   <div className="w-[300px] z-50 relative" >             
<Slider
  range
  min={0}
  max={725}
    value={changevalue}    // این مهمه

  onChange={changehandler}
  className='max-w-72 mt-6 z-50 relative' 

/>
<div className="flex  mt-3 relative z-50">
{/* <button className="bg-transparent w-16 font-bold  hover:cursor-pointer" style={{ border: '1px solid brown' }}>
  فیلتر
</button> */}
<p>تومان</p> 
<p>{defaultvalue?"0":changevalue[0].toLocaleString()+',000'}</p> 
<hr className="w-full my-2 border-b border-gray-400" />  
<p>تومان</p> 
<p>{defaultvalue?"725,000":changevalue[1].toLocaleString()+',000'}</p> 
<p>:قیمت</p>
</div>
<h3 className='font-bold text-right mr-3 mt-12'>برترین محصولات</h3>
<div className='flex flex-col mt-2' >
<div className="flex max-w-96 text-right">
    <div className="flex-col text-right">
        <p className='text-right text-sm'>کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( BLUE ) ده -10- عددی</p>
         <div className="flex text-amber-300 mt-2 text-right justify-end">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                  <div className="flex  mt-2 text-sm font-bold text-right justify-end ">
                            <p style={{ color: "#34180E" }}>تومان&nbsp;</p>
                            <p style={{ color: "#34180E" }}>270,000</p>
                        </div>
    </div>
    <Image src='/coffee19.jpg' width={100} height={100}/>
</div>
<hr className='max-w-96 mt-3 text-gray-400' />

<div className="flex max-w-96 text-right ml-32">
    <div className="flex-col text-right">
        <p className='text-right text-sm'>
پودر قهوه ترک</p>
         <div className="flex text-amber-300 mt-2 text-right justify-end">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                  <div className="flex  mt-2 text-sm font-bold text-right justify-end ">
                            <p style={{ color: "#34180E" }}>تومان&nbsp;</p>
                            <p style={{ color: "#34180E" }}>335,000</p>
                        </div>
    </div>
    <Image src='/coffee14.png' width={100} height={100} />
</div>
<hr className='max-w-96 mt-3 text-gray-400' />

<div className="flex max-w-96 text-right">
    <div className="flex-col text-right">
        <p className='text-right text-sm'>کپسول قهوه SETpresso سازگار با دستگاه نسپرسو ( GREEN ) ده -10- عددی</p>
         <div className="flex text-amber-300 mt-2 text-right justify-end">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                                  <div className="flex  mt-2 text-sm font-bold text-right justify-end ">
                            <p style={{ color: "#34180E" }}>تومان&nbsp;</p>
                            <p style={{ color: "#34180E" }}>265,000</p>
                        </div>
    </div>
    <Image src='/coffee20.jpg' width={100} height={100}/>
</div>
</div>
</div>
 <div className="flex-1 flex flex-wrap gap-1 justify-center mr-28 ">
          <Productsfilter products={products}/>
                  </div> 
</div>
</div>
  )

}
