

import Image from 'next/image';
import Link from 'next/link'
import React, { Suspense } from 'react'
import { FaTags } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import AllBrands from '../_component/Allbrands/AllBrands';
import { ImSpinner6 } from 'react-icons/im';

export default async function Brands() {
 
  return (
    <>
     <div className="min-h-screen bg-gray-50/50">
        <div className="bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white">
          <div className="container mx-auto px-4 py-10 sm-py-14">
            <nav className="flex items-center gap-2 flex-wrap mb-6 text-sm">
              <Link
                href="/"
                className="font-medium text-white/70 hover:text-white transition"
              >
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-medium">Brands</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center text-white bg-white/20 backdrop-blur-sm ring-1 ring-white/30 shadow-xl rounded-2xl size-16">
                <FaTags className="text-3xl" />
              </div>
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl">Top Brands</h1>
                <p className="mt-1 text-white/80">
                 Shop from your favorite brands
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">

          <Suspense fallback={<div className="flex flex-col items-center justify-center gap-3">
                      <ImSpinner6 className="animate-spin text-violet-600 text-5xl "/>
                      <p className=" font-medium text-gray-500 text-xl ">Loading Products....</p>
                    </div>}>
            <AllBrands/>
          </Suspense>

          
          
          
        </div>
      </div>
    
    </>
  )
}
