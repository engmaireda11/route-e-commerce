"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCity,
  FaPen,
  FaPhoneAlt,
  FaPlus,
  FaTrash,
  FaUserAlt,
} from "react-icons/fa";
import { FaChevronRight, FaGear, FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import {
  addUserAddress,
  deleteUserAddress,
  getUserAddress,
  updateaddress,
} from "@/actions/address.action";

export interface AddressData {
  name: string;
  details: string;
  phone: string;
  city: string;
}
export interface AddressInfo {
  name: string;
  details: string;
  phone: string;
  city: string;
  _id: string;
}

export default function page() {
  const [add, setadd] = useState<string|Boolean>(false);
  const [edit, setedit] = useState(false);
  const [loading, setloading] = useState(false);
  const [address, setaddress] = useState<AddressInfo[] | null>(null);
  const form = useForm({
    defaultValues: {
      name: "",
      details: "",
      phone: "",
      city: "",
    },
  });
  const { register, handleSubmit  ,setValue} = form;

  async function addAddress(data: AddressData) {
    console.log(data);
    setloading(true);
    const result = await addUserAddress(data);
    setloading(false);
    setadd(false);
    if (result.status === "success") {
      setaddress(result.data);
    }}
  async function updateAddress(data: AddressData ,id:string|Boolean) {
    console.log(data);
    setloading(true);
    const result = await updateaddress(id,data );
    setloading(false);
    setadd(false);
    setedit(false)
    if (result.status === "success") {
      getAddresses()
     
    }

    console.log(result);
  }

  async function getAddresses() {
    
    const result = await getUserAddress();

    console.log(result);

    if (result.status === "success") {
      setaddress(result.data);
    }
  }
  async function deleteAdd(id: string) {
    if (confirm("Are you sure you want to delete this address?")) {
      const result = await deleteUserAddress(id);

      console.log(result);

      if (result.status === "success") {
        setaddress(result.data);
      }
    }
  }

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <div className="bg-gradient-to-br from-[#16a34a] via-[#22c55e] font-medium to-[#4ade80] text-white">
          <div className="container mx-auto px-4 py-10 sm:py-12">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
              <Link
                className="hover:text-white transition-colors duration-200"
                href="/"
              >
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">My Account</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                <FaUserAlt className="text-3xl" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  My Account
                </h1>
                <p className="text-white/80 mt-1">
                  Manage your addresses and account settings
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <aside className="w-full lg:w-72 shrink-0">
              <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900">My Account</h2>
                </div>
                <ul className="p-2">
                  <li>
                    <Link
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-[#f0fdf4] text-[#15803d]"
                      href="/profile/address"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-[#22c55e] text-white">
                        <FaLocationDot className=" text-sm" />
                      </div>
                      <span className="font-medium flex-1">My Addresses</span>
                      <FaChevronRight className="text-xs transition-transform text-[#22c55e]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      href="/profile/setting"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                        <FaGear className=" text-sm" />
                      </div>
                      <span className="font-medium flex-1">Settings</span>
                      <FaChevronRight className="text-xs transition-transform text-gray-400" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <main className="flex-1 min-w-0">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      My Addresses
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Manage your saved delivery addresses
                    </p>
                  </div>
                  <button
                    className="inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-xl bg-[#16a34a] text-white font-semibold hover:bg-[#15803d] transition-colors shadow-lg shadow-[#16a34a]/25"
                    onClick={() => setadd(true)}
                  >
                    <FaPlus className=" text-sm" />
                    Add Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {address?.map((addres) => (
                    <div
                      key={addres._id}
                      className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#dcfce7] transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-11 h-11 rounded-xl bg-[#f0fdf4] flex items-center justify-center shrink-0 group-hover:bg-[#dcfce7] transition-colors">
                            <FaLocationDot className=" text-lg text-[#16a34a]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 mb-1">
                              {addres.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {addres.details}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1.5">
                                <FaPhoneAlt className="text-xs" />

                                {addres.phone}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <FaCity className="text-xs" />

                                {addres.city}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#dcfce7] hover:text-[#16a34a] flex items-center justify-center cursor-pointer transition-colors"
                            title="Edit address"
                            onClick={() => {
                              setValue("name", addres.name);
                              setValue("details", addres.details);
                              setValue("phone", addres.phone);
                              setValue("city", addres.city);
                              setadd(addres._id);
                              setedit(true)
                            }}
                          >
                            <FaPen className="text-sm" />
                          </button>
                          <button
                            className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 flex items-center justify-center cursor-pointer transition-colors disabled:opacity-50"
                            title="Delete address"
                            onClick={() => deleteAdd(addres._id)}
                          >
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {address?.length === 0 ? (
                  <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                      <FaLocationDot className=" text-3xl text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      No Addresses Yet
                    </h3>
                    <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                      Add your first delivery address to make checkout faster
                      and easier.
                    </p>
                    <button
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16a34a] text-white font-semibold hover:bg-[#15803d] transition-colors cursor-pointer shadow-lg shadow-[#16a34a]/25"
                      onClick={() => setadd(true)}
                    >
                      <FaPlus className="" />
                      Add Your First Address
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {add && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                      onClick={() => setadd(false)}
                    />
                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900">
                          Add New Address
                        </h2>
                        <button
                          className="w-9 h-9 rounded-lg cursor-pointer
                         bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          onClick={() => setadd(false)}
                        >
                          <IoMdClose />
                        </button>
                      </div>
                      <form
                        className="space-y-5"
                        onSubmit={handleSubmit(addAddress)}
                      >
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address Name
                          </label>
                          <input
                            placeholder="e.g. Home, Office"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                            required
                            type="text"
                            {...register("name")}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Address
                          </label>
                          <textarea
                            placeholder="Street, building, apartment..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all resize-none"
                            required
                            {...register("details")}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              placeholder="01xxxxxxxxx"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                              required
                              type="tel"
                              {...register("phone")}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City
                            </label>
                            <input
                              placeholder="Cairo"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                              required
                              type="text"
                              {...register("city")}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 pt-4">
                          <button
                            type="button"
                            className="flex-1 py-3 px-6 cursor-pointer rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                            onClick={() => setadd(false)}
                          >
                            Cancel
                          </button>
                          {edit ?  <button
                            type="button"
                            className="flex-1 cursor-pointer py-3 px-6 rounded-xl bg-[#16a34a] text-white font-semibold hover:bg-[#15803d] transition-colors disabled:opacity-50 shadow-lg shadow-[#16a34a]/25"
                            disabled={loading}
                       onClick={handleSubmit((data) => updateAddress(data, add))}
                          >
                            {loading ? "Updating..." : "Update Address"}
                          </button>: <button
                            type="submit"
                            className="flex-1 cursor-pointer py-3 px-6 rounded-xl bg-[#16a34a] text-white font-semibold hover:bg-[#15803d] transition-colors disabled:opacity-50 shadow-lg shadow-[#16a34a]/25"
                            disabled={loading}
                          >
                            {loading ? "Saving..." : "Add Address"}
                          </button>}
                         
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
