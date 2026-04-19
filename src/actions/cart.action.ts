"use server";

import { getToken } from "@/utiles/utilites";
import { json } from "zod";

export async function addToCart(productId: string) {
  try{
    const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("Please Login to can Add");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "POST",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId: productId,
    }),
  });

  const data = (await res).json();
  return data;
  }
  catch(err){
    return {
      success: false,
      message: err instanceof Error ? err.message : "something went wrong",
    };
  }
}

export async function removeItem(ProductId: string) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v2/cart/${ProductId}`, {
    method: "DELETE",

    headers: {
      token: mytoken as string,
    },
  });

  const data = (await res).json();
  return data;
}
export async function getCartProduct() {
  try{
    const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
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

export async function updateCart(count: number, id: string) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`, {
    method: "PUT",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      count: count,
    }),
  });

  const data = (await res).json();
  return data;
}

export async function clearCart() {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",

    headers: {
      token: mytoken as string,
    },
  });

  const data = (await res).json();
  return data;
}
