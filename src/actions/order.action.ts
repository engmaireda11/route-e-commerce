"use server";
import { getToken } from "@/utiles/utilites";
export async function getAllOrders(userId: string) {
     const mytoken = await getToken();
      if (!mytoken) {
        throw new Error("Please Login to can Add");
      }
      console.log("idddddddddddddddd",userId);
  const res = fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
    {
         headers: {
      token: mytoken as string,
      "content-type": "application/json",
    }
    },
  );

  const data = (await res).json();
  return data;
}
