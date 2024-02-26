// components/MyComponent.js

import Image from "next/image";
import Link from "next/link";
import React from "react";


const Data = [
  {
    id: 1,
    number:"01",
    title: "Set your email & Phone number",
    content:
      "These details are essential for account verification.",
  },
  {
    id: 2,
    number:"02",
    title: "Photo of ID card",
    content: "Helps us protect your account and maintain the highest security.",
  },
  {
    id: 3,
    number:"03",
    title: "Set your personal info",
    content: "Personalize your account, ensure your data is secure",
  },
  {
    id: 4,
    number:"04",
    title: "Take a selfie & set password",
    content: "Set a strong password to protect your account",
  },
];

export default function Services2() {
  return (
    <div className=" items-center  p-4 container m-auto lg:py-16">
      <section className="text-centerw-full   mt-8 p-0 lg:p-8 mb-4 md:mb-14">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-2 text-center text-[#2B438B]">
          Get Started With Easy And Short
        </h2>
      </section>
      <section className="flex w-full  flex-wrap justify-center gap-[4%] lg:gap-[2%] md:gap-[2%] ">
        {Data.map((card) => (
          <div
            key={card.id}
            className="   p-4 px-2 lg:px-4 w-full md:w-[22%] lg:w-[22%] mb-4 py-6   overflow-hidden  hover:shadow-lg border-[#E1E1EA] border-b-2 lg:border-r-2 lg:border-b-0 "
          >
            <h1 className="text-2xl lg:text-4xl  font-bold  inline flex lg:inline  text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 ">
              {card.number}
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold mb-2 mt-4 lg:mt-6  ">
              {card.title}
            </h2>
            <p className="text-lg text-[#7E82B0]">{card.content}</p>
          </div>
        ))}
      </section>
      <div className="text-center mt-16">
        <Link
          href={"/home/register"}
          className="p-3 px-6 bg-[pink] font-semibold text-lg md:text-xl hover:shadow-md hover:scale-0.5 rounded-full text-center"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

