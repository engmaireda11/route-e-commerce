"use client";

import { useEffect, createContext, useState, ReactNode } from "react";

import { getCartProduct } from "../actions/cart.action";
import { getWishlistProduct } from "../actions/wishlist.action";
import { CartProduct } from "@/types/cart.type";
import { useSession } from "next-auth/react";
export const Numbercontext = createContext({
  cartItems: 0,
  wishilst: 0,
  setcartItems: (num: number) => {},
  setwishilst: (num: number) => {},
});
export default function NumbercontextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setcartItems] = useState(0);
  const [wishilst, setwishilst] = useState(0);
  const mysession = useSession();

  async function GetcartNumber() {
    const res = await getCartProduct();
    let sumcart = 0;

    res.data.products.forEach((pro: CartProduct) => {
      sumcart += pro.count;
    });
    setcartItems(sumcart);
  }

  async function GetwishNumber() {
    const res = await getWishlistProduct();
    let sumwish = res.count;

    setwishilst(sumwish);
  }

  useEffect(() => {
    if (mysession.status == "authenticated") {
      GetwishNumber();
      GetcartNumber();
    }
  }, [mysession.status ]);

  return (
    <Numbercontext.Provider
      value={{ cartItems, setwishilst, wishilst, setcartItems }}
    >
      {children}
    </Numbercontext.Provider>
  );
}
