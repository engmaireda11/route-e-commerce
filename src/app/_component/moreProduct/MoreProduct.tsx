import { getcategoryProducts } from '@/api/services/project.services';
import React from 'react'

import MoreSwipper from './swipperMoreproduct';

export default  async function MoreProduct({id}:{id:string}) {
    const categoryProduct = await getcategoryProducts(id)
    //console.log("jkj",categoryProduct);
    
  return (
    <>
     <MoreSwipper categoryProduct={categoryProduct}/>
    
    </>
  )
}
