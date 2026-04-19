"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaShieldAlt,
  FaGoogle,
  FaFacebook,
  FaEyeSlash,
  FaSpinner,
} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import image from "../../../assests/image.png";
import Link from "next/link";
import { HiUserAdd } from "react-icons/hi";
import { useForm, Controller } from "react-hook-form";
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
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye } from "react-icons/fa6";
import { registerObject, registerShema } from "@/schemas/auth.schema";
import { toast } from "react-toastify";
import { UserRegister } from "@/actions/auth.action";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [showpassword, setshowpassword] = useState(false);
  const [loading, setloading] = useState(false);
  function strengthPassword(password: string) {
    let score: number = 0;
    let feedback = "";
    if (password.length > 0) score = score + 1;
    else feedback = "*Password must be at least 8 characters long";

    if (password.length >= 8) score = score + 1;
    else feedback = "*Password must be at least 8 characters long";

    if (/[A-Z]/.test(password)) score = score + 1;
    else feedback = "*Password must contain at least one uppercase letter";

    if (/[a-z]/.test(password)) score = score + 1;
    else feedback = "*Password must contain at least one lowercase letter";
    if (/[0-9]/.test(password)) score = score + 1;
    else feedback = "*Password must contain at least one number";
    if (/[^A-Za-z0-9]/.test(password)) score = score + 1;
    else feedback = "*Password must contain at least one special character";

    if (password.length >= 16) score = score + 1;

    if (score === 1 || score === 2)
      return {
        feedback: feedback,
        strength: "Week",
        color: "bg-red-500",
        width: "15%",
      };
    if (score === 3)
      return {
        feedback: feedback,
        strength: "Week",
        color: "bg-red-500",
        width: "25%",
      };
    if (score === 4)
      return {
        feedback: feedback,
        strength: "Fair",
        color: "bg-orange-500",
        width: "45%",
      };
    if (score === 5)
      return {
        feedback: feedback,
        strength: "Good",
        color: "bg-blue-500",
        width: "60%",
      };
    if (score === 6)
      return {
        feedback: feedback,
        strength: "Strong",
        color: "bg-green-500",
        width: "80%",
      };
    if (score > 6)
      return {
        feedback: feedback,
        strength: "Strong",
        color: "bg-green-500",
        width: "100%",
      };
  }

  const form = useForm<registerObject>({
    defaultValues: {
      name: "",
      password: "",
      phone: "",
      rePassword: "",
      email: "",
      terms: false,
    },
    resolver: zodResolver(registerShema),
  });

  const { control, handleSubmit, watch, setError } = form;

  async function register(data: registerObject) {
    console.log(data);

    const { terms, ...cleanData } = data;

    setloading(true);
    const isRegister = await UserRegister(cleanData);
    setloading(false);

    if (isRegister) {
      toast.success("Account Created Successfully", {
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
        router.push("/login");
      }, 3000);
    } else {
      const message = "*An account with this email already exists";
      setError("email", {
        type: "server",
        message: message,
      });
      toast.error("Validation Errors", {
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
  const password = watch("password");
  const strength = strengthPassword(password || "");
  console.log(strength);

  return (
    <>
      <main className="py-10">
        <div className="containe mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2  gap-12 p-4">
          <div>
            <h1 className="text-4xl font-bold text-[#364153]">
              Welcome to <span className="text-[#16A34A]">FreshCart</span>
            </h1>
            <p className="text-xl font-medium mt-2 mb-4 text-[#364153]">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
            <ul className="*:flex *:gap-4 *:items-start my-8 space-y-6">
              <li className="mb-6">
                <div className="flex items-center justify-center size-12 bg-[#BBF7D0] text-[#16A34A] rounded-full">
                  <FaStar className="text-xl" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#364153]">
                    Premium Quality
                  </h2>
                  <p className="text-gray-600 font-medium">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>
              <li className="mb-6">
                <div className="flex items-center justify-center size-12 bg-[#BBF7D0] text-[#16A34A] rounded-full">
                  <FaTruckFast className="text-xl" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#364153]">
                    Fast Delivery
                  </h2>
                  <p className="text-gray-600 font-medium">
                    Same-day delivery available in most areas.
                  </p>
                </div>
              </li>
              <li className="mb-6">
                <div className="flex items-center justify-center size-12 bg-[#BBF7D0] text-[#16A34A] rounded-full">
                  <FaShieldAlt className="text-xl" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#364153]">
                    Premium Quality
                  </h2>
                  <p className="text-gray-600 font-medium">
                    Your data and payments are completely secure.
                  </p>
                </div>
              </li>
            </ul>
            <div className="bg-white rounded-md p-4 shadow-sm">
              <div className="flex items-center mb-4 gap-4">
                <Image src={image} alt="img" />
                <div>
                  <h3 className="font-medium text-gray-800">Sarah Johnson</h3>
                  <div className="*:text-yellow-300 flex items-center *:text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic font-medium">
                "FreshCart has transformed my shopping experience. The quality
                of the products is outstanding, and the delivery is always on
                time. Highly recommend!"
              </p>
            </div>
          </div>
          <div className="shadow-lg bg-white px-6 py-10 rounded-2xl">
            <h2 className="text-3xl font-semibold text-center mb-2 text-[#364153]">
              Create Your Account
            </h2>
            <p className="font-medium text-center  text-[#364153]">
              Start your fresh journey with us today
            </p>
            <div className="my-10 flex gap-2 *:grow">
              <button className="rounded-lg border cursor-pointer  border-gray-300 bg-transparent hover:bg-gray-300 transition px-4 py-2 flex justify-center items-center font-medium ">
                <FaGoogle className=" me-2 text-red-600" />
                Google
              </button>
              <button className="rounded-lg border font-medium cursor-pointer  border-gray-300 bg-transparent hover:bg-gray-300 transition px-4 py-2 flex justify-center items-center ">
                <FaFacebook className="text-blue-600 me-2" />
                Facbook
              </button>
            </div>

            <div className="divider relative w-full h-0.5 my-4 bg-gray-300/30 before:content-['Or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2  before:bg-white before:px-4 flex items-center"></div>

            <form className="space-y-7" onSubmit={handleSubmit(register)}>
              <div className="flex flex-col gap-2 mb-7">
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-medium text-base text-gray-800"
                      >
                        Name*
                      </FieldLabel>
                      <Input
                        className="px-3 py-2 h-auto rounded-[6px] border border-[#99A1AF66]/40 focus-visible:border-[#16A34A] focus-visible:ring-0 focus-visible:shadow-none"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Ali"
                        autoComplete="off"
                      />

                      {fieldState.invalid && (
                        <p
                          id="name-error"
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
                      <Input
                        type="email"
                        className="px-3 py-2 h-auto rounded-[6px] border border-[#99A1AF66]/40 focus-visible:border-[#16A34A] focus-visible:ring-0 focus-visible:shadow-none"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Ali@Example.com"
                        autoComplete="off"
                      />

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
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-medium text-base text-gray-800"
                      >
                        {" "}
                        Password*
                      </FieldLabel>
                      <div className="relative ">
                        <Input
                          type={showpassword ? "text" : "password"}
                          className="px-3 py-2 h-auto rounded-[6px] border border-[#99A1AF66]/40 focus-visible:border-[#16A34A] focus-visible:ring-0 focus-visible:shadow-none"
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Create a strong password"
                          autoComplete="off"
                        />

                        <button
                          className="absolute top-1/2 cursor-pointer -translate-y-1/2 right-2 "
                          type="button"
                          onClick={() => setshowpassword((prev) => !prev)}
                        >
                          {showpassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
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

                <div className="items-center flex gap-2">
                  <div className={`grow h-1 rounded-md bg-gray-200 mb-1 `}>
                    <div
                      className={`${strength?.color}  h-1 rounded-md`}
                      style={{ width: strength?.width }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium min-w-[50px]">
                    {strength?.strength}
                  </span>
                </div>
                {strength?.feedback ? (
                  <p className="text-red-500 font-medium -mt-2 text-xs">
                    {strength?.feedback}
                  </p>
                ) : (
                  <p className="text-gray-500 font-medium -mt-2 text-xs">
                    Must be at least 8 characters with numbers and symbols
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <Controller
                  name="rePassword"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-medium text-base text-gray-800"
                      >
                        {" "}
                        Confirm Password*
                      </FieldLabel>
                      <Input
                        type="password"
                        className="px-3 py-2 h-auto rounded-[6px] border border-[#99A1AF66]/40 focus-visible:border-[#16A34A] focus-visible:ring-0 focus-visible:shadow-none"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Confirm your password"
                        autoComplete="off"
                      />

                      {fieldState.invalid && (
                        <p
                          id="rpassword-error"
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
              <div className="flex flex-col gap-2 mb-7">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-medium text-base text-gray-800"
                      >
                        {" "}
                        Phone Number*
                      </FieldLabel>
                      <Input
                        type="tel"
                        className="px-3 py-2 h-auto rounded-[6px] border border-[#99A1AF66]/40 focus-visible:border-[#16A34A] focus-visible:ring-0 focus-visible:shadow-none"
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="+1 234 567 8900"
                        autoComplete="off"
                      />

                      {fieldState.invalid && (
                        <p
                          id="phone-error"
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

              <Controller
                name="terms"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className=" flex items-center gap-2">
                      <Input
                        type="checkbox"
                        className="size-4 accent-[#16A34A]"
                        name={field.name}
                        ref={field.ref}
                        id={field.name}
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldLabel
                        htmlFor={field.name}
                        className="font-medium text-base ms-2  text-gray-800"
                      >
                        {" "}
                        I agree to the{" "}
                        <Link
                          className="text-[#16A34A] hover:underline"
                          href={`/terms`}
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          className="text-[#16A34A] hover:underline"
                          href={`/privacy`}
                        >
                          {" "}
                          Privacy Policy
                        </Link>{" "}
                        *
                      </FieldLabel>
                    </div>
                    {fieldState.invalid && (
                      <p
                        id="terms-error"
                        className="text-red-500 block -mt-0.5 text-sm font-medium"
                        role="alert"
                      >
                        {fieldState.error?.message}
                      </p>
                      //<FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <button
                className="bg-[#16A34A]  text-white w-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center hover:bg-[#15803d] transition px-4 py-2 gap-2 rounded-lg font-semibold"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="text-xl animate-spin" />
                ) : (
                  <HiUserAdd className="text-xl" />
                )}

                <span>Create My Account</span>
              </button>
            </form>
            <p className="border-t pt-10 text-gray-800 border-gray-300/30 my-4 text-center font-medium">
              Already have an account?{" "}
              <Link
                className="text-[#16A34A]  hover:underline font-medium"
                href="/login"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
