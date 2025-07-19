"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams, usePathname } from 'next/navigation';

export default function page() {
  const [changevalue,setChangeValue]=useState(1)
  const[board,setBoard]=useState(true)
    const[product,setProduct]=useState([])
    const params = useParams();
        const pathname = usePathname();
    
const id = params.id;
console.log("id",id);


  const increase=()=>{
   setChangeValue(changevalue+1)
  }
  const decrease=()=>{
   setChangeValue(changevalue-1)
  }
  useEffect(()=>{
    fetch('/api/products/detail')
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])
  return (
    <>
    <div className='flex'>
      <div className="fle flex-col">
        <div className="flex text-sm text-gray-400 mt-16">
        <Link href='/'>
        کپسول قهوه SETpresso سازگار با دستگاههای نسپرسو _ قرمز 10 عددی ( Sumatra ) LIMITED EDITION
        </Link>
        /
         <Link href='/'>
         Coffee Capsule 
        </Link>
        /
          <Link href='/'>
        خانه 
        </Link>
        </div>
        <p className='font-bold w-[30rem] text-right text-xl mt-7 ml-56'>کپسول قهوه SETpresso سازگار با دستگاههای نسپرسو _ قرمز 10 عددی ( Sumatra ) LIMITED EDITION
</p>
<div className="flex gap-3 justify-end">
          <p className='text-sm text-gray-500'>
(دیدگاه کاربر 2)</p>
<div className="flex text-amber-300 justify-end mt-2 ">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                
                        </div>
                        <div className="flex font-bold text-amber-950 justify-end mt-3 text-2xl">
                        <p>تومان</p>
                        <p>275,000 
</p>
</div>
<p className=' flex text-sm text-gray-500 max-w-[43rem] text-right justify-end mt-4 ml-4'>کپسول‌ قهوه سوماترا شامل 10 کپسول قهوه 100% عربیکا از بهترین مزارع کلمبیا، اتیوپی و سوماترا است که با رست ملایم و طعم‌های متعادل تهیه شده است. این کپسول‌ها، از جمله کپسول قهوه دی‌کف و تک‌خاستگاه، با دستگاه‌های نسپرسو کاملاً سازگارند و برای اسپرسو، لونگو و نوشیدنی‌های بر پایه شیر ایده‌آل هستند.</p>
<hr className='mt-7 text-gray-300' />
<p className='flex justify-end mt-3'>موجود در انبار</p>
<div className='flex gap-2 mt-9 justify-end'>
  <button className='bg-green-600 text-white h-10 w-36 font-bold hover:bg-amber-950'>افزودن به سبد خرید</button>
  <div className="flex">
<button className='w-6' style={{border:'1px solid gray'}}onClick={increase}>+</button>
<input type="text" className='w-9 text-center' style={{border:'1px solid gray'}} value={changevalue<1?'1':changevalue}   readOnly
/>
<button className='w-6' style={{border:'1px solid gray'}} onClick={decrease}>-</button>
</div>
</div>
<hr className='mt-7 text-gray-300' />
<div className="flex justify-end gap-1 mt-4 font-bold">
  <p> Rdsumatra</p>
  <p>:شناسه محصول</p>
</div>
<div className="flex justify-end gap-1 mt-4">
  <Link href='/'>
  Coffee Capsule, کپسول قهوه
</Link>
<p className='font-bold'>:دسته</p>
</div>
<div className="flex justify-end gap-1 mt-4">
  <Link href='/'>
قهوه کپسولی, کپسول قهوه, کپسول قهوه ست, کپسول نسپرسو
</Link>
<p className='font-bold'>:برچسب</p>
</div>
<hr className='mt-7 text-gray-300' />

      </div>

    </div>
    <div className="flex justify-center mt-20 gap-10">
  <Link href='/'>
نظرات (2)</Link>
  <Link href='/'>
توضیحات تکمیلی</Link>
 <Link 
  href={`/products/${id}/detail/description`} 
  className={pathname.includes('/description') ? 'text-black font-bold' : 'text-black'}
></Link>

</div>

<hr className='mt-7 text-gray-300' />
<p className='text-gray-500 text-sm text-right max-w-[68rem] ml-48 mt-8'>کپسول قهوه سوماترا قهوه ست، طعم اصیلی از قهوه‌ 100% عربیکا ارائه میدهد. مجموعه 100 عدی کپسول های اورجینال قهوه ست، ترکیبی از قهوه‌های تک‌خاستگاه کلمبیا، اتیوپی و سوماترا است که با دقت برشته‌کاری شده و با دستگاه‌های نسپرسو کاملاً سازگارند. این کپسول ها برای تهیه اسپرسو و نوشیدنی‌های بر پایه شیر کاربرد دارند.</p>
<h1 className='font-bold flex justify-end text-2xl mr-16 mt-6'>ویژگی کپسول‌ قهوه سوماترا</h1>
<ul className='text-sm text-right mt-8 mr-14 flex flex-col space-y-4'>
  <li>100% عربیکا: ترکیب خالص از بهترین دانه‌های قهوه عربیکا.</li>
  <li>سازگاری با دستگاه نسپرسو: مناسب برای تمام دستگاه‌های نسپرسو اورجینال.
</li>
  <li>تجربه طعمی متنوع: از طعم‌های میوه‌ای و گلی تا شکلاتی و ادویه‌ای.
</li>
  <li>مناسب هر زمان: گزینه بدون کافئین برای لذت قهوه در هر ساعت از روز.
</li>
  <li>بدون کافئین: مناسب برای تمامی ساعات روز و کسانی که به کافئین حساسیت دارند
</li>
</ul>
<h4  className='font-bold flex justify-end text-2xl mr-16 mt-6'>معرفی کپسول‌های ست‌پرسو قرمز لیمیتد ادیشن</h4>
<h6  className='font-bold flex justify-end text-2xl mr-16 mt-6'> قهوه کلمبیا دی‌کف (Colombia Decaf).1
</h6>
<p className='text-gray-500 text-sm text-right max-w-[68rem] ml-48 mt-8'>برای کسانی که می‌خواهند طعم قهوه را بدون کافئین تجربه کنند، قهوه کلمبیا دی‌کف انتخابی بی‌نقص است. این قهوه 100% عربیکا با روش‌های استاندارد بدون کافئین شده و طعمی متعادل با نت‌های آجیلی و شکلاتی ارائه می‌دهد. ایده‌آل برای عصاره‌گیری نرمال و لذت‌بردن در هر زمان از روز، بدون نگرانی از بی‌خوابی یا تپش قلب.</p>
<h6  className='font-bold flex justify-end text-2xl mr-16 mt-6'>قهوه اتیوپی سیداما نچرال (Ethiopia Sidam Natural).2

</h6>
<p className='text-gray-500 text-sm text-right max-w-[68rem] ml-48 mt-8'>از مزارع مشهور Daye Bensa در منطقه سیداما، این قهوه با فرآوری نچرال طعمی متعادل با تن‌واری متوسط و نت‌های گلی، شکلاتی و میوه‌های هسته‌دار مانند هلو ارائه می‌دهد. اسیدیته دلپذیر و پس‌مزه شیرین آن، این کپسول را به بهترین انتخاب برای ترکیب با شیر و تهیه لاته یا کاپوچینو تبدیل کرده است.

</p>
<h6  className='font-bold flex justify-end text-2xl mr-16 mt-6'>قهوه کلمبیا مالورکا نچرال (Colombia Malorca Natural).3

</h6>
<p className='text-gray-500 text-sm text-right max-w-[68rem] ml-48 mt-8'>این قهوه از مزارع مالورکا و ایستگاه‌های شستشوی خانواده Londono در کلمبیا، با فرآوری نچرال، طعمی غنی با تن‌واری متوسط تا بالا ارائه می‌دهد. نت‌های آجیلی، شکلاتی و اسیدیته میوه‌ای استوایی، این کپسول را برای اسپرسو و لونگو ایده‌آل می‌کند. پس‌مزه شیرین و ماندگار آن تجربه‌ای به‌یادماندنی خلق می‌کند.

</p>
<h6  className='font-bold flex justify-end text-2xl mr-16 mt-6'>محصولات مشابه

</h6>

<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={5}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
       {product.map((data)=>(
      <SwiperSlide>
       
   <div  className="w-56 h-80 bg-white m-4 shadow rounded">
                    <div className="flex-col">
                <div className="relative group w-[230px] h-48 rounded-t overflow-hidden">
                  <Image
                    src={data.image.trim()}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    alt="product"
                    id="image-pro"
                  />
                  
                  {/* طلق مشکی */}
                  <div className="absolute inset-0  transition duration-500 ease-in-out group-hover:bg-black/50"></div>
                  
                  {/* دکمه افزودن به سبد خرید */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-transparent text-white font-bold px-4 py-2 border border-white rounded hover:cursor-pointer">
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
                        <p style={{ color: "#333333" }} className="text-center text-sm font-bold">{data.title}</p>
                        <div className="flex text-amber-300 justify-center mt-2">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="flex justify-center mt-2 text-sm font-bold">
                            <p style={{ color: "#34180E" }}>تومان&nbsp;</p>
                            <p style={{ color: "#34180E" }}>{data.price}</p>
                        </div>
                    </div>
                </div>
     
      </SwiperSlide>
              ))}

    </Swiper>
</>
  )
}
