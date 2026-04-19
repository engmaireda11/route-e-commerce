import { addToCart } from "@/actions/cart.action";
import { Product } from "@/api/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaStarHalfAlt, FaRegStar, FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import AddButton from "../addbutton/AddButton";
import FavBtn from "../favbtn/FavBtn";

export default function SinglProduct({ product }: { product: Product }) {
  const fullStars = Math.floor(product.ratingsAverage);
  const hasHalfStar = product.ratingsAverage % 1 > 0.4;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);


  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition hover:shadow-lg">
        <div className="relative">
          <Image
            src={product.imageCover}
            alt={product.slug}
            className="h-60 w-full object-contain"
            width={300}
            height={300}
          />
          {product.priceAfterDiscount && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white px-2 py-1 text-xs rounded font-medium">
                -
                {Math.round(
                  100 - (product.priceAfterDiscount / product.price) * 100,
                )}
                %
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <FavBtn word="single" id={product._id}/>
            
            <button className="size-8 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm transition hover:text-green-600 mb-2 cursor-pointer">
              <FaArrowsRotate />
            </button>
            <Link
              href={`/products/${product._id}`}
              className="size-8 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm transition hover:text-green-600"
            >
              <FaEye />
            </Link>
          </div>
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs text-gray-500 font-medium">
            {product.category.name}
          </p>
          <h3 className="font-medium mb-1 cursor-pointer">
            <Link href={`/products/${product._id}`} className="line-clamp-2">
              {product.title}
            </Link>
          </h3>

          <div className="flex items-center mb-2">
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
            <span className="text-xs text-gray-500 font-medium">
              {`${product.ratingsAverage}(${product.ratingsQuantity}) `}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              {product.priceAfterDiscount ? (
                <>
                  <span className="text-lg font-bold text-[#16A34A]">
                    {product.priceAfterDiscount}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.price} EGP
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-800">
                  {product.price} EGP
                </span>
              )}
            </div>
            <AddButton word="single" id={product._id}/>
           
          </div>
        </div>
      </div>
    </>
  );
}
