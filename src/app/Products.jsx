import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "./products.css"
import Link from "next/link";
export default async function Products() {
    const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_SITE_URL;
    const res = await fetch(`${BASE_URL}/api/products/pro1`, { cache: "no-store" });
    const datas = await res.json();

    return (
        <>
            {datas.map((data) => (
                <div key={data.id} className="w-56 h-80 bg-white m-4 shadow rounded">
                    <div className="flex-col">
                 
 <div className="relative group w-[230px] h-48 rounded-t overflow-hidden">
  <Image
    src={data.image}
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


                        <Link style={{ color: "#333333" }} className="text-center text-sm font-bold" href={`products/${data.id}/detail`} >{data.title}</Link>
                        <div className="flex text-amber-300 justify-center mt-2">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <div className="flex justify-center mt-2 text-sm font-bold">
                            <p style={{ color: "#34180E" }}>تومان&nbsp;</p>
                            <p style={{ color: "#34180E" }}>{data.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
