"use client";

import { SingleProduct } from "@/api/types/types";
import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa6";
import {
  FaRegHeart,
  FaShareNodes,
  FaTruckFast,
  FaArrowRotateLeft,
} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import AddButton from "../addbutton/AddButton";
import FavBtn from "../favbtn/FavBtn";

export default function TotalPrice({
  singleProduct,
}: {
  singleProduct: SingleProduct | undefined;
}) {
  const [valuePrice, setvalue] = useState(1);
  return (
    <>
      <div className="mb-6">
        <label className="text-sm block font-medium text-gray-700  mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <div className=" flex rounded-lg items-center border-2 border-gray-200 ">
            <button
              className="px-4 cursor-pointer py-3 text-gray-600 transition disabled:opacity-50 hover:bg-gray-100 hover:text-[#16a34a]"
              onClick={() => setvalue((prev) => prev - 1)}
              disabled={valuePrice == 1}
            >
              <FiMinus className="text-xl" />
            </button>
            <input
              type="number"
              className="focus:outline-0 text-center text-lg w-16 font-medium border-0 focus:ring-0"
              min={1}
              max={singleProduct?.quantity}
              value={valuePrice}
              onChange={(e) => {
                let number: number | undefined = Number(e.target.value);
                if (number < 1) {
                  number = 1;
                }
                if ( singleProduct?.quantity && number > singleProduct?.quantity) {
                  number = singleProduct?.quantity;
                }
                setvalue(number);
              }}
            />
            <button
              className="px-4 py-3 cursor-pointer text-gray-600 transition disabled:opacity-50 hover:bg-gray-100 hover:text-[#16a34a]"
              onClick={() => setvalue((prev) => prev + 1)}
              disabled={valuePrice == singleProduct?.quantity}
            >
              <FaPlus />
            </button>
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {singleProduct?.quantity} available
          </span>
        </div>
      </div>
      <div className="mb-6 bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">Total Price</span>
          <span className="text-2xl font-black text-[#16a34a]">
            {(singleProduct?.price ? (singleProduct.price * valuePrice).toFixed(2) : '0.00')} EGP
          </span>
        </div>
      </div>

      <div className=" mb-6 flex items-center gap-3 flex-col sm:flex-row">
        <AddButton word="cart" id={singleProduct?.id}/>
        {/* flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-[#068133] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#16a34a]/25 bg-[#16a34a] */}
        <button className="bg-gray-900 flex-1 cursor-pointer text-white py-3.5 px-6 flex items-center gap-2 justify-center shadow-lg shadow-[#16a34a]/25 font-medium rounded-xl hover:bg-gray-800 transition ">
          <FaBolt />
          <span>Buy Now</span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <FavBtn word="product" id={singleProduct?.id}/>
        
        <button className=" cursor-pointer  bg-transparent rounded-xl border-2 text-gray-700 font-medium transition  px-4 py-3 hover:text-[#16a34a] hover:border-[#35ba66] border-gray-200 ">
          <FaShareNodes className="text-lg" />
        </button>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10  bg-[#F0FDF4] text-[#16A34A] rounded-full flex items-center justify-center shrink-0">
              <FaTruckFast />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">
                Free Delivery
              </h4>
              <p className="text-xs font-medium text-gray-500">
                Orders over $50
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10  bg-[#F0FDF4] text-[#16A34A] rounded-full flex items-center justify-center shrink-0">
              <FaArrowRotateLeft />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">
                30 Days Return
              </h4>
              <p className="text-xs font-medium text-gray-500">Money back</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10  bg-[#F0FDF4] text-[#16A34A] rounded-full flex items-center justify-center shrink-0">
              <FaShieldAlt />
            </div>

            <div>
              <h4 className="font-medium text-gray-900 text-sm">
                Secure Payment
              </h4>
              <p className="text-xs font-medium text-gray-500">
                100% Protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
