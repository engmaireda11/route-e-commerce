"use client"
import { addTowishlist } from '@/actions/wishlist.action';
import React, { useState ,useContext } from 'react'
import { FaRegHeart, FaSpinner } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import {Numbercontext} from "@/context/cartcontxt";

export default function FavBtn({word ,id }:{word:string ,id:string}) {
     const [loading, setloading] = useState(false);
      const [status, setstatus] = useState(false);
       const {setwishilst,wishilst,setcartItems,cartItems} = useContext(Numbercontext)

     async function addwishlist() {
        setloading(true)
        const result = await addTowishlist(id);
        setloading(false)
    
        console.log(result);
    
        if (result.status === "success") {
            setstatus(true)
            setwishilst(wishilst+1)
        
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
              className="size-8 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm transition hover:text-red-600 mb-2 cursor-pointer"
              onClick={addwishlist}
              title="Add To Wishlist"
            >
                 {
                  loading ? (
                    <FaSpinner className="text-xl animate-spin text-red-500" />
                  ) : status ? (
                    <FaHeart  className="text-red-500"/>
                  ) : (
                  <FaRegHeart />
                  )
                }
              
            </button>
          ) : (
        <button className= {`flex  cursor-pointer flex-1 items-center gap-2 bg-transparent rounded-xl border-2  font-medium transition justify-center px-4 py-3  border-gray-200 ${status?"border-red-200 text-red-600 bg-red-100":"hover:text-[#16a34a] hover:border-[#35ba66] text-gray-700"} `}
        onClick={addwishlist}>
             {
                  loading ? (
                    <>
                    
                    <FaSpinner className="text-xl animate-spin text-red-500" />
                  Add To Wishlist</>
                    
                  ) : status ? (
                     <>
                    
                    <FaHeart  className="text-red-500"/>
                  In Wishlist</>
                   
                  ) : (
                   <>
                    <FaRegHeart />
                   
                  Add To Wishlist</>
                  )
                }
                  
                </button>
          )}
        </>
      );
    

  
}
