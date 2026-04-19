
import { getAllCategoris } from "@/api/services/project.services";
import { Category } from "@/api/types/types";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Newest from "./Newest";


export default async function HomeCategory() {
  const categries = await getAllCategoris();
  return (
    <>
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
            <div className="flex  gap-3 items-center my-8">
              <div className="h-8 w-1.5  rounded-full bg-linear-to-b from-[#00BC7D] to-[#007A55]"></div>
              <h2 className="text-2xl md:text-3xl text-[#1E2939] font-bold">
                Shop By <span className="text-[#009966]">Category</span>
              </h2>
            </div>
            <Link
              href="categories"
              className="flex items-center font-medium self-end sm:self-auto text-[#16A34A] gap-2 hover:text-[#14853d] transition"
            >
              <span> View All Categories</span>
              <RiArrowRightLine className="font-bold text-3xl" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categries?.map((category) => (
              <Link
                key={category._id}
                href={`/categories/${category._id}`}
                className="bg-white  rounded-lg p-4 text-center shadow-sm hover:shadow-lg transition "
              >
                <div className="flex items-center justify-center overflow-hidden  size-20 rounded-full mb-3 mx-auto">
                  <Image
                    src={category.image}
                    alt={category.slug}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-medium ">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Newest/>
     
    </>
  );
}
