"use client";

import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { LuUser, LuUserRound } from "react-icons/lu";
import { FaRightFromBracket, FaUserPlus } from "react-icons/fa6";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { MdOutlineExitToApp } from "react-icons/md";

export default function FirstNav() {
  const mysession = useSession();

  function userSignOut (){

    signOut({redirect:true,callbackUrl:"/login"})
  }
  console.log(mysession);

  return (
    <>
      <div className="bg-white text-[14px] border-b border-[#F3F4F6] hidden lg:flex text-[#6A7282] font-medium">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-10 items-center ">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2  ">
                <FaTruck className="text-[#16A34A]" />
                Free Shipping on Orders 500 EGP
              </span>
              <span className="flex items-center  gap-2">
                <FaGift className="text-[#16A34A]" />
                New Arrivals Daily
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-1.5 cursor-pointer hover:text-[#16A34A] transition"
              >
                <FaPhoneAlt />
                +1 (800) 123-4567
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-1.5 cursor-pointer hover:text-[#16A34A] transition"
              >
                <CiMail />
                <span>support@freshcart.com</span>
              </a>

              <span className="w-px h-4 bg-gray-200"></span>

              {mysession.status == "authenticated" ? (
                <div className="flex items-center gap-4">
                  <Link
                    className="flex items-center gap-1.5 text-gray-600 hover:text-[#16A34A] transition-colors"
                    href="/profile/address"
                  >
                  <LuUserRound />
                    <span>{mysession?.data?.user?.name}</span>
                  </Link>
                  <button className="flex items-center cursor-pointer gap-1.5 text-gray-600 hover:text-red-500 transition-colors"
                  onClick={userSignOut}>
                    <FaRightFromBracket />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                <Link
                  href="login"
                  className="flex items-center  gap-1.5 cursor-pointer hover:text-[#16A34A] transition"
                >
                  <LuUser />
                  <span>Sign In</span>
                </Link>
                <Link
                  href="register"
                  className="flex items-center gap-1.5 cursor-pointer hover:text-[#16A34A] transition"
                >
                  <FaUserPlus />
                  <span>Sign Up</span>
                </Link>
              </div>
              )}

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
