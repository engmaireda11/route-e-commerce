"use client";
import {
  clearCart,
  getCartProduct,
  removeItem,
  updateCart,
} from "@/actions/cart.action";
import { CartResponse } from "@/types/cart.type";
import Link from "next/link";
import React, { useEffect, useState ,useContext } from "react";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";
import {
  FaBoxOpen,
  FaCheck,
  FaLock,
  FaMinus,
  FaPlus,
  FaShieldAlt,
  FaShoppingBag,
  FaShoppingCart,
  FaSpinner,
  FaTag,
  FaTrash,
  FaTruck,
} from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-toastify";
import {Numbercontext} from "@/context/cartcontxt";

export default function Cart() {
  const [Product, setProduct] = useState<CartResponse | null>(null);
  const [productDelet, setdelet] = useState(false);
  const [loading, setloading] = useState(false);
  const [loadingUpdate, setloadingUpdate] = useState(false);
  const [currentId, setcurrentId] = useState("");
   const {setwishilst,wishilst,setcartItems,cartItems} = useContext(Numbercontext)

  async function getProducts() {
    setloading(true);
    const result = await getCartProduct();
    setloading(false);
    console.log(result);
    if ( result.status && result.status === "success") {
      setProduct(result);
      toast.info(result.message, {
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
  async function updatecart(count: number, id: string ,sign:string) {
    setcurrentId(id)
    setloadingUpdate(true);
    const result = await updateCart(count, id);
    if(sign === "+"){
       setcartItems(cartItems +1)

    }
    else {
       setcartItems(cartItems -1)
    }
    setloadingUpdate(false);
    console.log(result);
    if (result.status === "success") {
      setProduct(result);
    }
  }
  async function Deleteitem(id: string , count:number) {
     setcurrentId(id)
    setloadingUpdate(true);
    const result = await removeItem(id);
     setloadingUpdate(false);
     setcartItems(cartItems -count)
    console.log(result);
    if (result.status === "success") {
      setProduct(result);
    }
  }
  async function clearitems() {
    const result = await clearCart();
    setcartItems(0)
    console.log(result);
    if (result.status === "success") {
      setProduct(null);
    }
  }

  function showswel(id: string, title: string ,count:number) {
    Swal.fire({
      title: "Remove Item?",
      html: `Remove <strong>${title}</strong> from your cart?`,
      iconHtml: ReactDOMServer.renderToString(
        <FaRegTrashAlt className="w-8 h-8 text-red-500" />,
      ),
      showCancelButton: true,
      confirmButtonText: "Remove",
      cancelButtonText: "Cancel",
      reverseButtons: true,

      customClass: {
        popup: "rounded-3xl p-8",
        title: "text-xl font-bold text-gray-900 mb-2",
        htmlContainer: "text-gray-500 text-sm leading-relaxed",
        confirmButton:
          "bg-red-500 hover:bg-red-600  text-white cursor-pointer  font-semibold py-3 px-6 rounded-xl transition-all",
        cancelButton:
          " bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer py-3 px-6 rounded-xl transition-all",
      },

      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Deleteitem(id,count);
      }
    });
  }
  function showclearitems() {
    Swal.fire({
      title: "Clear Your Cart?",
      html: `All items will be removed from your cart. This action cannot be undone.`,
      iconHtml: ReactDOMServer.renderToString(
        <FaRegTrashAlt className="w-8 h-8 text-red-500" />,
      ),
      showCancelButton: true,
      confirmButtonText: "Yes,Clear All",
      cancelButtonText: "Keep Shopping",
      reverseButtons: true,

      customClass: {
        popup: "rounded-3xl p-8",
        title: "text-xl font-bold text-gray-900 mb-2",
        htmlContainer: "text-gray-500 text-sm leading-relaxed",
        confirmButton:
          "bg-red-500 hover:bg-red-600  text-white cursor-pointer  font-semibold py-3 px-6 rounded-xl transition-all",
        cancelButton:
          " bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer py-3 px-6 rounded-xl transition-all",
      },

      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        clearitems();
  Swal.fire({
    title: "Cart Deleted!",
    text: "Cart Now IS Empty",
    icon: "success",
    timer:2000,
     
  });
      }
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
  return <div className="min-h-[60vh] flex flex-col items-center justify-center font-medium">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#e9fff1] flex items-center justify-center">
              <FaSpinner className="text-3xl text-[#16a34a] animate-spin" />
            </div>
          </div>
          <p className="text-gray-600 mt-6 font-medium">Loading your cart...</p>
          <p className="text-gray-400 text-sm mt-1">Just a moment</p>
        </div>
}

if (Product?.numOfCartItems === 0 || !Product) {
  return   <div className="min-h-[60vh] flex items-center justify-center px-4 font-medium">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                <FaBoxOpen className="text-5xl text-gray-300" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven't added anything to your cart yet.
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
  
        <div className="bg-gray-50 min-h-screen py-8">
          <div className="container mx-auto px-4 font-medium">
            <div className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link className="hover:text-[#16a34a] transition" href="/">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Shopping Cart</span>
              </nav>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-linear-to-r from-[#16a34a] to-[#15803d] text-white w-12 h-12 rounded-xl flex items-center justify-center">
                      <FaShoppingCart />
                    </span>
                    Shopping Cart
                  </h1>
                  <p className="text-gray-500 mt-2">
                    You have{" "}
                    <span className="font-semibold text-[#16a34a]">
                      {Product?.numOfCartItems} item
                    </span>{" "}
                    in your cart
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {Product?.data.products.map((produt) => (
                    <div
                      key={produt.product.id}
                      className="relative font-medium bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 "
                    >
                      {loadingUpdate && currentId === produt.product.id && (
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 rounded-2xl flex items-center justify-center">
                          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                            <div className="w-4 h-4 border-2 border-[#16a34a] border-t-transparent rounded-full animate-spin" />
                            <span className="text-sm font-medium text-gray-600">
                              Updating...
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="p-4 sm:p-5">
                        <div className="flex gap-4 sm:gap-6">
                          <Link
                            className="relative shrink-0 group"
                            href={`/products/${produt.product.id}`}
                          >
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                              <img
                                alt="Court Tennis Track Pants Black"
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                src={produt.product.imageCover}
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <FaCheck className="text-[8px]" />
                              In Stock
                            </div>
                          </Link>
                          <div className="flex-1 min-w-0 flex flex-col">
                            <div className="mb-3">
                              <Link
                                className="group/title"
                                href={`/products/${produt.product.id}`}
                              >
                                <h3 className="font-semibold text-gray-900 group-hover/title:text-[#16a34a] transition-colors leading-relaxed text-base sm:text-lg">
                                  {produt.product.title}
                                </h3>
                              </Link>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-[#f0fdf4] to-emerald-50 text-[#15803d] text-xs font-medium rounded-full">
                                  {produt.product.category.name}
                                </span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs text-gray-500">
                                  SKU: 5CA043
                                </span>
                              </div>
                            </div>
                            <div className="mb-4">
                              <div className="flex items-baseline gap-2">
                                <span className="text-[#16a34a] font-bold text-lg">
                                  {produt.price} EGP
                                </span>
                                <span className="text-xs text-gray-400">
                                  per unit
                                </span>
                              </div>
                            </div>
                            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                              <div className="flex items-center">
                                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                  <button
                                    className="h-8 w-8 rounded-lg cursor-pointer bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                                    aria-label="Decrease quantity"
                                    onClick={() =>
                                      updatecart(
                                        produt.count - 1,
                                        produt.product.id,
                                        "-"
                                      )
                                    }
                                  >
                                    <FaMinus className="text-xs" />
                                  </button>
                                  <span className="w-12 text-center font-bold text-gray-900">
                                    {produt.count}
                                  </span>
                                  <button
                                    className="h-8 w-8 rounded-lg cursor-pointer bg-[#16a34a] shadow-sm shadow-[#16a34a]/30 flex items-center justify-center text-white hover:bg-[#15803d] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                    aria-label="Increase quantity"
                                    onClick={() =>
                                      updatecart(
                                        produt.count + 1,
                                        produt.product.id,
                                      "+"
                                      )
                                    }
                                  >
                                    <FaPlus className="text-xs" />
                                  </button>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-right">
                                  <p className="text-xs text-gray-400 mb-0.5">
                                    Total
                                  </p>
                                  <p className="text-xl font-bold text-gray-900">
                                    {produt.count * produt.price}
                                    <span className="text-sm font-medium text-gray-400">
                                      EGP
                                    </span>
                                  </p>
                                </div>
                                <button
                                  className="h-10 w-10 rounded-xl border cursor-pointer border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200"
                                  title="Remove item"
                                  aria-label="Remove from cart"
                                  onClick={() =>
                                    showswel(
                                      produt.product.id,
                                      produt.product.title,
                                      produt.count
                                    )
                                  }
                                >
                                  <FaTrash className="text-sm" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <Link
                    className="text-[#16a34a] hover:text-[#15803d] font-medium text-sm flex items-center gap-2"
                    href="/"
                  >
                    <span>←</span> Continue Shopping
                  </Link>
                  <button
                    className="group cursor-pointer flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                    onClick={() => showclearitems()}
                  >
                    <FaTrash className="text-xs group-hover:scale-110 transition-transform" />

                    <span>Clear all items</span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                  <div className="bg-gradient-to-r from-[#16a34a] to-[#15803d] px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FaShoppingBag />
                      Order Summary
                    </h2>
                    <p className="text-[#dcfce7] text-sm mt-1">
                      {Product?.numOfCartItems} item in your cart
                    </p>
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <FaTruck className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-700">
                          Free Shipping!
                        </p>
                        <p className="text-sm text-green-600">
                          You qualify for free delivery
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium text-gray-900">
                          {Product?.data.totalCartPrice} EGP
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="font-medium text-green-600">FREE</span>
                      </div>
                      <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-900 font-semibold">
                            Total
                          </span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                              {Product?.data.totalCartPrice}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              EGP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-[#4ade80] hover:text-[#16a34a] hover:bg-[#f0fdf4]/50 transition-all">
                      <FaTag />
                      <span className="text-sm font-medium">
                        Apply Promo Code
                      </span>
                    </button>
                    <Link
                      className="w-full bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#15803d] hover:to-[#14532d;
] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#16a34a]/20 active:scale-[0.98]"
                      href="/checkout"
                    >
                      <FaLock />
                      <span>Secure Checkout</span>
                    </Link>
                    <div className="flex items-center justify-center gap-4 py-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaShieldAlt className="text-green-500" />

                        <span>Secure Payment</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200" />
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaTruck className="text-blue-600" />

                        <span>Fast Delivery</span>
                      </div>
                    </div>
                    <Link
                      className="block text-center text-[#16a34a] hover:text-[#15803d] text-sm font-medium py-2"
                      href="/"
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
