"use server"

import { getToken } from "@/utiles/utilites";
import { json } from "zod";

export async function addTowishlist(productId: string) {
 try{
   const mytoken = await getToken();
  if (!mytoken) {
     throw new Error("Please Login to can Add");
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "POST",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId: productId,
    }),
  });

  const data = await res.json();
  return data;
 }
 catch(err){
  console.log(err)
   return {
      success: false,
      message: err instanceof Error ? err.message : "something went wrong",
    };
 }
}

export async function getWishlistProduct() {
  try{
    const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    headers: {
      token: mytoken as string,
    },
  });

  const data = (await res).json();
  return data;
  }
   catch(err){
    return err
    console.log(err)
    
  }


}

export async function removeItem(ProductId: string) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${ProductId}`, {
    method: "DELETE",

    headers: {
      token: mytoken as string,
    },
  });

  const data = (await res).json();
  return data;
}