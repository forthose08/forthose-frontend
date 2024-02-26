// components/ThankYou.js
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import  { useState } from "react";
import { verifyEmail } from "@/controller/auth";
import OTPInput from "react-otp-input";


const OtpValidationSchema = Yup.object().shape({
  otp: Yup.string().required("OTP is Required."),
});

const VerifyEmail = () => {
  const [isReady, setIsReady] = useState<any>(true);
  const [otp, setOtp] = useState(0);
  const verifyOtp = (values: any, { setFieldError, resetForm }: any) => {
    setIsReady(false);
    if (otp == values.otp) {
      verifyEmail(values.email)
        .then((res: any) => {
          console.log("res", res);
          setIsReady(true);
          setTimeout(() => {
            window.location.href = "/home/thankyou";
          }, 1000);
        })
        .catch((error: any) => {
          setIsReady(true);
          console.log("Login User Error:", error?.response);
          if (error?.response?.status == 404)
            setFieldError("email", error.response.data.message);
          // setFieldError({ email: "User does not exists." });
          else if (error?.response?.status == 401) {
            // console.log(error.response.data.message);
            setFieldError("password", error.response.data.message);
          } else
            setFieldError(
              "password",
              "Something went wrong. Please try again later."
            );
        });
    } else {
      setFieldError("otp", "Otp is not valid");
    }
  };
  return (
    <div className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email.</p>
            </div>
          </div>

          <div>
            <Formik
              initialValues={{
                otp: "",
              }}
              onSubmit={verifyOtp}
              validationSchema={OtpValidationSchema}
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
                <div className="flex flex-wrap   mt-8">
                  <div className="pb-6 w-full  cyan px-4">
                    <p className="w-full mb-2 text-black hover:hover:text-primary text-left  text-sm md:text-[15px] font-normal ">
                      Enter Otp
                    </p>
                    <div className={`  grayborder  mt-5   px-4 py-2 `}>
                      <input
                        value={values.otp}
                        placeholder="000000"
                        onChange={ handleChange("otp")}
                        className="bg-gray-100 py-2 rounded-lg px-2 text-black text-bold text-xl"
                      />
                    </div>
                  </div>

                  <div className="w-full flex mt-4  ">
                    <div className="flex flex-row  w-full justify-center">
                      <button
                        type="submit"
                        onClick={() => handleSubmit()}
                        className={`bg-primary hover:bg-colorFour rounded-full  text-white px-10  py-2   `}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
