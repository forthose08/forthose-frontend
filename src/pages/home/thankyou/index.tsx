// components/ThankYou.js
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">Thank You!</h1>
        <Image src={require("../../../utils/image/icon/thank.png")} className="w-1/5 md:w-[100px] flex justify-center m-auto mb-4" alt="thanks"/>
        <p className="text-gray-600 text-lg md:text-xl">
          Thank you for registering with us. We appreciate your trust in our
          services.
        </p>
        <div className="mt-16">
          <Link href={"/home"} className="mt-4 p-3 px-6 bg-blue-400 rounded-lg text-xl font-semibold ">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
