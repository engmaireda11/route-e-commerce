"use client";
import { getAllOrders } from "@/actions/order.action";
import { OrdersResponse } from "@/types/orders.type";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaCalendarAlt,
  FaChevronDown,
  FaClock,
  FaHashtag,
  FaInbox,
  FaPhone,
  FaReceipt,
  FaSpinner,
  FaTruck,
} from "react-icons/fa";
import { FaArrowRightLong, FaBagShopping, FaChevronUp, FaLocationDot, FaMoneyBill } from "react-icons/fa6";

export default function Order() {
  const { data: session, status } = useSession();
  const [orders, setorders] = useState<OrdersResponse[] | null>(null);
  const [loading, setloading] = useState(false);
  const [show, setshow] = useState(false);

  async function getorders(userId: string) {
    console.log(userId);
    setloading(true);
    const result = await getAllOrders(userId);
    setloading(false);
    console.log(result);
    setorders(result);
  }
  useEffect(() => {
    if (status !== "authenticated") return;

    const userId = session?.id;
    if (!userId) return;

    getorders(userId);
  }, [status, session]);

   if (loading ) {
    return <div className="min-h-[60vh] flex flex-col items-center justify-center font-medium">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#e9fff1] flex items-center justify-center">
                <FaSpinner className="text-3xl text-[#16a34a] animate-spin" />
              </div>
            </div>
            <p className="text-gray-600 mt-6 font-medium">Loading your orders...</p>
            <p className="text-gray-400 text-sm mt-1">Just a moment</p>
          </div>
  }

  if (orders && orders.length === 0) {
    return   <div className="min-h-[60vh] flex items-center justify-center px-4 font-medium">
            <div className="max-w-md text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                  <FaBoxOpen className="text-5xl text-gray-300" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your orders are empty
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Looks like you haven't added anything to your orders yet.
                <br />
                Start exploring our products!
              </p>
              <Link
                className="inline-flex items-center gap-2 bg-linear-to-r from-[#16a34a] to-[#15803d] text-white py-3.5 px-8 rounded-xl font-semibold hover:from-[#15803d] hover:to-[#14532d] transition-all shadow-lg shadow-[#16a34a]/20 active:scale-[0.98]"
                href="/"
              >
                Start Shopping
                <FaArrowRightLong className="text-sm" />
              </Link>
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-[#f0fdf4] hover:text-[[#16a34a]] text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Electronics
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-[#f0fdf4] hover:text-[[#16a34a]] text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Fashion
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-[#f0fdf4] hover:text-[[#16a34a]] text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Home
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-[#f0fdf4] hover:text-[[#16a34a]] text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Beauty
                  </Link>
                </div>
              </div>
            </div>
          </div>
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link className="hover:text-green-600 transition" href="/">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">My Orders</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                <FaInbox className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  My Orders
                </h1>
                <p className="text-gray-500 text-sm mt-0.5">
                  Track and manage your 5 orders
                </p>
              </div>
            </div>
            <Link
              className="self-start sm:self-auto text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm"
              href="/"
            >
              <FaBagShopping className="text-xs" />
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          {orders?.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-green-200 shadow-lg shadow-green-100/50"
            >
              <div className="p-5 sm:p-6">
                <div className="flex gap-5">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden">
                      <img
                        className="w-full h-full object-contain"
                        src={order.cartItems[0]?.product?.imageCover}
                      />
                    </div>

                    {order.cartItems.length > 1 && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                        +{order.cartItems.length - 1}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        {order.isPaid ? (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 rounded-lg mb-2">
                            <FaTruck className="text-xs text-blue-600" />

                            <span className="text-xs font-semibold text-blue-600">
                              On the way
                            </span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 rounded-lg mb-2">
                            <FaClock className="text-xs text-amber-600" />

                            <span className="text-xs font-semibold text-amber-600">
                              Processing
                            </span>
                          </div>
                        )}

                        <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                          <FaHashtag className="text-xs text-gray-400" />

                          {order._id.split("").slice(-5).join("")}
                        </h3>
                      </div>
                      <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                        <FaMoneyBill className="text-gray-600" />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-xs text-gray-400" />

                        {order.createdAt.split("T")[0]}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1.5">
                        <FaInbox className="text-xs text-gray-400" />
                        {order.cartItems.length} items
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1.5">
                        <FaLocationDot className="text-xs text-gray-400" />

                        {order.shippingAddress.city}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          {order.totalOrderPrice.toLocaleString()}
                        </span>
                        <span className="text-sm font-medium text-gray-400 ml-1">
                          EGP
                        </span>
                      </div>
                      {show ? (
                        <button className="flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all bg-green-600 text-white shadow-lg shadow-green-600/25"
                        onClick={()=>setshow(false)}>
                          Hide
                          <FaChevronDown className="text-xs transition-transform duration-300 rotate-180" />
                        </button>
                      ) : (
                        <button className="flex items-center cursor-pointer gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
                         onClick={()=>setshow(true)}>
                          Details

                            <FaChevronUp className="text-xs transition-transform duration-300 rotate-180" />
                        
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {show && (
                <div className="border-t border-gray-100 bg-gray-50/50">
                  <div className="p-5 sm:p-6">
                    <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center">
                        <FaReceipt className="text-xs text-green-600" />
                      </div>
                      Order Items
                    </h4>
                    <div className="space-y-3">
                      {order.cartItems.map((item) => (
                        <div key={item._id} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                          <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0">
                            <img
                              alt={item.product.title}
                              className="w-full h-full object-contain"
                              src={item.product.imageCover}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">
                              {item.product.title}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              <span className="font-medium text-gray-700">
                                {item.count}
                              </span>{" "}
                              ×{item.price} EGP
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-lg font-bold text-gray-900">
                              {item.price * item.count}
                            </p>
                            <p className="text-xs text-gray-400">EGP</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                          <FaLocationDot className="" />
                        </div>
                        Delivery Address
                      </h4>
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900">
                          {order.shippingAddress.city}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {order.shippingAddress.details}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2 pt-1">
                          <FaPhone className="text-xs text-gray-400" />

                          {order.shippingAddress.phone}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`p-4 rounded-xl  border  ${order.isPaid ? "bg-blue-100 border-blue-200" : "bg-amber-100 border-amber-200"}`}
                    >
                      <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                        <div
                          className={`w-6 h-6 rounded-lg  flex items-center justify-center ${order.isPaid ? " bg-blue-500" : "bg-amber-500"} `}
                        >
                          {order.isPaid ? (
                            <FaTruck className="text-xs text-white" />
                          ) : (
                            <FaClock className="text-xs text-white" />
                          )}
                        </div>
                        Order Summary
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-600">
                          <span>Subtotal</span>
                          <span className="font-medium">
                            {order.totalOrderPrice} EGP
                          </span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                          <span>Shipping</span>
                          <span className="font-medium">Free</span>
                        </div>
                        <hr className="border-gray-200/50 my-2" />
                        <div className="flex justify-between pt-1">
                          <span className="font-semibold text-gray-900">
                            Total
                          </span>
                          <span className="font-bold text-lg text-gray-900">
                            {order.totalOrderPrice} EGP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
