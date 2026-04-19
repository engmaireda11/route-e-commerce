import Link from "next/link";
import React from "react";
import { RiHome4Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import ProductImagesSlider from "@/app/_component/ProductImagesSlider/ProductImagesSlider";
import { getProduct } from "@/api/services/project.services";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import TotalPrice from "@/app/_component/TotalPrice/TotalPrice";
import Reviews from "@/app/_component/Reviews/Reviews";
import MoreProduct from "@/app/_component/moreProduct/MoreProduct";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const id = param.id;
  const singleProduct = await getProduct(id);
  console.log("jijijiji", singleProduct);
  const fullStars = Math.floor(singleProduct?.ratingsAverage!);
  const hasHalfStar = singleProduct?.ratingsAverage! % 1 > 0.4;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <>
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm font-medium ">
            <li className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-gray-600 transition hover:text-[#16A34A]"
              >
                <RiHome4Fill />
                Home
              </Link>
              <IoIosArrowForward className="text-gray-600 " />
            </li>
            <li className="flex items-center">
              <Link
                href={`/categories/${singleProduct?.category._id}`}
                className="flex items-center gap-1.5 text-gray-600 transition hover:text-[#16A34A]"
              >
                {singleProduct?.category.name}
              </Link>
              <IoIosArrowForward className="text-gray-600 " />
            </li>
            <li className="flex items-center">
              <Link
                href={`/products?subcategory=${singleProduct?.subcategory[0]._id}&category=${singleProduct?.category._id}`}
                className="flex items-center gap-1.5 text-gray-600 transition hover:text-[#16A34A]"
              >
                {singleProduct?.subcategory[0].name}
              </Link>
              <IoIosArrowForward className="text-gray-600 " />
            </li>
            <li className="capitalize">
              {singleProduct?.slug.split("-").join(" ")}
            </li>
          </ol>
        </div>
      </nav>
      <section className="py-6 ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="shadow-sm rounded-xl p-4 bg-white sticky top-4  ">
                <ProductImagesSlider images={singleProduct?.images || []} />
              </div>
            </div>
            <div className="lg:w-3/4">
              <div className="bg-white shadow-sm rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Link
                    href={`/categories/${singleProduct?.category._id}`}
                    className=" text-xs font-medium rounded-full text-[#15803D] bg-[#F0FDF4] px-3 py-1.5 "
                  >
                    {singleProduct?.category.name}
                  </Link>
                  <span className=" text-xs rounded-full text-[#364153] font-medium bg-[#F3F4F6] px-3 py-1.5 ">
                    {singleProduct?.brand.name}
                  </span>
                </div>
                <h2 className="text-gray-900 text-2xl mb-3 lg:text-3xl font-bold">
                  {singleProduct?.slug.split("-").join(" ")}
                </h2>
                <div className="flex items-center mb-4 gap-3">
                  <div className="mr-2 flex text-amber-500">
                    <div className="text-yellow-400 flex items-center gap-1 text-lg">
                      {[...Array(fullStars)].map((_, i) => (
                        <FaStar key={`full-${i}`} />
                      ))}

                      {hasHalfStar && <FaStarHalfAlt />}

                      {[...Array(emptyStars)].map((_, i) => (
                        <FaRegStar key={`empty-${i}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {`${singleProduct?.ratingsAverage} ( ${singleProduct?.ratingsQuantity}reviews ) `}
                  </span>
                </div>
                <div className="mb-6 flex items-center gap-3 flex-wrap">
                  {singleProduct?.priceAfterDiscount?<>
                  <span className="text-gray-900 font-bold text-3xl">
                    {singleProduct?.priceAfterDiscount} EGP
                  </span>
                  <span className="text-gray-400 line-through text-lg">
                    {singleProduct?.price} EGP
                  </span>
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">Save  {Math.round(
                  100 - (singleProduct.priceAfterDiscount / singleProduct.price) * 100,
                )}%</span>

                  </>:<span className="text-gray-900 font-bold text-3xl">
                    {singleProduct?.price} EGP
                  </span>}
                  
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex items-center gap-1.5 text-sm px-3 py-1.5  font-medium rounded-full bg-green-50 text-green-700">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    In Stock
                  </span>
                </div>
                <div className="mb-6 pt-5 border-t border-gray-100">
                    <p className="text-gray-600 font-medium">
                        {singleProduct?.description}
                    </p>

                </div>

                <TotalPrice singleProduct={singleProduct}/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews singleProduct={singleProduct}/>
       <MoreProduct id={singleProduct!?.category._id}/>
    </>
  );
}
