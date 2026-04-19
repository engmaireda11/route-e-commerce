"use client";

import Link from "next/link";


import Image from "next/image";
import image from "../../../assests/login.png";
import React, { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  FaStar,
  FaShieldAlt,
  FaGoogle,
  FaFacebook,
  FaEyeSlash,
  FaSpinner,
  FaEye,
  FaTruck,
  FaClock,
  FaEnvelope,
  FaLock,
  FaUsers,
} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { loginObject, loginShema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react"
import { redirect } from "next/dist/server/api-utils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



export default function Login() {
  const [showpassword, setshowpassword] = useState(false);
   const [loading, setloading] = useState(false);
  const router =useRouter()
  const form = useForm<loginObject>({
    defaultValues: {
      password: "",
      email: "",
    },
     resolver: zodResolver(loginShema),
  });

   async function userLogin (data :loginObject){
    console.log(data);

    setloading(true)

     const response = await signIn("credentials" , {...data , redirect:false })

     setloading(false)

     console.log(response);
     
    if (response?.ok) {
          toast.success("Login Successful", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    
          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else {
        
          toast.error("Incorrect email or password", {
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

  
  const { control, handleSubmit, watch, setError } = form;
  return (
    <>
      <main className="py-10">
        <div className="containe mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 font-medium  gap-12 p-4">
          <div className="hidden lg:block">
            <div className="text-center space-y-6">
              <Image
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
                src={image}
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  FreshCart - Your One-Stop Shop for Fresh Products
                </h2>
                <p className="text-lg text-gray-600">
                  Join thousands of happy customers who trust FreshCart for
                  their daily grocery needs
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaTruck className="mr-2 text-[#16A34A]" />
                    Free Delivery
                  </div>
                  <div className="flex items-center">
                    <FaShieldAlt className="mr-2 text-[#16A34A]" />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-[#16A34A]" />
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-lg bg-white px-6 py-10 rounded-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-[#16A34A]">
                  Fresh<span className="text-gray-800">Cart</span>
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                <FaGoogle className=" me-2 text-red-600" />
                <span className="font-medium text-gray-700">
                  Continue with Google
                </span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                <FaFacebook className="text-blue-600 me-2" />
                <span className="font-medium text-gray-700">
                  Continue with Facebook
                </span>
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  OR CONTINUE WITH EMAIL
                </span>
              </div>
            </div>

            <form className="space-y-7" onSubmit={handleSubmit(userLogin)}>
              <div className="flex flex-col gap-2 mb-7">
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-medium text-base text-gray-800"
                      >
                        {" "}
                        Email*
                      </FieldLabel>
                      <div className="relative">
                        <Input
                          type="email"
                          className="w-full h-auto px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus-visible:outline-none focus-visible:border-[#22c55e] focus-visible:ring-2 focus-visible:ring-[#dcfce7] transition-all"
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter Your Email"
                          autoComplete="off"
                        />
                        <FaEnvelope className=" absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>

                      {fieldState.invalid && (
                        <p
                          id="email-error"
                          className="text-red-500 -mt-0.5 text-sm font-medium"
                          role="alert"
                        >
                          {fieldState.error?.message}
                        </p>
                        // <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2 mb-7">
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex justify-between items-center">
                        <FieldLabel
                          htmlFor={field.name}
                          className="font-medium text-base text-gray-800"
                        >
                          {" "}
                          Password*
                        </FieldLabel>

                        <Link
                          href="forget-password"
                          className="text-sm text-[#16a34a] hover:text-primary-700 cursor-pointer font-medium"
                        >
                          Forgot Password?
                        </Link>
                      </div>

                      <div className="relative ">
                        <Input
                          type={showpassword ? "text" : "password"}
                          className="w-full h-auto px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus-visible:outline-none focus-visible:border-[#22c55e] focus-visible:ring-2 focus-visible:ring-[#dcfce7] transition-all"
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter Your Password"
                          autoComplete="off"
                        />

                        <button
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 "
                          type="button"
                          onClick={() => setshowpassword((prev) => !prev)}
                        >
                          {showpassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <FaLock className=" absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>

                      {fieldState.invalid && (
                        <p
                          id="password-error"
                          className="text-red-500 -mt-0.5 text-sm font-medium"
                          role="alert"
                        >
                          {fieldState.error?.message}
                        </p>
                      )}
                    </Field>
                  )}
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    className="h-4 w-4 text-[#16a34a] accent-[#16a34a] border-2 border-gray-300 rounded focus:ring-[#22c55e]"
                    type="checkbox"
                    name="rememberMe"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    Keep me signed in
                  </span>
                </label>
              </div>

              <button
                className="w-full bg-[#16a34a] cursor-pointer flex gap-2 items-center  text-white py-3 px-4 rounded-xl hover:bg-[#15803d] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed justify-center"
                type="submit"
                 disabled={loading}
              >
                  {loading && (
                  <FaSpinner className="text-xl animate-spin" />
                ) }
                <span>Sign In</span>
              </button>
            </form>
            <p className="text-center mt-8 pt-6 border-t border-gray-100">
              New to FreshCart?{" "}
              <Link
                className="text-[#16A34A]  hover:underline font-semibold"
                href="/register"
              >
                Create an account
              </Link>
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
              <div className="flex items-center">
             <FaLock className="mr-1 "/>
                SSL Secured
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-1 " />
                50K+ Users
              </div>
              <div className="flex items-center">
                <FaStar className="mr-1 " />
                4.9 Rating
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
