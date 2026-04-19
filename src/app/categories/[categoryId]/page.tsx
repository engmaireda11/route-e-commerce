import { getCategory, getSubCategories } from "@/api/services/project.services";
import AllSubCaregries from "@/app/_component/AllSubCategories/AllSubCaregries";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { ImSpinner6 } from "react-icons/im";

export default async function page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const Id = await params;
  const CategoryId = Id.categoryId;
  //console.log(CategoryId);
  const specficCategory = await getCategory(CategoryId);
 

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
                href="/categories"
                className="font-medium text-white/70 hover:text-white transition"
              >
                categories
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-medium">{specficCategory?.name}</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center text-white bg-white/20 backdrop-blur-sm ring-1 ring-white/30 shadow-xl rounded-2xl size-16">
                <Image src={specficCategory?.image||""} alt={specficCategory?.name||""}
                  className="object-contain w-12 h-12 "
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl">
                  {specficCategory?.name}
                </h1>
                <p className="mt-1 text-white/80">
                  Choose a subcategory to browse products
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/categories"
            className="flex items-center gap-2 text-gray-600 mb-6 transition hover:text-[#16A34A] font-medium"
          >
            <FaArrowLeftLong />

            <span>Back to Categories</span>
          </Link>
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
            <AllSubCaregries CategoryId={CategoryId} categoryName={specficCategory?.name}/>
          </Suspense>
        </div>
      </div>
    </>
  );
}
