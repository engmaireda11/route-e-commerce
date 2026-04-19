"use server";
import { AddressData } from "@/app/profile/address/page";
import { getToken } from "@/utiles/utilites";
export async function addUserAddress(addressdata: AddressData) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
    method: "POST",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify(addressdata),
  });

  const data = (await res).json();
  return data;
}
export async function getUserAddress() {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
    headers: {
      token: mytoken as string,
    },
  });

  const data = (await res).json();
  return data;
}


export async function deleteUserAddress(addressId: string) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`, {
    method: "DELETE",
    headers: {
      token: mytoken as string,
      
    },

  });

  const data = (await res).json();
  return data;
}

export async function updateaddress( id: string|Boolean , addressdata: AddressData) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`, {
    method: "PUT",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
   body: JSON.stringify(addressdata),
  });

  const data = (await res).json();
  return data;
}
