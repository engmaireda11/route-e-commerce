"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping, FaRightFromBracket } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import logo from "../../../assests/Component 1.png";
import img from "../../../assests/Component 1.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { LuUserRound } from "react-icons/lu";
import { Numbercontext } from "@/context/cartcontxt";

export default function Slider({
  open,
  setopen,
}: {
  open: boolean;
  setopen: (x: boolean) => void;
}) {
  const mysession = useSession();
  function userSignOut (){
  
      signOut({redirect:true,callbackUrl:"/login"})
    }
    const {setwishilst,wishilst,setcartItems,cartItems} = useContext(Numbercontext)
    
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50  lg:hidden transition ${open ? "opacity-100" : "opacity-0  pointer-events-none "}`}
        onClick={() => setopen(false)}
      >
        <div
          className={[
            "bg-white w-80 shadow-2xl max-w-83 transition fixed top-0 right-0 h-full overflow-y-auto",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex justify-between items-center p-4 border-gray-100 border-b  bg-gray-50/50">
            <Image src={logo} alt="logo" />
            <button
              onClick={() => setopen(false)}
              className=" cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition size-9 rounded-full"
            >
              <AiOutlineClose className="font-bold text-xl" />
            </button>
          </div>

          <form className="p-4 border-b border-gray-100">
            <div className="relative ">
              <input
                type="text"
                className="w-full rounded-xl py-3 pl-4 pr-12 border font-medium text-sm boreder-[#E5E7EB] bg-[#F9FAFB] focus:bg-white focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50 transition "
                placeholder="Search products..."
              />
              <button className="absolute bg-[#16A34A]  rounded-lg flex justify-center items-center text-white size-8 top-1/2 right-1.5 -translate-y-1/2 ">
                <IoIosSearch />
              </button>
            </div>
          </form>

          <nav className="p-4 ">
            <div className="space-y-1">
              <Link
                href="/"
                className="items-center flex gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="items-center flex gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
              >
                Shop
              </Link>
              <Link
                href="/categories"
                className="items-center flex gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
              >
                Categories
              </Link>
              <Link
                href="/brands"
                className="items-center flex gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
              >
                Brands
              </Link>
            </div>
          </nav>

          <div className="mx-4 border-t border-gray-100"></div>

          <div className="p-4 space-y-1 ">
            <Link
              href="wishlist"
              className=" hover:bg-[#F0FDF4] px-4 py-3 rounded-xl flex items-center justify-between "
            >
              <div className="flex items-center gap-3">
                <span className="text-[#FB2C36] flex justify-center items-center transition bg-[#FEF2F2] rounded-full size-9 ">
                  <FaRegHeart />
                </span>

                <span className="text-[#364153] font-medium">Wishlist</span>
              </div>
{      wishilst !==0?       <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{wishilst}</span>:""}
            </Link>
            <Link
              href="cart"
              className=" hover:bg-[#F0FDF4] px-4 py-3 rounded-xl flex items-center justify-between "
            >
              <div className="flex items-center gap-3">
                <span className="bg-[#F0FDF4] text-[#16A34A] flex justify-center items-center transition  rounded-full size-9 ">
                  {" "}
                  <FaCartShopping />
                </span>

                <span className="text-[#364153] font-medium"> Cart</span>
              </div>
              {      cartItems !==0?        <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{cartItems}</span>:""}
            </Link>
          </div>

          <div className="mx-4 border-t border-gray-100"></div>
          {mysession.status == "authenticated" ? (
            <div className="p-4 space-y-1">
              <Link
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                href="/profile/address"
              >
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <LuUserRound className="text-gray-500" />
                 
                </div>
                <span className="font-medium text-gray-700">mai asaad</span>
              </Link>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors w-full text-left"
              onClick={userSignOut}
              >
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                  <FaRightFromBracket className=" w-4 text-red-500" />
                </div>
                <span className="font-medium text-red-600">Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-1">
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/login"
                  className="py-3 px-4 transition hover:bg-[#15803d] bg-[#16A34A] flex items-center justify-center font-semibold text-white rounded-xl gap-2"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="py-3 px-4 transition hover:bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center font-semibold border-2  border-[#16A34A] bg-white rounded-xl gap-2"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}

          <Link
            href="contact"
            className="p-4 rounded-xl mt-2 mx-4 border border-gray-100 bg-gray-50 flex items-center gap-3 transition hover:bg-[#16A34A]/15"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 bg-[#F0FDF4] text-[#16A34A] rounded-full ">
                <Image src={img} alt="contact" />
              </div>

              <div>
                <p className="text-[#364153]  text-sm font-semibold">
                  Need Help?
                </p>
                <p className="text-[#16A34A]  text-sm font-medium">
                  Contact Support
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
