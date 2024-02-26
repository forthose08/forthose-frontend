

import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const SearchComponent = () => {
  return (
    <div className=" p-12 flex flex-col md:flex-row items-center justify-center container m-auto">
      {/* First Div */}
      <div className="w-full md:w-1/2 text-  md:pr-8">
        <h1 className="text-3xl font-semibold  mb-4 text-[#ffffff] ">
          Lead the transition to open energy
        </h1>
        <p className=" text-[#94A4CE] font-bold text-lg">Subscribe to our new Strategy.</p>
      </div>

      {/* Second Div */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <div className="relative">
          <input
            type="text"
            className=" rounded-full p-4 w-full lg:w-[70%] focus:outline-none focus:border-blue-500 bg-[#365196] "
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
