import { useEffect, useState } from "react";
import { api } from "@/config";
import axios from "axios";
import { sendEmailOtp, userRegister, verifyEmailOtp } from "@/config/user";

export const RegisterUser = (values: any) => {
  axios
    .post(`${userRegister}`, {
      first_name: values.first_name,
      last_name: values.last_name,
      phone: values.phone,
      email: values.email,
      address: values.address,
      password: values.password,
      type: "I",
    })
    .then((response) => {
      console.log(response.data);
      window.location.href = "/home/thankyou";
    })
    .catch((error) => {
      console.error("Error sending data to the server:", error);
      window.location.href = "/home/thankyou";
    });
  console.log("values are " + values);
};

export const sendOtp = async (values:any) =>{
    try {
      const res = await axios.post(`${sendEmailOtp}`, {
        email: values.email,
      });

      return res;
    } catch (error: any) {
      throw error;
    }
    
}


export const verifyEmail = async (values: any) => {
  try {
    const { data } = await axios.post(`${verifyEmailOtp}`, {
      email: values,
    });
    return data;
  } catch (error: any) {
    throw error;
  }
};



