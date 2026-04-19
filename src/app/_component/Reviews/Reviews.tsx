"use client";

import React, { useState } from "react";
import { FaBox } from "react-icons/fa6";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaTruck, FaShieldAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaRotateLeft } from "react-icons/fa6";
import { div } from "framer-motion/client";
import { SingleProduct } from "@/api/types/types";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";


export default function Reviews({
  singleProduct,
}: {
  singleProduct: SingleProduct | undefined;
}) {
  const [review, setreview] = useState(false);
  const [details, setdetails] = useState(true);
  const [shipping, setshipping] = useState(false);
  const fullStars = Math.floor(singleProduct?.ratingsAverage!);
  const hasHalfStar = singleProduct?.ratingsAverage! % 1 > 0.4;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
 
  return (
    <>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="rounded-lg shadow-sm bg-white">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  className={`flex items-center gap-2 py-4 px-6 font-medium border-b-2 cursor-pointer transition-all   duration-300 ${details ? "bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]" : "hover:text-[#16A34A] hover:bg-gray-50  bg-transparent text-gray-600"}`}
                  onClick={() => {
                    setdetails(true);
                    setreview(false);
                    setshipping(false);
                  }}
                >
                  <FaBox />
                  Product Details
                </button>
                <button
                  className={`flex items-center gap-2 py-4 px-6 font-medium border-b-2 cursor-pointer transition-all   duration-300 ${review ? "bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]" : "hover:text-[#16A34A] hover:bg-gray-50  bg-transparent text-gray-600"}`}
                  onClick={() => {
                    setdetails(false);
                    setreview(true);
                    setshipping(false);
                  }}
                >
                  <FaStar />
                  Reviews ({singleProduct?.ratingsQuantity})
                </button>
                <button
                  className={`flex items-center gap-2 py-4 px-6 font-medium border-b-2 cursor-pointer transition-all   duration-300 ${shipping ? "bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]" : "hover:text-[#16A34A] hover:bg-gray-50  bg-transparent text-gray-600"}`}
                  onClick={() => {
                    setdetails(false);
                    setreview(false);
                    setshipping(true);
                  }}
                >
                  <FaTruck />
                  Shipping & Returns
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {details && (
                  <div>
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-gray-900">
                        About this Product
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {singleProduct?.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                      <div className="p-4 rounded-lg bg-gray-50">
                        <h4 className="mb-3 font-medium text-gray-900">
                          Product Information
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500 font-medium">
                              Category
                            </span>
                            <span className="text-gray-900 font-medium">
                              {singleProduct?.category.name}
                            </span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500 font-medium">
                              Subcategory
                            </span>
                            <span className="text-gray-900 font-medium">
                              {singleProduct?.subcategory[0].name}
                            </span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500 font-medium">
                              Brand
                            </span>
                            <span className="text-gray-900 font-medium">
                              {singleProduct?.brand.name}
                            </span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500 font-medium">
                              Items Sold
                            </span>
                            <span className="text-gray-900 font-medium">
                              {singleProduct?.sold}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-gray-50">
                        <h4 className="mb-3 font-medium text-gray-900">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span className="text-gray-500 font-medium">
                              Premium Quality Product
                            </span>
                          </li>
                          <li className="flex items-center text-sm">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span className="text-gray-500 font-medium">
                              100% Authentic Guarantee
                            </span>
                          </li>
                          <li className="flex items-center text-sm">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span className="text-gray-500 font-medium">
                              Fast & Secure Packaging
                            </span>
                          </li>
                          <li className="flex items-center text-sm">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span className="text-gray-500 font-medium">
                              Quality Tested
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {review && (
                  <div>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-gray-900 mb-2">
                          {singleProduct?.ratingsAverage}
                        </div>
                        <div className="text-yellow-400 flex text-lg justify-center ">
                          {[...Array(fullStars)].map((_, i) => (
                            <FaStar key={`full-${i}`} />
                          ))}

                          {hasHalfStar && <FaStarHalfAlt />}

                          {[...Array(emptyStars)].map((_, i) => (
                            <FaRegStar key={`empty-${i}`} />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 font-medium mt-2">
                          Based on {singleProduct?.ratingsQuantity} reviews
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            5 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            60%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            4 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "25%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            25%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            3 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "5%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">5%</span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            2 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "5%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">5%</span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            1 star
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: "5%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">5%</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-center py-8">
                        <FaStar className=" text-4xl text-gray-300 mb-3 mx-auto" />
                        <p className="text-gray-500 font-medium">
                          Customer reviews will be displayed here.
                        </p>
                        <button className="mt-4 cursor-pointer text-[#16A34A] hover:text-primary-700 font-medium">
                          Write a Review
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {shipping && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <FaTruck className="text-xl" />
                          </div>
                          <h4 className="font-semibold text-gray-900">
                            Shipping Information
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck
                              className="text-[#16a34a] text-lg mr-2"
                             
                            />
                            <span>Free shipping on orders over $50</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span>Standard delivery: 3-5 business days</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span>
                              Express delivery available (1-2 business days)
                            </span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span>Track your order in real-time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <FaRotateLeft className="text-xl" />
                          </div>
                          <h4 className="font-semibold text-gray-900">
                            Returns Refunds
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span>30-day hassle-free returns</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span>Full refund or exchange available</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span>Free return shipping on defective items</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck className="text-[#16a34a] text-lg mr-2" />
                            <span>Easy online return process</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                      <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                        <FaShieldAlt className="text-2xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Buyer Protection Guarantee
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          Get a full refund if your order doesn't arrive or
                          isn't as described. We ensure your shopping experience
                          is safe and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
   
    </>
  );
}
