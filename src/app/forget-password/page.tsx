"use client";
import {
  restUserPass,
  varifayCode,
  reastnewPassword,
} from "@/actions/forgetPassword.action";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  FaEnvelope,
  FaKey,
  FaLongArrowAltLeft,
  FaShieldAlt,
} from "react-icons/fa";
import { FaCheck, FaKeybase, FaLock } from "react-icons/fa6";
import { toast } from "react-toastify";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface Rest {
  email: string;
}
export interface Varfy {
  resetCode: string;
}
export interface Password {
  email: string;
  newPassword: string;
}

export const RestSchema = z
  .object({
    email: z.string(),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Shema = z.object({
  resetCode: z
    .string()
    .nonempty("Reset code is required")
    .min(4, "Reset code must be 4 digits"),
});

export default function page() {
  const [loadin, setloadin] = useState(false);
  const [varify, setvarify] = useState(false);
  const [rest, setrest] = useState(true);
  const [create, setcreate] = useState(false);
  const [confirmed, setconfirmed] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
  });
  async function restPassword(data: Rest) {
    setloadin(true);

    setUserEmail(data.email);
    const result = await restUserPass(data);
    setloadin(false);
    console.log(result);

    if (result.statusMsg == "success") {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setvarify(true);
      setrest(false);
      setcreate(false);
    } else {
      toast.error(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const { register, handleSubmit } = form;
  // ================================

  const restform = useForm({
    defaultValues: {
      email: "",
      newPassword: "",
      confirmPassword: "",
    },

    resolver: zodResolver(RestSchema),
  });

  async function restNewPassword(data: Password) {
    setloadin(true);

    const real = {
      email: userEmail,
      newPassword: data.newPassword,
    };

    const result = await reastnewPassword(real);
    setloadin(false);
    console.log(result);

    if (result.token) {
      toast.success("Password Rest Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setvarify(false);
      setrest(false);
      setcreate(false);
      setconfirmed(true);
    } else {
      toast.error(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const {
    register: regRest,
    handleSubmit: handlePass,
    formState: passstate,
  } = restform;

  // ==================================

  const varifyform = useForm({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(Shema),
  });
  async function codevarify(data: Varfy) {
    setloadin(true);

    
    const result = await varifayCode(data);
    setloadin(false);
    console.log(result);

    if (result.status === "Success") {
      toast.success("Varifyed code", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setvarify(false);
      setrest(false);
      setcreate(true);
    } else {
      toast.error(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const {
    register: varifyReg,
    handleSubmit: handelVarify,
    formState,
  } = varifyform;
  return (
    <>
      <div
        className="container py-16 mx-auto px-4"
        id="forgot-password-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="hidden lg:block">
            <div className="text-center space-y-6">
              <div className="w-full h-96 bg-gradient-to-br from-[#f0fdf4] via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-[#dcfce7]/50" />
                <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
                <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50" />
                <div className="relative flex flex-col items-center gap-6 z-10">
                  <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="w-20 h-20 rounded-2xl bg-[#dcfce7] flex items-center justify-center">
                      <FaLock className="text-[#16a34a] text-4xl" />
                    </div>
                  </div>
                  <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                    <FaEnvelope className="text-[#f0fdf4]0 text-xl" />
                  </div>
                  <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                    <FaShieldAlt className="text-green-500 text-xl" />
                  </div>
                  <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#4ade80] animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-[#f0fdf4] animate-pulse [animation-delay:150ms]" />
                    <div className="w-3 h-3 rounded-full bg-[#16a34a] animate-pulse [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  Reset Your Password
                </h2>
                <p className="text-lg text-gray-600">
                  Don't worry, it happens to the best of us. We'll help you get
                  back into your account in no time.
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaEnvelope className="text-[#16a34a] mr-2" />
                    Email Verification
                  </div>
                  <div className="flex items-center">
                    <FaShieldAlt className="text-green-600 mr-2" />
                    Secure Reset
                  </div>
                  <div className="flex items-center">
                    <FaLock className="text-[#16a34a] mr-2" />
                    Encrypted
                  </div>
                </div>
              </div>
            </div>
          </div>
          {rest && (
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-[#16a34a]">
                      Fresh<span className="text-gray-800">Cart</span>
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Forgot Password?
                  </h1>
                  <p className="text-gray-600">
                    No worries, we'll send you a reset code
                  </p>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-[#16a34a] text-white ring-4 ring-[#dcfce7]">
                      <FaEnvelope className=" text-xs" />
                    </div>
                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                      <FaKey className="text-xs" />
                    </div>
                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                      <FaShieldAlt className="text-xs" />
                    </div>
                  </div>
                </div>
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(restPassword)}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#f0fdf4]0 focus:ring-2 focus:ring-[#dcfce7] transition-all"
                        placeholder="Enter your email address"
                        type="email"
                        {...register("email")}
                      />
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#16a34a] text-white py-3 px-4 rounded-xl cursor-pointer hover:bg-[#15803d;
] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loadin}
                  >
                    {loadin ? " Sending...." : " Send Reset Code"}
                  </button>
                  <div className="text-center">
                    <Link
                      className="inline-flex items-center gap-2 text-sm text-[#16a34a] hover:text-[#15803d;
] font-medium transition-colors"
                      href="/login"
                    >
                      <FaLongArrowAltLeft className="text-xs" />
                      Back to Sign In
                    </Link>
                  </div>
                </form>
                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-600">
                    Remember your password?{" "}
                    <Link
                      className="text-[#16a34a] hover:text-[#15803d;
] font-semibold transition-colors"
                      href="/login"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
          {create && (
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-[#16a34a]">
                      Fresh<span className="text-gray-800">Cart</span>
                    </span>
                  </div>

                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Create New Password
                  </h1>

                  <p className="text-gray-600">
                    Your new password must be different from previous passwords
                  </p>
                </div>

                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-[#16a34a] text-white">
                      <FaCheck className="" />
                    </div>

                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-[#16a34a]"></div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-[#16a34a] text-white">
                      <FaCheck className="" />
                    </div>

                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-[#16a34a]"></div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-[#16a34a] text-white ring-4 ring-[#dcfce7]">
                      <FaLock className="text-xs" />
                    </div>
                  </div>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={handlePass(restNewPassword)}
                >
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      New Password
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#dcfce7] transition-all"
                        placeholder="Enter new password"
                        type={showpassword ? "text" : "password"}
                        {...regRest("newPassword")}
                      />

                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setshowpassword((prev) => !prev)}
                      >
                        {showpassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {passstate.errors.newPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {passstate.errors.newPassword.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <input
                        id="confirmPassword"
                        className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#dcfce7] transition-all"
                        placeholder="Confirm new password"
                        type={showconfirmpassword ? "text" : "password"}
                        {...regRest("confirmPassword")}
                      />

                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setshowconfirmpassword((prev) => !prev)}
                      >
                        {showconfirmpassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {passstate.errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {passstate.errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#16a34a] text-white py-3 px-4 rounded-xl hover:bg-[#15803d] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loadin}
                  >
                    {loadin ? "Rest...." : "Reset Password"}
                  </button>
                </form>
              </div>
            </div>
          )}
          {varify && (
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-[#16a34a]">
                      Fresh<span className="text-gray-800">Cart</span>
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Check Your Email
                  </h1>
                  <p className="text-gray-600">
                    Enter the 6-digit code sent to engmaiasaad97@gmail.com
                  </p>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-[#16a34a] text-white">
                      <FaCheck />
                    </div>
                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-[#16a34a]" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-[#16a34a] text-white ring-4 ring-[#dcfce7]">
                      <FaKey className="text-xs" />
                    </div>
                    <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                      <FaLock className="text-xs" />
                    </div>
                  </div>
                </div>
                <form className="space-y-6" onSubmit={handelVarify(codevarify)}>
                  <div>
                    <label
                      htmlFor="resetCode"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Verification Code
                    </label>
                    <div className="relative">
                      <input
                        id="resetCode"
                        maxLength={6}
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#dcfce7] transition-all text-center text-2xl tracking-[0.5em] font-mono"
                        placeholder="••••••"
                        type="text"
                        {...varifyReg("resetCode")}
                      />
                      {formState.errors.resetCode && (
                        <p className="text-red-500 text-sm mt-1">
                          {formState.errors.resetCode.message}
                        </p>
                      )}
                      <FaShieldAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Didn't receive the code?
                      <button
                        type="button"
                        className="text-[#16a34a] cursor-pointer hover:text-[#15803d] font-semibold transition-colors"
                        onClick={handleSubmit(restPassword)}
                      >
                        Resend Code
                      </button>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#16a34a] cursor-pointer text-white py-3 px-4 rounded-xl hover:bg-[#15803d] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Verify Code
                  </button>
                  <div className="text-center">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 text-sm text-gray-500 hover:text-[#16a34a] font-medium transition-colors"
                      onClick={() => {
                        setvarify(false);
                        setrest(true);
                      }}
                    >
                      <FaLongArrowAltLeft className="text-xs" />
                      Change email address
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {confirmed && (
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-primary-600">
                      Fresh<span className="text-gray-800">Cart</span>
                    </span>
                  </div>
                </div>
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <FaCheck className="text-green-600 text-3xl"/>
                
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Password Reset!
                    </h2>
                    <p className="text-gray-600">
                      Your password has been successfully reset. You can now
                      sign in with your new password.
                    </p>
                  </div>
                  <Link className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                  href={`/login`}>
                    Back to Sign In
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
