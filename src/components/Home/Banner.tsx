import React from "react";
import Image from "next/image";

export default function Banner({ banners }: any) {
  return (
    <div className="flex flex-wrap justify-center justify-arround    bg-cover bg-center bg-no-repeat  pb-12 lg:pb-24 pt-16 lg:pt-24 md:pt-10 px-5 md:px-10  ">
      {/* <div className="absolute top-0 left-[-40%] h-full w-full animate-myPulse bg-greenShade bg-cover bg-center z-0"></div> */}
      <div className="flex flex-col flex-wrap justify-center md:w-full lg:w-[50%] 2xl:w-[50%] p-0 lg:pl-[200px] text-black">
        <h2 className="text-black   text-3xl md:text-5xl leading-tight tracking-wide  font-semibold popp ">
          Discover the Perfect outfit and Fabric at
          <span className="font-sans font-bold text-[#e3b000] "> forThose</span>
        </h2>
        <p className="text-[#203B82] font-bold text-xl mt-8 leading-[2] ">
          {" "}
          From Threads to Trends, We've Got You Covered! Explore Our Latest
          Collection Today.
        </p>
        <div className="flex  flex-wrap md:flex-nowrap flex-row  justify-between mt-10  lg:w-[80%]">
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
      <div className="flex justify-center  md:w-full lg:w-[50%] 2xl:w-[50%]">
        <div className="mt-7">
          <Image
            src={require("../../utils/image/bannerimg.png")}
            alt=""
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
}
