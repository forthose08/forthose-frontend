import { api } from ".";

const USER_URL = `${api.API_URL}`;


export const userRegister = `${USER_URL}distributor/register/`
export const sendEmailOtp = `${USER_URL}settings/send-otp/`;
export const verifyEmailOtp = `${USER_URL}distributor/verified/`;