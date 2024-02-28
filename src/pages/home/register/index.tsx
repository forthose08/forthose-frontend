import Image from "next/image";
import React, { useState } from "react";
import { Formik } from "formik";
import { FaLocationArrow } from "react-icons/fa";
import { RegisterUser, sendOtp } from "@/controller/auth";
import * as Yup from "yup";
import { api } from "@/config";

const userValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("This field is required"),
  last_name: Yup.string().required("This field is required"),
  phone: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required"),
  address: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export default function Register() {
  const[formError, setFormError] = useState("")
  const[creating,setCreating] = useState(false)
  const [user, setUser] = useState({
    email: "",
    fullname: "",
    mobile: "",
    password: "",
    confirmPassword : ""
  });

  const registerUser = async (e: any) => {
    setCreating(true)
    e.preventDefault();
    if (user.password.length < 6) {
      setFormError("Password should be more then 6 letters");
      setCreating(false);
      return;
    } 
    else if(user.password !== user.confirmPassword){
      setFormError("Password and confirm password must be same")
      setCreating(false)
      return;
    }
    else if (user.email === "") {
      setFormError("Email required");
      setCreating(false);
      return;
    } else if (user.fullname === "" || user.fullname.length < 3) {
      setFormError("Name required");
      setCreating(false);
      return;
    } else if (user.mobile === "" || user.mobile.length < 10) {
      setFormError("Mobile number required");
      setCreating(false);
      return;
    }
    try {
      await fetch(`${api.API_URL}/api/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.fullname,
          mobile: user.mobile,
          email: user.email,
          password: user.password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            setFormError("Something went wrong.");
            setCreating(false);
          }
          return response.json();
        })
        .then((response) => {
          if (response.code === 201) {
            window.alert("Thanks for register with us.");
            setCreating(false);
            window.location.href = "/home"
          }
          setFormError(response.message);
          setCreating(false);
        })
        .catch((error) => {
          setFormError("There was an error with the fetch operation:");
          setCreating(false);
        });
    } catch (error) {
      setFormError("There was an error with the fetch operation:");
      setCreating(false);
    }
  };

  const handleDataChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { email, fullname, mobile, password, confirmPassword } = user;

  return (
    <div className=" bg-gray-100 text-gray-900 flex justify-center">
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex bg-[#3264b8]  flex-col items-center justify-center px-6 py-8 mx-auto mt-28 ">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-white"
            >
              <img
                className="w-10 h-auto mr-2"
                src="https://i.ibb.co/t8nfKhd/418986308-902102191295505-2561372169507733174-n-removebg-preview.png"
                alt="logo"
              />
              forThose
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                <p className="text-[red]">{formError}</p>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={registerUser}
                >
                  <div>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Name"
                      value={fullname}
                      onChange={handleDataChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      value={email}
                      onChange={handleDataChange}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="+91-9876543210"
                      value={mobile}
                      onChange={handleDataChange}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={handleDataChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="confirm Password"
                      value={confirmPassword}
                      onChange={handleDataChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-light text-gray-500 dark:text-gray-300">
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`w-full   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                      creating ? `bg-primary text-black` : `bg-secondary text-white`
                    }`}
                  >
                    {creating ? "Creating Account..." : "Create an account"}
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
