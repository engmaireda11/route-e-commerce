"use server"

import { checkoutObject } from "@/schemas/checkout.schem";
import { getToken } from "@/utiles/utilites";


export async function onlineCheckout(cartId:string,values:checkoutObject , url:string = process.env.NEXT_PUBLIC_BASE_URL!) {
  try{
    const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("Please Login to can Add");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, {
    method: "POST",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      shippingAddress: values,
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
export async function checkCheckout(cartId:string,values:checkoutObject ) {
  try{
    const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("Please Login to can Add");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
    method: "POST",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      shippingAddress: values,
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