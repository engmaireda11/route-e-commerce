import { getbrandProducts } from "@/api/services/project.services";
import React from "react";
import SinglProduct from "../singleProduct/SinglProduct";
import { FaBoxOpen } from "react-icons/fa";
import Link from "next/link";

export default async function SubBrandPruducts({ id }: { id: string }) {
  const prodcts = await getbrandProducts(id);
  console.log("sjknnnjkjnkjnkjnkjnk", prodcts);

  return (
    <>
      <div className="mb-6 text-sm font-medium text-gray-500">{`Showing ${prodcts?.length} products`}</div>
      {prodcts?.length == 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
            <FaBoxOpen className="text-4xl text-gray-400"/>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-500 mb-6 font-medium">
            No products match your current filters.
          </p>
          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#139342] text-white font-semibold hover:bg-[#16A34A] transition-colors"
            href="/products"
          >
            View All Products
          </Link>
        </div>
      ) : null}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {prodcts?.map((subbrand) => (
          <SinglProduct product={subbrand} key={subbrand._id} />
        ))}
      </div>
    </>
  );
}
