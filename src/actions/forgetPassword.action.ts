"use server"

import { Password, Rest, Varfy } from "@/app/forget-password/page";
import { getToken } from "@/utiles/utilites";

export async function restUserPass(email:Rest) {
 

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, {
    method: "POST",
    headers: {
      
      "content-type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const data = (await res).json();
  return data;
}
export async function varifayCode(code:Varfy) {
 

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, {
    method: "POST",
    headers: {
      
      "content-type": "application/json",
    },
    body: JSON.stringify(code),
  });

  const data = (await res).json();
  return data;
}
export async function reastnewPassword(password:Password) {
 

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, {
    method: "PUT",
    headers: {
      
      "content-type": "application/json",
    },
    body: JSON.stringify(password),
  });

  const data = (await res).json();
  return data;
}