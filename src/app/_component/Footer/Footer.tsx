import React from "react";
import { FaPhoneSquareAlt, FaTruck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { PiHeadsetBold } from "react-icons/pi";
import Link from "next/link";
import logo from "../../../assests/Component 1.png";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope ,FaTwitter,FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="border-[#DCFCE7] border-y bg-[#F0FDF4]">
        <div className="container mx-auto px-4 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-[#DCFCE7] text-[#16A34A] size-12 rounded-xl">
                <FaTruck />
              </div>
              <div>
                <h4 className="text-[#101828] font-semibold text-sm">
                  Free Shipping
                </h4>
                <p className="text-gray-500 font-medium text-[12px]">
                  On orders over 500 EGP
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-[#DCFCE7] text-[#16A34A] size-12 rounded-xl">
                <FaArrowRotateLeft />
              </div>
              <div>
                <h4 className="text-[#101828] font-semibold text-sm">
                  Easy Returns
                </h4>
                <p className="text-gray-500 font-medium text-[12px]">
                  14-day return policy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-[#DCFCE7] text-[#16A34A] size-12 rounded-xl">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="text-[#101828] font-semibold text-sm">
                  Secure Payment
                </h4>
                <p className="text-gray-500 font-medium text-[12px]">
                  100% secure checkout
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-[#DCFCE7] text-[#16A34A] size-12 rounded-xl">
                <PiHeadsetBold />
              </div>
              <div>
                <h4 className="text-[#101828] font-semibold text-sm">
                  24/7 Support
                </h4>
                <p className="text-gray-500 font-medium text-[12px]">
                  Contact us anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:12">
            <div className="lg:col-span-4">
              <Link href="/" className="mb-6 inline-block">
                <div className="bg-white py-2 px-4 rounded-lg">
                  <Image src={logo} alt="logo" />
                </div>
              </Link>
              <p className="text-sm mb-6 text-gray-400 font-medium">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>
              <div className="mb-6 space-y-3">
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-3 cursor-pointer text-[#22C55E] transition"
                >
                  <FaPhoneAlt />
                  <span className="text-sm  hover:text-[#22C55E]  text-gray-400 font-medium">
                    {" "}
                    +1 (800) 123-4567
                  </span>
                </a>
                <a
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-3 cursor-pointer text-[#22C55E] transition"
                >
                  <FaEnvelope />
                  <span className="text-sm hover:text-[#22C55E] text-gray-400 font-medium">
                    support@freshcart.com
                  </span>
                </a>
                <div className="flex items-center  gap-3 ">
                  <FaLocationDot className="text-[#22C55E] " />
                  <span className="text-sm hover:text-[#22C55E] text-gray-400 font-medium">
                    123 Commerce Street, New York, NY 10001
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Link href="#" className="size-10 rounded-full text-gray-400 bg-gray-800 flex items-center justify-center hover:text-white hover:bg-[#22C55E] transition">
                  <FaFacebookF/>
                </Link>
                <Link href="#" className="size-10 rounded-full text-gray-400 bg-gray-800 flex items-center justify-center hover:text-white hover:bg-[#22C55E] transition">
                  <FaTwitter/>
                </Link>
                <Link href="#" className="size-10 rounded-full text-gray-400 bg-gray-800 flex items-center justify-center hover:text-white hover:bg-[#22C55E] transition">
                  <FaInstagram/>
                </Link>
                <Link href="#" className="size-10 rounded-full text-gray-400 bg-gray-800 flex items-center justify-center hover:text-white hover:bg-[#22C55E] transition">
                  <IoLogoYoutube/>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className=" text-white font-semibold text-[18px] mb-5">Shop</h3>
              <ul>
                <li className="mb-3">
                  <Link href="products" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  All Products
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="categories" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                 Categoris
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="brands" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Brands
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Electronics
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Women`s fashion
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="products" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Men`s fashion
                  </Link>
                </li>
              </ul>


            </div>
            <div className="lg:col-span-2">
              <h3 className=" text-white font-semibold text-[18px] mb-5">Account</h3>
              <ul>
                <li className="mb-3">
                  <Link href="#" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  My Account
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="categories" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                 Order History
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="wishlist" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                 Wishlist
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="cart" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Shopping Cart
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="login" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                Sign In
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="register" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Create Account
                  </Link>
                </li>
              </ul>


            </div>
            <div className="lg:col-span-2">
              <h3 className=" text-white font-semibold text-[18px] mb-5">Support</h3>
              <ul>
                <li className="mb-3">
                  <Link href="contact" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Contact Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                 Help Center
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="brands" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                 Shipping Info
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                Returns & Refunds
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Track Order
                  </Link>
                </li>
               
              </ul>


            </div>
            <div className="lg:col-span-2">
              <h3 className=" text-white font-semibold text-[18px] mb-5">Legal</h3>
              <ul>
                <li className="mb-3">
                  <Link href="privacy" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                  Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="terms" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
               Terms of Service
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="text-sm font-medium text-gray-400 transition hover:text-[#22C55E]">
                 Cookie Policy
                  </Link>
                </li>
               
              </ul>


            </div>
          
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-center md:text-left text-sm text-gray-500 font-medium">© 2026 FreshCart. All rights reserved.</p>
              <div className="flex items-center gap-4">

                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium ">
                  <FaCreditCard/>
                  <span>Visa</span>

                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium ">
                  <FaCreditCard/>
                  <span>Mastercard</span>

                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium ">
                  <FaCreditCard/>
                  <span>PayPal</span>

                </div>

              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
