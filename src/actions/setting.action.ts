"use server"

import { UserData, Userrepassword } from "@/app/profile/setting/page";
import { getToken } from "@/utiles/utilites";

export async function updateuserdata(userdata:UserData) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`, {
    method: "PUT",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify(userdata),
  });

  const data = (await res).json();
  return data;
}

export async function updatepassword(passData:Userrepassword) {
  const mytoken = await getToken();
  if (!mytoken) {
    throw new Error("login first");
  }

  const res = fetch(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`, {
    method: "PUT",
    headers: {
      token: mytoken as string,
      "content-type": "application/json",
    },
    body: JSON.stringify(passData),
  });

  const data = (await res).json();
  return data;
}
