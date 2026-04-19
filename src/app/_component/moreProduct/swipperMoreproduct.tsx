// Import Swiper React components

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
// @ts-ignore
import "swiper/css";

import { Product } from "@/api/types/types";
import SinglProduct from "../singleProduct/SinglProduct";

export default function MoreSwipper({
  categoryProduct,
}: {
  categoryProduct: Product[]|undefined;
}) {
  console.log("dkjksqo", categoryProduct);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">
              You May Also <span className="text-emerald-600">Like</span>
            </h2>
          </div>
          <div className="flex space-x-2">
            <button className="h-10 w-10 rounded-full  bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#F0FDF4] hover:text-[#16A34A] prev cursor-pointer transition">
              <FaAngleLeft />
              <span className="sr-only">Previous</span>
            </button>
            <button className="h-10 w-10 rounded-full next bg-gray-100 flex cursor-pointer items-center justify-center text-gray-600 hover:bg-[#F0FDF4] hover:text-[#16A34A] transition">
              <FaAngleRight />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {categoryProduct?.map((product) => (
            <SwiperSlide key={product.id}>
              <SinglProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
