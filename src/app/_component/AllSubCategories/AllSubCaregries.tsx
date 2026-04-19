import { getSubCategories } from "@/api/services/project.services";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaFolderOpen } from "react-icons/fa6";

export default async function AllSubCaregries({ CategoryId ,categoryName }:{CategoryId: string ,categoryName:string}) {
  const Subcategories = await getSubCategories(CategoryId);
  return (
    <>
      <div className="mb-6">
        <h2 className="font-bold text-lg text-gray-900">
         {Subcategories?.length} Subcategories in {categoryName}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
        {Subcategories?.map((sub) => (
          <Link
            href={`/products?subcategory=${sub._id}&category=${CategoryId}`}
            key={sub._id}
            className="bg-white shadow-sm hover:shadow-xl transition-all rounded-2xl group hover:-translate-y-1 p-6 border border-gray-100 hover:border-[#4ADE80]"
          >
            <div className=" size-14 mb-4 rounded-xl flex items-center justify-center bg-[#F0FDF4] text-[#16A34A] group-hover:bg-[#d3fee0] transition">
              <FaFolderOpen className="text-2xl" />
            </div>
            <h3 className="text-lg text-gray-900 font-bold group-hover:text-[#16A34A] transition mb-2">
              {sub.name}
            </h3>
            <div className="flex items-center gap-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity text-[#16A34A] text-sm ">
              <span>Browse Products</span>
              <FaArrowRightLong />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
