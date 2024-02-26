import Service from "@/components/Home/services";
import Image from "next/image";
import React, { useState } from "react";
import { MdEmail, MdWifiCalling } from "react-icons/md";
import CreditCard from "./creditCard";
import AllServices from "./allServices";

const Services = () => {
  return (
    <div className="bg-white pt-20 lg:pt-40 container m-auto pb-20">
      <div className="flex flex-wrap-reverse justify-center items-center space-y-4 sm:space-y-0 ">
        <div className="w-full sm:w-1/2 flex justify-center p-4">
          <Image
            src={require("../../../utils/image/services/credit-card.jpg")}
            alt="Image Alt Text"
            className="w-full lg:w-[70%] h-auto rounded shadow-lg "
          />
        </div>

        <div className="w-full sm:w-1/2">
          <div className="p-4">
            <h1 className="text-2xl font-semibold  mb-4">
              We Offer The Best Credit Cards with <br /> Extra Benefits
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              saepe sunt at laboriosam delectus nemo voluptatibus ullam? Vitae
              nesciunt alias recusandae blanditiis cumque quo voluptatem,
              eveniet modi at quas non deleniti aut nostrum! Optio ex cum
              officiis, impedit harum quae!
            </p>{" "}
            <br />
            <ul className="list-disc pl-4 font-[600] ">
              <li>No Hidden Charges</li>
              <li>Get 2% Discount</li>
              <li>More Benefits...</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container px-0 lg:px-20 mt-4">
        <CreditCard />
        <div className="h-[3px] flex m-auto w-48 bg-gray-400 rounded-full"></div>{" "}
      </div>

      <div className="flex flex-wrap-reverse justify-center items-center space-y-4 sm:space-y-0 mt-2 lg:mt-16">
        <div className="w-full sm:w-1/2 flex justify-center p-4">
          <Image
            src={require("../../../utils/image/services/home.jpg")}
            alt="Image Alt Text"
            className="w-full lg:w-[70%] h-[] rounded shadow-lg "
          />
        </div>

        <div className="w-full sm:w-1/2">
          <div className="p-4">
            <h1 className="text-2xl font-semibold  mb-4">
              We Know Your Requirments grt 9.6% <br /> Lower Interest Rates
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              saepe sunt at laboriosam delectus nemo voluptatibus ullam? Vitae
              nesciunt alias recusandae blanditiis cumque quo voluptatem,
              eveniet modi at quas non deleniti aut nostrum! Optio ex cum
              officiis, impedit harum quae!
            </p>{" "}
            <br />
            <ul className="list-disc pl-4 font-bold">
              <li>No Hidden Charges</li>
              <li>Get 2% Discount</li>
              <li>More Benefits...</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4">
        <AllServices />
      </div>
    </div>
  );
};

export default Services;
