"use client";
import { addToCart } from "@/actions/cart.action";
import React, { useState  ,useContext} from "react";
import { FaCheck, FaSpinner } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { toast } from "react-toastify";

import {Numbercontext} from "@/context/cartcontxt";
interface AddButtonProps {
  word: string;
  id: string;
  onSuccess?: () => void;
}

export default function AddButton({
  word,
  id,
  onSuccess,
}: AddButtonProps) {
  const [loading, setloading] = useState(false);
  const [status, setstatus] = useState(false);
  const {setwishilst,wishilst,setcartItems,cartItems} = useContext(Numbercontext)

  
  async function addCart() {
    setloading(true)
    const result = await addToCart(id);
    setloading(false)

    console.log(result);

    if (result.status === "success") {
       onSuccess?.();
       
      setstatus(true)
      setcartItems(cartItems + 1)
      toast.success(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(()=>{
        setstatus(false)

      },2000)
    }
    else{
           toast.error(result.message, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
        }
  }


  return (
    <>
      {word === "single" ? (
        <button
          className="size-10 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed rounded-full text-white bg-[#16A34A] flex items-center justify-center"
          onClick={addCart}
          disabled={loading}

        >

          {
  loading ? (
    <FaSpinner className="text-xl animate-spin" />
  ) : status ? (
    <FaCheck  />
  ) : (
    <LuPlus className="text-2xl" />
  )
}
          
         
        </button>
      ) : word=== "wishlist" ?   <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-[#16a34a] text-white hover:bg-[#15803d]"
      onClick={addCart}
           disabled={loading}>
             {
  loading ? (
    <>
     <FaSpinner className="text-xl animate-spin" />
     <span className="md:hidden lg:inline">Adding</span>
    </>
  ) : status ? (
    <>
    <FaCheck  />
    <span>Added !</span>
    </>
  
  ) : (
    <>
   <IoCart className="text-xs" />
                  
                    <span className="md:hidden lg:inline">Add to Cart</span>
          </>
          
  )
}
                    
                  </button>: (
        <button
          className="bg-[#16a34a] py-3.5 px-6 flex-1 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed  text-white flex items-center gap-2 justify-center shadow-lg shadow-[#16a34a]/25 font-medium rounded-xl hover:bg-[#068133] transition "
          onClick={addCart}
           disabled={loading}
        >
          {
  loading ? (
     <FaSpinner className="text-2xl animate-spin" />
  ) : status ? (
    <>
    <FaCheck  />
    <span>Add To Cart</span>
    </>
  
  ) : (
    <>
    <FaCartShopping />
          <span>Add To Cart</span>
          </>
          
  )
}
         
          
        </button>
      )}
    </>
  );
}
