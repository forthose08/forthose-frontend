import Image from "next/image";
import React, { useState } from "react";
import { Formik } from "formik";
import { FaLocationArrow } from "react-icons/fa";
import { RegisterUser, sendOtp } from "@/controller/auth";
import * as Yup from "yup";

const userValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("This field is required"),
  last_name: Yup.string().required("This field is required"),
  phone: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required"),
  address: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export default function Register() {
  

  const submitLogin = (values: any, { setFieldError, resetForm }: any) => {
    sendOtp(values)
    RegisterUser(values)
    window.location.href="/home/thankyou"
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-1/2 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl font-bold">Register Here</h1>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confirm_password: "",
              }}
              onSubmit={submitLogin}
              validationSchema={userValidationSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue,
                setFieldError,
              }: any) => (
                <div className="flex flex-wrap gap-4  mt-8">
                  <div className="pb-2 w-full  md:w-[48%]  cyan ">
                    <input
                      value={values.first_name}
                      onChange={handleChange("first_name")}
                      onBlur={handleBlur("first_name")}
                      name="first_name"
                      type="first_name"
                      placeholder="Enter Your First Name"
                      className=" w-full  px-6 py-4 rounded-lg mb-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    {errors.first_name && touched.first_name ? (
                      <p className="text-red-500 text-sm">
                        {errors.first_name}
                      </p>
                    ) : null}
                  </div>

                  <div className="pb-2 w-full  md:w-[48%]  cyan ">
                    <input
                      value={values.last_name}
                      onChange={handleChange("last_name")}
                      onBlur={handleBlur("last_name")}
                      name="last_name"
                      type="last_name"
                      placeholder="Enter Your Last Name"
                      className=" w-full  px-6 py-4 rounded-lg mb-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    {errors.last_name && touched.last_name ? (
                      <p className="text-red-500 text-sm">{errors.last_name}</p>
                    ) : null}
                  </div>

                  <div className="pb-2 w-full  cyan ">
                    <input
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      className=" w-full  px-6 py-4 rounded-lg mb-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    {errors.email && touched.email ? (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    ) : null}
                  </div>

                  
                  

                  <div className="pb-2 w-full    cyan ">
                    <input
                      value={values.phone}
                      onChange={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      name="phone"
                      type="phone"
                      placeholder="Enter Your Mobile"
                      className=" w-full  px-6 py-4 rounded-lg mb-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    {errors.phone && touched.phone ? (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    ) : null}
                  </div>

                  <div className="pb-2 w-full    cyan ">
                    <input
                      value={values.address}
                      onChange={handleChange("address")}
                      onBlur={handleBlur("address")}
                      name="address"
                      type="address"
                      placeholder="Enter Your address"
                      className=" w-full px-6 py-4 rounded-lg mb-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    {errors.address && touched.address ? (
                      <p className="text-red-500 text-sm">{errors.address}</p>
                    ) : null}
                  </div>

                  <div className="pb-2 w-full    cyan ">
                    <input
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                      className=" w-full px-6 py-4 rounded-lg mb-4 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    {errors.password && touched.password ? (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    ) : null}
                  </div>

                  <div className="w-full flex mt-4  ">
                    <div className="flex flex-row  w-full justify-center">
                      <button
                        type="submit"
                        onClick={() => handleSubmit()}
                        className={`mt-5 tracking-wide cursor-pointer font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none  `}
                      >
                        <span className="mr-3 text-lg">Submit</span>
                        <FaLocationArrow />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="bg-bg-6  w-full bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}
