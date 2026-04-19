import { getAllBrands } from '@/api/services/project.services'
import { Brand } from '@/api/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default  async function AllBrands() {
     const brands = await getAllBrands()
  return (
    <>
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 sm:gap-5">

            {brands?.map((brand)=> <Link href={`products?brand=${brand._id}`} key={brand._id} className='rounded-2xl shadow-sm duration-300 bg-white border border-gray-100 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl
            p-4 sm:p-5 group transition'>
            <div className='flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 mb-3 p-4'>
                    <Image src={brand.image} alt={brand.name} className='object-contain group-hover:scale-110 transition w-full h-full duration-500' width={300} height={300} />
            </div>
            <h3 className='font-semibold text-gray-900 text-sm text-center group-hover:text-violet-600 transition'>{brand.name}</h3>
            <div className='flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity'> 

             <span className='flex items-center font-medium text-violet-600 gap-1 text-xs'>View Products
              <FaArrowRight/>

             </span>
             
            </div>
            </Link>)}

            


           </div>
    </>
  )
}
