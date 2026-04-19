"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import logo from "../../../assests/Component 1.png";
import img from "../../../assests/Component 1.svg";
import Image from "next/image";
import {
  FaInbox,
  FaRegAddressBook,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import { FaCartShopping, FaGear, FaRightFromBracket } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "../Slider/Slider";
import { signOut, useSession } from "next-auth/react";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Numbercontext } from "@/context/cartcontxt";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setopen] = useState(false);
  const [profile, setprofile] = useState(false);
  const mysession = useSession();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const { setwishilst, wishilst, setcartItems, cartItems } =
    useContext(Numbercontext);
  const handleSearch = () => {
    if (!query.trim()) return;

    router.push(`/search?q=${query}`);
  };

  function userSignOut() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }
  return (
    <>
      <header className="sticky top-0 z-40 shadow-sm  ">
        <div className="bg-white ">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16 lg:h-18 gap-4 lg:gap-8">
              <Link href="/" className="shrink-0">
                <Image src={logo} alt="logo" />
              </Link>
              <form
                className=" hidden lg:flex max-w-2xl flex-1  "
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   handleSearch();
                // }}
              >
                <div className="relative w-full">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-#E5E7EB rounded-full py-3 px-5 pr-12 pe-5 w-full focus:bg-white focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50 transition bg-gray-50/50 text-sm "
                    placeholder="Search for products, brands and more..."
                  />
                  <button
                    className="absolute cursor-pointer text-white bg-[#16A34A] h-9 w-9 flex items-center justify-center right-1.5 top-1/2 -translate-y-1/2  rounded-full"
                    type="submit"
                  >
                    <IoIosSearch className="font-bold  text-xl" />
                  </button>
                </div>
              </form>

              <nav className=" hidden xl:flex gap-6 items-center text-[#364153] font-medium">
                <Link href="/" className="transition hover:text-[#16A34A]">
                  Home
                </Link>
                <Link
                  href="/products"
                  className="transition hover:text-[#16A34A]"
                >
                  Shop
                </Link>
                <div className="relative group">
                  <button className="flex items-center py-2 gap-1.5 cursor-pointer transition hover:text-[#16A34A] ">
                    Categories
                    <FaAngleDown className="group-hover:rotate-180 transition duration-200" />
                  </button>
                  <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    <div className=" bg-white py-2 border-gray-100 rounded-xl shadow-xl min-w-50">
                      <Link
                        href="/categories"
                        className="block px-4 py-2.5 text-gray-600 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
                      >
                        All Categorise
                      </Link>
                      <Link
                        href="/products?subcategory=6407f3ccb575d3b90bf957eb&category=6439d2d167d9aa4ca970649f"
                        className="block px-4 py-2.5 text-gray-600 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
                      >
                        Electronics
                      </Link>
                      <Link
                        href="/products?subcategory=6407f1bcb575d3b90bf95797&category=6439d58a0049ad0b52b9003f"
                        className="block px-4 py-2.5 text-gray-600 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
                      >
                        Women`s Fashion
                      </Link>
                      <Link
                        href={`/products?subcategory=6407f243b575d3b90bf957ac&category=6439d5b90049ad0b52b90048`}
                        className="block px-4 py-2.5 text-gray-600 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
                      >
                        Men`s fashion
                      </Link>
                      <Link
                        href="/products"
                        className="block px-4 py-2.5 text-gray-600 hover:text-[#16A34A] hover:bg-[#F0FDF4] transition"
                      >
                        Beauty&Health
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/brands"
                  className="transition hover:text-[#16A34A]"
                >
                  Brands
                </Link>
              </nav>

              <div className=" flex items-center">
                <Link
                  href="/contact"
                  className="border-r hidden lg:flex border-[#E5E7EB] pr-3 mr-2 hover:opacity-80 transition"
                >
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center justify-center size-10 bg-[#F0FDF4] text-[#16A34A] rounded-full ">
                      <Image src={img} alt="contact" />
                    </div>
                    <div>
                      <p className="font-medium text-[12px] text-[#99A1AF]">
                        Support
                      </p>
                      <p className="text-[#364153] text-[12px] font-semibold">
                        24/7 Help
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/wishlist"
                  className="rounded-full p-2.5 relative  hover:bg-gray-100 group"
                >
                  <FaRegHeart className="text-gray-500 text-xl transition group-hover:text-[#16A34A] " />
                  {wishilst !== 0 && (
                    <span className="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                      {wishilst}
                    </span>
                  )}
                </Link>
                <Link
                  href="/cart"
                  className="rounded-full p-2.5 relative hover:bg-gray-100 group"
                >
                  <FaCartShopping className="text-gray-500 text-xl transition group-hover:text-[#16A34A]  " />
                  {cartItems !== 0 && (
                    <span className="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                      {cartItems}
                    </span>
                  )}
                </Link>

                {mysession.status == "authenticated" ? (
                  <div className="hidden lg:block relative">
                    <button
                      className="relative p-2.5 cursor-pointer rounded-full hover:bg-gray-100 transition-colors group"
                      title="Account"
                      onClick={() => setprofile((prev) => !prev)}
                    >
                      <FaRegUserCircle className=" text-xl text-gray-500 group-hover:text-[#16A34A] transition-colors" />
                    </button>
                    <div
                      className={`absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl transition-all duration-200 origin-top-right  scale-95  font-medium ${profile ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
                    >
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center">
                            <FaRegUserCircle className=" text-xl text-[#16a34a] " />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800 truncate">
                              {mysession?.data?.user?.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate" />
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        <Link
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#16a34a] hover:bg-[#f0fdf4] transition-colors"
                          href="/profile/address"
                        >
                          <FiUser className=" w-4 text-gray-400" />
                          My Profile
                        </Link>
                        <Link
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#16a34a] hover:bg-[#f0fdf4] transition-colors"
                          href="/order"
                        >
                          <FaInbox className=" w-4 text-gray-400" />
                          My Orders
                        </Link>
                        <Link
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#16a34a] hover:bg-[#f0fdf4] transition-colors"
                          href="/wishlist"
                        >
                          <CiHeart className=" w-4 text-gray-400" />
                          My Wishlist
                        </Link>
                        <Link
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#16a34a] hover:bg-[#f0fdf4] transition-colors"
                          href="/profile/address"
                        >
                          <FaRegAddressBook className=" w-4 text-gray-400" />
                          Addresses
                        </Link>
                        <Link
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#16a34a] hover:bg-[#f0fdf4] transition-colors"
                          href="/profile/setting"
                        >
                          <FaGear className=" w-4 text-gray-400" />
                          Settings
                        </Link>
                      </div>
                      <div className="border-t border-gray-100 py-2">
                        <button
                          className="flex items-center cursor-pointer gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full text-left"
                          onClick={userSignOut}
                        >
                          <FaRightFromBracket className=" w-4 text-red-500" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="hidden lg:flex  gap-2 ml-2 items-center cursor-pointer shadow-sm bg-[#16A34A] text-white rounded-full py-2.5 px-5 font-semibold text-[14px] transition hover:bg-[#15803d]"
                  >
                    <LuUser />
                    Sign In
                  </Link>
                )}

                <button
                  onClick={() => setopen(true)}
                  className="size-10 bg-[#16A34A] lg:hidden rounded-full text-white flex items-center justify-center ml-1 transition hover:bg-[#15803d] cursor-pointer"
                >
                  <FaBars className="font-bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && <Slider open={open} setopen={setopen} />}
    </>
  );
}
