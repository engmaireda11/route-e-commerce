import React, { Suspense } from "react";
import HomeProducts from "../_component/Product/HomeProducts";
import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa";

import AllProucts from "../_component/Allproducts/AllProucts";
import { ImSpinner6 } from "react-icons/im";
import { div } from "framer-motion/client";
import AllSubBrands from "../_component/AllSubBrands/AllSubBrands";
import ProductOfCategory from "../_component/ProductOfCategory/ProductOfCategory";


export default async function Products({searchParams}:{searchParams:Promise<{brand?:string , category?:string , subcategory?:string}>}) {
  const query =await searchParams
  const brandId =query.brand
  const categoryId =query.category
  const subcategoryId =query.subcategory
  console.log(query);
  
  return (
    <>
    {brandId?<>
    <AllSubBrands id={brandId} />
    </>
    
    :  subcategoryId&&categoryId?<ProductOfCategory id={subcategoryId} categoryId={categoryId}  />:
    
    <div className="min-h-screen bg-gray-50/50">
        <div className="text-white bg-linear-to-br from-[#16A34A] to-[#4ADE80]">
          <div className="container mx-auto px-4 py-10 sm-py-14">
            <nav className="flex items-center gap-2 flex-wrap mb-6 text-sm">
              <Link
                href="/"
                className="font-medium text-white/70 hover:text-white transition"
              >
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-medium">All Products</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center text-white bg-white/20 backdrop-blur-sm ring-1 ring-white/30 shadow-xl rounded-2xl size-16">
                <FaBoxOpen className="text-3xl" />
              </div>
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl">All Products</h1>
                <p className="mt-1 text-white/80">
                  Explore our complete product collection
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          
          <Suspense fallback={<div className="flex flex-col items-center justify-center gap-3">
            <ImSpinner6 className="animate-spin text-[#16A34A] text-5xl "/>
            <p className=" font-medium text-gray-500 text-xl ">Loading Products....</p>
          </div>}>
          <div className="text-sm mb-6 font-medium text-gray-500">
            Showing 40 products
          </div>
            <AllProucts />
          </Suspense>
        </div>
      </div>}
  
    </>
  );
}
