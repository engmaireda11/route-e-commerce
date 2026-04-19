"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCity,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaPen,
  FaPhoneAlt,
  FaPlus,
  FaTrash,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { FaChevronRight, FaGear, FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { loginShema } from './../../../schemas/auth.schema';
import { updatepassword, updateuserdata } from "@/actions/setting.action";
import { toast } from "react-toastify";


export interface UserData {
  name: string;
 
  phone: string;
  email: string;
}
export interface Userrepassword {
  
    currentPassword:string,
    password:string,
    rePassword:string

}

export default function Setting() {
  const mysession = useSession();
  const [message, setmessage] = useState("");
  const [messagepass, setmessagepass] = useState("");
    const [loading, setloading] = useState(false);
    const [loadingpassword, setloadingpassword] = useState(false);
     const [showCurrentpassword, setshowCurrentpassword] = useState(false);
     const [showpassword, setshowpassword] = useState(false);
     const [showREpassword, sethowREpassword] = useState(false);

    const form = useForm<UserData>({
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        
      },
    });
    const passform = useForm<Userrepassword>({
      defaultValues: {
         currentPassword:"",
    password:"",
    rePassword:""
        
      },
    });
     async function UpdateUserPassword(data :Userrepassword){

      console.log(data);
     
setloadingpassword(true)
      const result = await updatepassword(data)
      setloadingpassword(false)
     
      console.log(result);
      if(result.message=="success")
      {setmessagepass(result.message)}
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
     async function UpdateUserData(data :UserData){

      console.log(data);
      setloading(true)

      const result = await updateuserdata(data)
      setloading(true)
      console.log(result);

      setmessage(result.message)
      
      

     }


    const { register, handleSubmit } = form;
    const { register:regpass, handleSubmit:handlePass } = passform;
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
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      href="/profile/address"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                        <FaLocationDot className=" text-sm" />
                      </div>
                      <span className="font-medium flex-1">My Addresses</span>
                      <FaChevronRight className="text-xs transition-transform text-[#22c55e]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-[#f0fdf4] text-[#15803d]"
                      href="/profile/setting"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-[#22c55e] text-white">
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
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Account Settings
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Update your profile information and change your password
                  </p>
                </div>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 sm:p-8 border-b border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#dcfce7] flex items-center justify-center">
                        <FaUser className="text-2xl text-[#16a34a]" />
                       
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Profile Information
                        </h3>
                        <p className="text-sm text-gray-500">
                          Update your personal details
                        </p>
                      </div>
                    </div>
                    {message==="success"?<div className="mb-6 p-4 rounded-xl text-sm font-medium bg-green-50 text-green-700 border border-green-200">Profile updated successfully</div>: message==="fail"?<div className="mb-6 p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200">Failed to update profile</div>:""}
                    <form className="space-y-5" onSubmit={handleSubmit(UpdateUserData)}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                          required
                          type="text"
                          defaultValue={mysession.data?.user.name?.toString() ?? ''}
                          {...register("name")}

                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                          required
                          type="email"
                           {...register("email")}
                          
                        />
                      </div>
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
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16a34a] text-white font-semibold hover:bg-[#15803d] cursor-pointer disabled:cursor-not-allowed transition-colors disabled:opacity-50 shadow-lg shadow[#16a34a]/25"
                        disabled={loading}
                        >
                          <FaLock />
                          {loading?"Saving...":"Save Changes"}
                        
                       
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="p-6 sm:p-8 bg-gray-50">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Account Information
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">User ID</span>
                        <span className="font-mono text-gray-700">
                          {mysession.data?.id}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Role</span>
                        <span className="px-3 py-1 rounded-lg bg-[#dcfce7] text-[#15803d] font-medium capitalize">
                          user
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                        <FaLock  className="text-2xl text-amber-600"/>
                      
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Change Password
                        </h3>
                        <p className="text-sm text-gray-500">
                          Update your account password
                        </p>
                      </div>
                    </div>
                     {messagepass==="success"?<div className="mb-6 p-4 rounded-xl text-sm font-medium bg-green-50 text-green-700 border border-green-200">Password changed successfully</div>: messagepass==="fail"?<div className="mb-6 p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200">New passwords do not match</div>:""}
                    <form className="space-y-5" onSubmit={handlePass(UpdateUserPassword)}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <div className="relative">
                          <input
                            placeholder="Enter your current password"
                            className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                            required
                             type={showCurrentpassword ? "text" : "password"}
                            {...regpass("currentPassword")}
                            
                          />
                          <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setshowCurrentpassword((prev) => !prev)}
                          >
                          {showCurrentpassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <input
                            placeholder="Enter your new password"
                            className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                            required
                            minLength={6}
                             type={showpassword ? "text" : "password"}
                            {...regpass("password")}
                            
                          />
                          <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setshowpassword((prev) => !prev)}
                          >
                          {showpassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Must be at least 6 characters
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <div className="relative">
                          <input
                            placeholder="Confirm your new password"
                            className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all"
                            required
                             type={showREpassword ? "text" : "password"}
                             {...regpass("rePassword")}
                            
                          />
                          <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => sethowREpassword((prev) => !prev)}
                          >
                           {showREpassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25"
                          disabled={loadingpassword}
                        >
                          <FaLock  />

                          {loadingpassword?"Saving...":" Change Password"}
                       
                         
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
