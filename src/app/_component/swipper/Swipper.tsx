// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import mainImge from "../../../assests/main.png";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";// مكتبه علشان اعمل الانيمشن

// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PiHeadsetBold } from "react-icons/pi";
import { FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default () => {
  return (<>
    <div className="relative">
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ clickable: true  ,  renderBullet: (index, className) => {
      return `<span class="${className} custom-bullet"></span>`;
    }}}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div
            className="h-100  flex items-center justify-center"
            style={{
              backgroundImage: ` url(${mainImge.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="h-ful w-full bg-linear-to-r from-green-500/90 to-green-400/50 absolute inset-0 py-20">
              <div className="text-white container content-center h-full px-8 mx-auto">
                   <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white font-bold text-3xl max-w-96 mb-4"
        >
          Fresh Products Delivered to your Door
        </motion.h2>

       
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white font-medium"
        >
          Get 20% off your first order
        </motion.p>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 mt-4"
        >
          <Link
            href="products"
            className="py-2 px-6 rounded-lg bg-white border-2 border-white/50 text-[#00C950] font-semibold transition hover:scale-105"
          >
            Shop Now
          </Link>
          <Link
            href="#"
            className="py-2 px-6 rounded-lg bg-transparent border-2 border-white/50 text-white font-semibold transition hover:scale-105"
          >
            View Deals
          </Link>
        </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-100  flex items-center justify-center"
            style={{
              backgroundImage: ` url(${mainImge.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="h-ful w-full bg-linear-to-r from-green-500/90 to-green-400/50 absolute inset-0 py-20">
              <div className="text-white container content-center h-full px-8 mx-auto">
                <h2 className="font-bold text-3xl max-w-96 mb-4">
                  Premium Quality Guaranteed
                </h2>
                <p className="font-medium">Fresh from farm to your table</p>
                <div className="flex items-center gap-2 mt-4">
                  <Link
                    href="products"
                    className="py-2 px-6 rounded-lg bg-white border-2 border-white/50  text-blue-500
                  font-semibold transition hover:scale-105"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="about"
                    className="py-2 px-6 rounded-lg  transition hover:scale-105 bg-transparent border-2 border-white/50  text-white font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-100  flex items-center justify-center"
            style={{
              backgroundImage: ` url(${mainImge.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="h-ful w-full bg-linear-to-r from-green-500/90 to-green-400/50 absolute inset-0 py-20">
              <div className="text-white container content-center h-full px-8 mx-auto">
                <h2 className="font-bold text-3xl max-w-96 mb-4">
                  Fast & Free Delivery
                </h2>
                <p className="font-medium">Same day delivery available</p>
                <div className="flex items-center gap-2 mt-4">
                  <Link
                    href="products"
                    className="py-2 px-6 rounded-lg bg-white border-2 border-white/50  text-purple-500
                  font-semibold transition hover:scale-105"
                  >
                    Order Now
                  </Link>
                  <Link
                    href="about"
                    className="py-2 px-6 rounded-lg  transition hover:scale-105 bg-transparent border-2 border-white/50  text-white font-semibold"
                  >
                    Delivery Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="prev-btn absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#16A34A] hover:text-green-600   size-12 rounded-full hidden md:flex shadow-lg items-center justify-center hover:scale-105 duration-100 transition z-10  ">
        <IoIosArrowBack className="text-2xl" />
      </div>
      <div className=" next-btn absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white/90 hover:bg-white text-[#16A34A] hover:text-green-600  size-12 rounded-full hidden md:flex shadow-lg items-center justify-center hover:scale-105 duration-100 transition z-10  ">
        <IoIosArrowForward className="text-2xl" />
      </div>
    </div>

    <section>
      <div className="bg-gray-50
      py-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
               className="flex items-center gap-4 p-4  rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
                          <div className="flex items-center justify-center  text-blue-500 bg-blue-50 size-12 rounded-full">
                            <FaTruck />
                          </div>
                          <div>
                            <h4 className="text-[#101828] font-semibold text-sm">
                              Free Shipping
                            </h4>
                            <p className="text-gray-500 font-medium text-[12px]">
                              On orders over 500 EGP
                            </p>
                          </div>
                        </motion.div>
                        <motion.div 
                initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6}} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
                          <div className="flex items-center justify-center  text-emerald-500 bg-emerald-50 size-12 rounded-full ">
                            <FaArrowRotateLeft />
                          </div>
                          <div>
                            <h4 className="text-[#101828] font-semibold text-sm">
                              Easy Returns
                            </h4>
                            <p className="text-gray-500 font-medium text-[12px]">
                              14-day return policy
                            </p>
                          </div>
                        </motion.div>
                        <motion.div 
                initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
                          <div className="flex items-center justify-center  size-12 rounded-full bg-orange-50 text-orange-500">
                            <FaShieldAlt />
                          </div>
                          <div>
                            <h4 className="text-[#101828] font-semibold text-sm">
                              Secure Payment
                            </h4>
                            <p className="text-gray-500 font-medium text-[12px]">
                              100% secure checkout
                            </p>
                          </div>
                        </motion.div>
                        <motion.div 
                initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition duration-300">
                          <div className="flex items-center justify-center  text-purple-500 bg-purple-50 size-12 rounded-full ">
                            <PiHeadsetBold />
                          </div>
                          <div>
                            <h4 className="text-[#101828] font-semibold text-sm">
                              24/7 Support
                            </h4>
                            <p className="text-gray-500 font-medium text-[12px]">
                              Contact us anytime
                            </p>
                          </div>
                        </motion.div>

          </div>
        </div>
      </div>
    </section>
</>
  );
};
