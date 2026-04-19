"use client";
import { getUserAddress } from "@/actions/address.action";
import { getCartProduct } from "@/actions/cart.action";
import { CartResponse } from "@/types/cart.type";
import Link from "next/link";
import React, { useState, useEffect ,useContext } from "react";
import {
  FaBookmark,
  FaBox,
  FaCheck,
  FaCity,
  FaCreditCard,
  FaPhoneAlt,
  FaPlus,
  FaReceipt,
  FaShieldAlt,
  FaShoppingBag,
  FaTruck,
  FaWallet,
} from "react-icons/fa";
import {
  FaArrowLeftLong,
  FaHouseChimney,
  FaLocationDot,
  FaMoneyBill,
} from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { AddressInfo } from "../profile/address/page";
import { useForm } from "react-hook-form";
import { checkoutObject, checkShema } from "@/schemas/checkout.schem";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkCheckout, onlineCheckout } from "@/actions/checkout.action";
import { useRouter } from "next/navigation";
import {Numbercontext} from "@/context/cartcontxt";


export default function Checkout() {
  const [Products, setproducts] = useState<CartResponse | null>(null);
  const [address, setaddress] = useState<AddressInfo[] | null>(null);
  const [cash, setcash] = useState(true);
  const [online, setonline] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [differnt, setdiffernt] = useState(false);
  const [loading, setloading] = useState(false);
  const router = useRouter()
  const {setwishilst,wishilst,setcartItems,cartItems} = useContext(Numbercontext)
  

  const form =useForm({

    defaultValues:{
      details: "",
        phone: "",
        city: ""
    },  

    resolver:zodResolver(checkShema)

  })

  const { register , handleSubmit ,setValue  ,formState  }=form

  async function checkOutcash(data:checkoutObject){

    setloading(true)

   const result = await checkCheckout(Products?.cartId!,data);
setloading(false)
    console.log(data);
    console.log(result);

    if(result.status === "success"){
      router.push("/allorders")
      setcartItems(0);

    }
    

  }
  async function checkOutonline(data:checkoutObject){
setloading(true)
    const result = await onlineCheckout(Products?.cartId!,data,"");
    setloading(false)

    console.log(data);
    console.log(result);

    if(result.status === "success" && result.session.url){
      window.location.href =  result.session.url}

    

  }

  async function getProduct() {
    const res = await getCartProduct();
    console.log(res);
    setproducts(res);
  }
  async function getAddress() {
    const res = await getUserAddress();
    console.log(res);
    setaddress(res.data);
  }

  useEffect(() => {
    getProduct();
    getAddress();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-8 font-medium">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link className="hover:text-green-600 transition" href="/">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link className="hover:text-green-600 transition" href="/cart">
                Cart
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium">Checkout</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="bg-gradient-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
                    <FaReceipt />
                  </span>
                  Complete Your Order
                </h1>
                <p className="text-gray-500 mt-2">
                  Review your items and complete your purchase
                </p>
              </div>
              <Link
                className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all"
                href="/cart"
              >
                <FaArrowLeftLong />
                Back to Cart
              </Link>
            </div>
          </div>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FaHouseChimney />
                      Shipping Address
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      Where should we deliver your order?
                    </p>
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="pb-5 border-b border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <FaBookmark className="text-green-700" />

                        <span className="font-semibold text-gray-800">
                          Saved Addresses
                        </span>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-600">
                          Select a saved address or enter a new one below
                        </p>
                        {address?.map((add) => (
                          <button
                            key={add._id}
                            type="button"
                            className={`w-full p-4 rounded-xl border-2 cursor-pointer text-left transition-all duration-200
  ${
    selectedAddressId === add._id
      ? "border-green-500 bg-green-50"
      : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
  }`}
                               onClick={() => {
                                  setSelectedAddressId(add._id);
       
        setValue("details", add.details);
        setValue("phone", add.phone);
        setValue("city", add.city);
      }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-gray-100 text-gray-500">
                                <FaLocationDot />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-gray-900">
                                  {add.name}
                                </p>
                                <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">
                                  {add.details}
                                </p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaPhoneAlt className="text-[10px]" />

                                    {add.phone}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaCity className="text-[10px]" />

                                    {add.city}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}

                        <button
                          type="button"
                          className={`cursor-pointer 
  ${
   differnt
      ? "w-full p-4 rounded-xl border-2 border-dashed text-left transition-all duration-200 border-green-500 bg-green-50"
      : "w-full p-4 rounded-xl border-2 border-dashed text-left transition-all duration-200 border-gray-300 hover:border-green-300 hover:bg-gray-50"
  }`}
                           onClick={() => {
                            setdiffernt(true);
                            setSelectedAddressId(null);
       
        setValue("details", "");
        setValue("phone", "");
        setValue("city", "");
      }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500 text-white">
                              <FaPlus />
                            </div>
                            <div>
                              <p className="font-semibold text-green-700">
                                Use a different address
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                Enter a new shipping address manually
                              </p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <IoMdInformationCircle className="text-blue-600 text-sm" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-800 font-medium">
                          Delivery Information
                        </p>
                        <p className="text-xs text-blue-600 mt-0.5">
                          Please ensure your address is accurate for smooth
                          delivery
                        </p>
                      </div>
                    </div>
                
                      <div className="mb-[20px]">
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FaCity className="text-gray-500 text-sm" />
                        </div>
                        <input
                          id="city"
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                          placeholder="e.g. Cairo, Alexandria, Giza"
                          type="text"
                        
                          {...register("city")}
                        />
                      </div>
                      {formState.errors.city && (
  <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
    {formState.errors.city.message}
  </p>)}
                    </div>
                    <div className="mb-[20px]">
                      <label
                        htmlFor="details"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FaLocationDot className="text-gray-500 text-sm" />
                        </div>
                        <textarea
                          id="details"
                          rows={3}
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                          placeholder="Street name, building number, floor, apartment..."
                          {...register("details")}
                        />
                      </div>
                       {formState.errors.details && (
  <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
    {formState.errors.details.message}
  </p>)}
                    </div>
                    <div className="mb-[20px]">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <FaPhoneAlt className="text-gray-500 text-sm" />
                        </div>
                        <input
                          id="phone"
                          className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                          placeholder="01xxxxxxxxx"
                          type="tel"
                        {...register("phone")}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                          Egyptian numbers only
                        </span>
                      </div>
                       {formState.errors.phone && (
  <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
    {formState.errors.phone.message}
  </p>)}
                    </div>
                
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FaWallet className="text-white" />
                      Payment Method
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      Choose how you'd like to pay
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    <button
                      type="button"
                      className={`${cash ? "w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm" : "w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-gray-200 hover:border-green-200 hover:bg-gray-50"}`}
                      onClick={() => {
                        setcash(true);
                        setonline(false);
                      }}
                    >
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gray-100 text-gray-400 group-hover:bg-gray-200">
                        <FaMoneyBill className="text-xl" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-green-700">
                          Cash on Delivery
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Pay when your order arrives at your doorstep
                        </p>
                      </div>
                      <div
                        className={`${cash ? "w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white" : "w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200"}`}
                      >
                        {cash && <FaCheck />}
                      </div>
                    </button>
                    <button
                      type="button"
                      className={`${online ? "w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm" : "w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-gray-200 hover:border-green-200 hover:bg-gray-50"}`}
                      onClick={() => {
                        setonline(true);
                        setcash(false);
                      }}
                    >
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gray-100 text-gray-400 group-hover:bg-gray-200">
                        <FaCreditCard className="text-xl" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-gray-900">Pay Online</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Secure payment with Credit/Debit Card via Stripe
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <img
                            alt="Visa"
                            className="h-5"
                            src="https://img.icons8.com/color/48/visa.png"
                          />
                          <img
                            alt="Mastercard"
                            className="h-5"
                            src="https://img.icons8.com/color/48/mastercard.png"
                          />
                          <img
                            alt="Amex"
                            className="h-5"
                            src="https://img.icons8.com/color/48/amex.png"
                          />
                        </div>
                      </div>
                      <div
                        className={`${online ? "w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white" : "w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200"}`}
                      >
                        {online && <FaCheck />}
                      </div>
                    </button>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <FaShieldAlt className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Secure Encrypted
                        </p>
                        <p className="text-xs text-green-600 mt-0.5">
                          Your payment info is protected with 256-bit SSL
                          encryption
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FaShoppingBag />
                      Order Summary
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      {Products?.numOfCartItems} items
                    </p>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                      {Products?.data.products.map((product) => (
                        <div
                          key={product.product.id}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                            <img
                              alt={product.product.title}
                              className="w-full h-full object-contain"
                              src={product.product.imageCover}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {product.product.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {product.count} × {product.price} EGP
                            </p>
                          </div>
                          <p className="text-sm font-bold text-gray-900 shrink-0">
                            {product.count * product.price}
                          </p>
                        </div>
                      ))}
                    </div>
                    <hr className="border-gray-100 my-4" />
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium">
                          {Products?.data.totalCartPrice} EGP
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span className="flex items-center gap-2">
                          <FaTruck className="text-gray-400" />
                          Shipping
                        </span>
                        <span className="text-green-600 font-semibold">
                          FREE
                        </span>
                      </div>
                      <hr className="border-gray-100" />
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">
                          Total
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-green-600">
                            {Products?.data.totalCartPrice}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            EGP
                          </span>
                        </div>
                      </div>
                    </div>

                    {cash ? (
                      <button
                        type="submit"
                        className="w-full cursor-pointer mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                        onClick={handleSubmit(checkOutcash)}
                         disabled={loading}
                      >
                        <FaBox />
                        Place Order
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full mt-6  cursor-pointer bg-gradient-to-r  from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                         onClick={handleSubmit(checkOutonline)}
                         disabled={loading}
                      >

                        <FaShieldAlt/>
                       
                        Proceed to Payment
                      </button>
                    )}

                    <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaShieldAlt className="text-green-600" />

                        <span>Secure</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaTruck className="text-blue-400" />

                        <span>Fast Delivery</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaBox className="text-orange-500" />

                        <span>Easy Returns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
