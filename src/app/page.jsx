"use client"
import Image from "next/image";
import Products from "./Products";
import Products2 from "./Products2";
import Slider from "./Slider";
import Products3 from "./Products3";
import Products4 from "./Products4";
import Link from "next/link";
import Slider2 from "./Slider2";
import { FaRegMessage } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import Login from "./Login";

export default  function Home() {


  return (
    <>
    <Slider/>
          <h4 className="flex justify-center font-bold text-green-900 text-4xl mt-14">انواع قهوه</h4>
          <p className="flex justify-center  text-gray-800 text-sm mt-6">Coffee</p>
<div className="flex flex-wrap mt-6 ml-8 ">
 <Products/>
          </div>
<Image src='/setpresso.jpg' width={1250} height={100} className="ml-12 mt-11"/>  
<div className="flex justify-center"> 
          <h4 className="flex justify-center font-bold text-green-900 text-4xl mt-14">SETPRESSO 
</h4>
<h4 className="flex justify-center font-bold text-green-900 text-4xl mt-14">کپسول های</h4>
</div>
          <p className="flex justify-center  text-gray-800 text-sm mt-6">سازگار با دستگاه های نسپرسو

</p>     
<div className="flex flex-wrap mt-6 ml-8 ">
  <Products2/>
          </div> 
           <h4 className="flex justify-center font-bold text-green-900 text-4xl mt-14">          یک کیلویی ها  
</h4>
          <p className="flex justify-center  text-gray-800 text-sm mt-6">فروش سازمانی

</p>
<div className="flex flex-wrap mt-6 ml-8 ">
  <Products3/>
          </div>
                   <h4 className="flex justify-center font-bold text-green-900 text-4xl mt-14"> هورکا
 
</h4>
          <p className="flex justify-center  text-gray-800 text-sm mt-6">هتل، رستوران و کافه



</p>
<div className="flex flex-wrap mt-6 ml-8 ">
  <Products4/>
          </div>
                            {/* <h4 className="flex justify-center font-bold text-green-900 text-4xl mt-14">مقالات ما
 
</h4>
          <p className="flex justify-center  text-gray-800 text-sm mt-6">دانستنی های جذاب دنیای قهوه
</p> */}
{/* <Slider2/> */}
{/* <div className="relative w-full">
  <div className="absolute">
<Image src='/americano-vs-long-.png' width={300} height={300} />
<div className="absolute">
  <div className="flex flex-col">
  <p>15</p>
  <p>تیر</p>
  </div>
</div>
<div className="absolute">
  <p>دسته بندی نشده</p>
</div>
<div className="absolute">
  <Link href="/">
  چرا قهوه صبحگاهی برای قلب شما بهتر است؟
</Link>
</div>
<div className="flex">
<FaRegMessage />
<CiShare2 />
<p>mohebi</p>
<FaRegCircleUser />
<p>نویسنده</p>
</div>
</div>
</div> */}


          <div className="w-full bg-gray-100" style={{height:'64rem;'}}>
<div className="flex">
  <div className="flex-col">
  <p className="font-bold text-green-900 text-3xl mt-48 ml-48 ">باشگاه مشتریان ست</p>
  <p className="  text-gray-500 text-sm ml-48 mt-4">برای مشتریان وفادار قهوه ست</p>
  <Link href="/" className="text-sm font-bold underline ml-48 mt-6">
  اطلاعات بیشتر
  </Link>
  </div>
  <div className="flex-col">
    <p className="font-bold text-green-900 text-3xl  mt-28 ml-72  ">خرید قهوه ، به سبک حرفه ای ها</p>
    <p className="  text-gray-500 text-sm  mt-6 ml-96  ">زیبایی امروز رو با قهوه “ست” کنید</p>
    <Link href="/" className="text-sm font-bold underline mt-12" style={{marginLeft:'29rem;'}}>
    تماس با ما</Link>
    <Image src="/coffee-image-1.jpg" width={300} height={300} className="ml-80 mt-10"/>
  </div>
</div>
<div className="flex">
  <div className="flex-col ">
    <img src="/coffee-svg-2.svg" style={{marginLeft:'35rem'}} alt="" className="h-16 w-16 mt-16" />
    <h4 className="text-amber-950 font-bold text-4xl mt-8" style={{marginLeft:'27rem'}}>چرا قهوه ست</h4>
    <p className="text-sm text-right max-w-96 text-gray-500 ml-60 mt-10">برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه ضامن این ویژگیها است.</p>
    <div className="flex col ml-96 mt-4 " style={{flexDirection:'column' }}>
    <button className="w-24 h-10" style={{border:'1px solid gray'}}>فروشگاه</button>
    <button className="w-24 h-10 text-white bg-amber-950 mt-5">بیشتر بخوانید</button>
    </div>
  </div>
  <Image src="/Home32.jpg" width={500} height={500} className="ml-10 mt-10"/>
</div>
          </div>
  





</>
  );
}
