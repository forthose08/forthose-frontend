import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs"

const cardsData = [
  {
    imageUrl: require("../../utils/image/icon/fd.png"),
    title: "Fixed Deposit " ,
    description:
      "Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore",
    status:"Get now"
  },
  {
    imageUrl: require("../../utils/image/icon/credit-card.png"),
    title: "Credit Card",
    description:
      "Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore",
    status:"Get now"
  },
  {
    imageUrl: require("../../utils/image/icon/insure.png"),
    title: "Insurance",
    description:
      "Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore",
    status:"Coming soon..."
  },
  {
    imageUrl: require("../../utils/image/icon/home.png"),
    title: "Home Loan",
    description:
      "Consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore",
    status:"Coming soon..."
  },
];





export default function Service() {
  return (
    <div className="container mx-auto py-6 text-center">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-16 text-center text-[#2B438B]">
        Our Exclusive Services
      </h1>
      <div className="flex flex-wrap justify-center -mx-2">
        {cardsData.map((item: any) => (
          <div className="w-full sm:w-1/2 md:w-1/4 p-4 ">
            <div className="  rounded-lg overflow-hidden shadow-md hover:shadow-lg py-6">
              <div className="flex justify-center">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-1/5 h-auto object-cover "
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-2 text-[#0D2B77]">
                  {item.title}
                </h2>
                <p className="text-black text-lg">{item.description}</p>
              </div>
              <div className="mt-2">
                <Link
                  href={"/home/register"}
                  className=" bg-primary rounded-md p-2 px-5 text-lg font-semibold  text-[#0D2B77] hover:shadow-lg "
                >
                  {item.status}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-6 lg:mt-16 ">
        <a
          className="bg-primary px-5 font-bold  md:px-10 py-4 text-lg md:py-4 rounded-md cursor-pointer transition-all duration-500 scale-50 hover:bg-green-500 bg-[pink]"
          href="/home/services"
        >
          More Services
        </a>
      </div> */}
    </div>
  );
};

