import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { ImSpinner6 } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { getBrand } from "@/api/services/project.services";
import { Brand } from "@/api/types/types";
import SubBrandPruducts from "./SubBrandPruducts";
export default  async function AllSubBrands({id}:{id:string})  {

    const brand =await getBrand(id)
    

  return (
    <>
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
              <Link
                href="/brands"
                className="font-medium text-white/70 hover:text-white transition"
              >
                Brands
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-medium">{brand?.name}</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center text-white bg-white/20 backdrop-blur-sm ring-1 ring-white/30 shadow-xl rounded-2xl size-16">
                <Image
                  src={brand?.image || ""}
                  alt={brand?.name||"Brand Image"}
                  className="object-contain w-12 h-12 "
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl">{brand?.name}</h1>
                <p className="mt-1 text-white/80">
                 {`Shop ${brand?.slug} products`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaFilter/>

              Active Filters:
            </span>
            <a
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors"
              href="/products"
            >
             <FaTags/>
             {brand?.name}
    <IoCloseOutline/>
            </a>
            <a
              className="text-sm text-gray-500 hover:text-gray-700 underline"
              href="/products"
            >
              Clear all
            </a>
          </div>

          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center gap-3">
                <ImSpinner6 className="animate-spin text-green-600 text-5xl " />
                <p className=" font-medium text-gray-500 text-xl ">
                  Loading Products....
                </p>
              </div>
            }
          >
            <SubBrandPruducts id={id} />


          </Suspense>
        </div>
      </div>
    </>
  );
}
