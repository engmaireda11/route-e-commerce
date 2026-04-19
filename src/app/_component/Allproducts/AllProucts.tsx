import { getAllProducts } from '@/api/services/project.services';
import React from 'react'
import SinglProduct from '../singleProduct/SinglProduct';

export default  async function AllProucts() {
      const products = await getAllProducts();
      console.log("products",products);
      
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6">
            {products?.map((product) => (
             <SinglProduct key={product._id} product={product}/>
            ))}
          </div>
    
    </>
  )
}
