"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState ,useEffect  } from "react";
import { FaList } from "react-icons/fa";
import { FaSliders, FaXmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuGrip } from "react-icons/lu";

export default function page() {
  
   const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setSearch(q);
  }, [searchParams]);


  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link className="hover:text-green-600 transition-colors" href="/">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium">Search Results</span>
            </nav>
            <form className="max-w-2xl">
              <div className="relative">
                <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  placeholder="Search for products..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all text-lg"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Search Results for {search}
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                We found 0 products for you
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">Categories</h3>
                    </div>
                    <div className="space-y-2 max-h-52 overflow-y-auto">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Music
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Men's Fashion
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Women's Fashion
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          SuperMarket
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Baby &amp; Toys
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Home
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Books
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Beauty &amp; Health
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Mobiles
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Electronics
                        </span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-gray-100" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">
                      Price Range
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">
                          Min (EGP)
                        </label>
                        <input
                          placeholder=""
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                          type="number"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">
                          Max (EGP)
                        </label>
                        <input
                          placeholder="No limit"
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                        Under 500
                      </button>
                      <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                        Under 1K
                      </button>
                      <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                        Under 5K
                      </button>
                      <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
                        Under 10K
                      </button>
                    </div>
                  </div>
                  <hr className="border-gray-100" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">Brands</h3>
                    </div>
                    <div className="space-y-2 max-h-52 overflow-y-auto">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Canon
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Dell
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Lenovo
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          SONY
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Infinix
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Realme
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          HONOR
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Nokia
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          OPPO
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Huawei
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Apple
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Xiaomi
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Samsung
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          Jack ones
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          type="checkbox"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                          LC Waikiki
                        </span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-gray-100" />
                  <button className="w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors">
                    Clear All Filters
                  </button>
                </div>
              </div>
            </aside>
            <main className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <button className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                    <FaSliders />
                    Filters
                  </button>
                  <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1">
                    <button className="p-2 rounded-md transition-colors bg-green-600 text-white">
                      <LuGrip />
                    </button>
                    <button className="p-2 rounded-md transition-colors text-gray-500 hover:text-gray-700">
                      <FaList />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white">
                    <option value="">Relevance</option>
                    <option value="price">Price: Low to High</option>
                    <option value="-price">Price: High to Low</option>
                    <option value="-ratingsAverage">Rating: High to Low</option>
                    <option value="title">Name: A to Z</option>
                    <option value="-title">Name: Z to A</option>
                  </select>
                </div>
              </div>
              <div className="mb-6 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  Active:
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                  "z"
                  <button className="hover:text-red-500">
                    <FaXmark />
                  </button>
                </span>
                <button className="text-xs text-gray-500 hover:text-gray-700 underline ml-2">
                  Clear all
                </button>
              </div>
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                  <IoSearch className=" text-3xl text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                  Clear Filters
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
