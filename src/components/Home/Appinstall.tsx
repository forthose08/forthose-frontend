import React from "react";
import Image from "next/image";


export default function Appinstall(){
    return (
      <div className="text-center container m-auto px-2 ">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-16 text-center text-[#2B438B]">
          Ready to scale further & <br /> spend less
        </h1>
        <h2 className="text-xl text-[#757AA9] ">
          See it all at a glance when you link your cash accounts , <br /> credit
          cards, investment and bills.
        </h2>
        <div className="flex  flex-wrap md:flex-nowrap flex-row m-auto  justify-center mt-10  w-[100%] lg:w-[30%]">
          <Image
            src={require("../../utils/image/appstore.webp")}
            className="w-1/2 cursor-pointer"
            alt="Appstore"
          />
          <Image
            src={require("../../utils/image/playstore.webp")}
            className="w-1/2 cursor-pointer"
            alt="Appstore"
          />
        </div>
      </div>
    );
}