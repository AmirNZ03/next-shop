"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from "next/image";

export default function Slider2() {
    return (
        <div className="max-w-2xl mx-auto mt-10">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
            >
                <SwiperSlide>
                    <Image src="/coffee.jpg" alt="coffee" width={600} height={400} className="rounded" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/coffee2.jpg" alt="coffee2" width={600} height={400} className="rounded" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/coffee3.jpg" alt="coffee3" width={600} height={400} className="rounded" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
