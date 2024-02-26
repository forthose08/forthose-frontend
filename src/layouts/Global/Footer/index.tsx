import React from "react";
import { navigationLinks } from "../Header/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-black border-t-2 px-4 md:px-60 py-8">
      <div className="container mx-auto">
        <div className="md:flex  gap-8 justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-semibold ">About Us</h3>
            <div className="h-[3px] mb-4 w-48 bg-gray-400 rounded-full"></div>{" "}
            <Image
              alt="logo"
              src={require("../../../utils/image/icon/logoPng.png")}
              className="w-1/2 h-auto ml-[-10px] mb-4 "
            />
            <p className="flex-wrap text-lg">
              Heaven fruitful doesn't over lesser days appear <br /> creeping
              seasons so behold bearing
            </p>
          </div>
          <div className="mt-8 lg:mt-0 w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              {navigationLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:font-bold text-lg ">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              <Link href={"/home/services"}>
                {" "}
                <li className="mb-2 hover:font-bold text-lg ">
                  Credit Card
                </li>{" "}
              </Link>
              <Link href={"/home/services"}>
                {" "}
                <li className="mb-2 hover:font-bold text-lg ">Loans</li>{" "}
              </Link>
              <Link href={"/home/services"}>
                {" "}
                <li className="mb-2 hover:font-bold text-lg ">
                  Fixed posit
                </li>{" "}
              </Link>
              <Link href={"/home/services"}>
                {" "}
                <li className="mb-2 hover:font-bold text-lg ">Insurance</li>{" "}
              </Link>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4 ">Contact</h3>
            <p className="text-lg">Email: info@forThose.com</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="45"
                  height="45"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="45"
                  height="45"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1"
                    x1="4.338"
                    x2="38.984"
                    y1="-10.056"
                    y2="49.954"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4b4b4b"></stop>
                    <stop offset=".247" stop-color="#3e3e3e"></stop>
                    <stop offset=".686" stop-color="#2b2b2b"></stop>
                    <stop offset="1" stop-color="#252525"></stop>
                  </linearGradient>
                  <path
                    fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)"
                    d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                  ></path>
                  <polygon
                    fill="#fff"
                    points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                  ></polygon>
                  <polygon
                    fill="#fff"
                    points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                  ></polygon>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="45"
                  height="45"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stopOpacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} forThose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
