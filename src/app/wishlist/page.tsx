"use client";
import { getWishlistProduct, removeItem } from "@/actions/wishlist.action";
import { CartResponse } from "@/types/cart.type";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { FaArrowRightLong, FaHeart, FaTrash } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import AddButton from "../_component/addbutton/AddButton";
import { FaBoxOpen, FaCheck, FaRegHeart, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { Numbercontext } from "@/context/cartcontxt";
import { getCartProduct } from "@/actions/cart.action";

export default function Wishlist() {
  const [loading, setloading] = useState(false);
  const [Product, setProduct] = useState<ProductsResponse | null>(null);
  const [cart, setcart] = useState<CartResponse | null>(null);
  const [currentId, setcurrentId] = useState("");
  const { setwishilst, wishilst, setcartItems, cartItems } =
    useContext(Numbercontext);
  async function getwishProducts() {
    setloading(true);
    const result = await getWishlistProduct();
    setloading(false);
    console.log(result);
    if ( result.status &&result.status === "success") {
      if (result.count == 0) {
        setProduct(null);
      } else {
        setProduct(result);
      }
    } else {
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

  async function getProducts() {
    setloading(true);
    const result = await getCartProduct();
    setloading(false);
    console.log(result);
    if (result.status === "success") {
      setcart(result);
    } else {
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
  useEffect(() => {
    getwishProducts();
    getProducts();
  }, []);

  async function Deleteitem(id: string) {
    setcurrentId(id);

    const result = await removeItem(id);
    setwishilst(wishilst - 1);

    console.log(result);
    if (result.status === "success") {
      if (wishilst == 0) {
        setProduct(null);
      }

      getwishProducts();
    }
  }
  return (
    <>
      {loading ? (
        <div className="min-h-[60vh] flex flex-col items-center justify-center font-medium">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#e9fff1] flex items-center justify-center">
              <FaSpinner className="text-3xl text-[#16a34a] animate-spin" />
            </div>
          </div>
          <p className="text-gray-600 mt-6 font-medium">
            Loading your Wishlist...
          </p>
          <p className="text-gray-400 text-sm mt-1">Just a moment</p>
        </div>
      ) : Product == null ? (
        <div className="min-h-screen bg-gray-50/50 font-medium">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-sm mx-auto text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <FaRegHeart className="text-3xl text-gray-300" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Browse products and save your favorites here.
              </p>
              <Link
                className="inline-flex items-center gap-2 bg-linear-to-r from-[#16a34a] to-[#15803d] text-white py-3.5 px-8 rounded-xl font-semibold hover:from-[#15803d] hover:to-[#14532d] transition-all shadow-lg shadow-[#16a34a]/20 active:scale-[0.98]"
                href="/products"
              >
                Browse Your Producrts
                <FaArrowRightLong className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50/50">
          <div className="bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 py-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link
                  className="hover:text-primary-600 transition-colors"
                  href="/"
                >
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Wishlist</span>
              </nav>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <FaHeart className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      My Wishlist
                    </h1>
                    <p className="text-gray-500 text-sm">
                      {Product?.count || 0} item saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>
              <div className="divide-y divide-gray-100">
                {Product?.data.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="md:col-span-6 flex items-center gap-4">
                      <Link
                        className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0"
                        href={`/products/${product.id}`}
                      >
                        <img
                          alt={product.title}
                          className="w-full h-full object-contain p-2"
                          src={product.imageCover}
                        />
                      </Link>
                      <div className="min-w-0">
                        <Link
                          className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                          href={`/products/${product.id}`}
                        >
                          {product.title}
                        </Link>
                        <p className="text-sm text-gray-400 mt-1">
                          {product?.category?.name}
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                      <span className="md:hidden text-sm text-gray-500">
                        Price:
                      </span>
                      <div className="text-right md:text-center">
                        <div className="font-semibold text-gray-900">
                          {product.price} EGP
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex md:justify-center">
                      <span className="md:hidden text-sm text-gray-500 mr-2">
                        Status:
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        In Stock
                      </span>
                    </div>
                    <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                      {/* {cart?.data.products.includes(product)?<button>kjhsiajraio</button>:<AddButton word="wishlist" id ={product.id}/>} */}
                      {cart?.data.products.some(
                        (item) => item.product.id === product.id,
                      ) ? (
                        <Link
                          className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                          href="/cart"
                        >
                          <FaCheck className="text-xs text-green-600"/>
                      
                          <span className="md:hidden lg:inline">View Cart</span>
                        </Link>
                      ) : (
                        <AddButton word="wishlist" id={product.id}   onSuccess={getProducts} />
                      )}

                      <button
                        className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 cursor-pointer hover:bg-red-50 transition-all disabled:opacity-50"
                        title="Remove"
                        onClick={() => Deleteitem(product.id)}
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <Link
                className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors"
                href="/products"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
