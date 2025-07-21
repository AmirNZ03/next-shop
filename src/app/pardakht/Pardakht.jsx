import React, { useEffect, useState } from 'react'

export default function Pardakht() {
        const [cartItems, setCartItems] = useState([]);
          const [loading, setLoading] = useState(false);

useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        } else {
            setCartItems(propCartItems); // اگر لوکال نبود، prop استفاده شود
        }
    }, [cartItems]);
 
const handlePayment = async () => {
    setLoading(true);
    try {
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                 amount: cartItems.reduce((total, item) => total + item.price * item.quantity * 1000, 0),

                description: "خرید از فروشگاه نکست",
                email: "test@example.com",
                mobile: "09123456789"
            })
        });
        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        } else {
            alert('خطا در پرداخت: ' + data.message);
        }
    } catch (error) {
        alert('خطا در اتصال به سرور یا پرداخت: ' + error.message);
    } finally {
        setLoading(false);
    }
};

  return (
    <>
{cartItems.map((item)=>(
    <>
<div className="flex text-sm">
    <div className="flex text-sm ml-3 mt-5">
  <span className=' text-xs mt-2 mr-1'>تومان</span>

  <span className='font-bold text-amber-950 mt-2'>
        {(item.price * item.quantity * 1000).toLocaleString()}
</span>

</div>
<div className="flex flex-col ml-36 text-right max-w-[15rem]">
<p>{item.name}</p>
<span className='text-gray-400 mt-2'>x {item.quantity}</span>
</div>
</div>
<hr className='text-gray-300' />
</>
))}
<div className="flex  justify-around ">
    <div className="flex text-left mr-48 gap-1">
    <span className='text-xs mt-2'>تومان</span>
     <p className='font-bold text-amber-950 mt-2 mr-16'>{cartItems.reduce((total, item) => total + item.price * item.quantity * 1000, 0).toLocaleString()}</p>
</div>
    <p className='mr-10'>قیمت کل
</p>
</div>
<hr className='text-gray-300' />
<div className="flex  justify-around">
     <p className='font-bold text-amber-950 mt-2 text-sm mr-20'>ارسال توسط پیک موتوری
</p>

    <p className='ml-16 mt-2 text-sm'>
        حمل و نقل

</p>

</div>
<hr className='text-gray-300' />

<div className="flex  justify-around">
 <div className="flex text-left mr-48 gap-1 mt-3">
    <span className='text-xs mt-2'>تومان</span>
     <p className='font-bold text-amber-950 mt-2 mr-16'>{cartItems.reduce((total, item) => total + item.price * item.quantity * 1000, 0).toLocaleString()}</p>
</div>

    <p className='ml-16 mt-6 text-sm'>
مجموع
</p>


</div>
<button
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 flex justify-center text-center  mt-10"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'در حال انتقال...' : 'پرداخت'}
      </button>
</>

  )
}
