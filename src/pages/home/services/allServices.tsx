import Image from "next/image";
import React from "react";

const cardsData = [
  {
    image: require("../../../utils/image/services/service1.png"),
    heading: "Home Loan",
    description: "We provide best Home loan offers for you.",
  },
  {
    image: require("../../../utils/image/services/service2.png"),
    heading: "Investments Management",
    description: "We are here to manage",
  },
  {
    image: require("../../../utils/image/services/service3.png"),
    heading: "Business Loan",
    description: "Take your business to Infinity Possibility",
  },
  {
    image: require("../../../utils/image/services/service4.png"),
    heading: "Personal Loan",
    description: "Full fill your all dreams with our Personal Loan.",
  },
  {
    image: require("../../../utils/image/services/service5.png"),
    heading: "Credit Card",
    description: "We give you amazing offers and discounts on every purchase.",
  },
  {
    image: require("../../../utils/image/services/service6.png"),
    heading: "RD",
    description: "Get upto 25% interest on your RD.",
  },
  {
    image: require("../../../utils/image/services/service7.png"),
    heading: "Fixed Deposit",
    description: "Get upto 14% interest on your FD. Safe With us.",
  },
  {
    image: require("../../../utils/image/services/service8.png"),
    heading: "Car Loan",
    description: "Let your dreams become true.Now feel free to ride.",
  },
];

export default function AllServices(){
  return (
    <div className="md:flex md:flex-wrap justify-center gap-8">
      {cardsData.map((item, index) => (
        <div
          key={index}
          className="md:w-1/5 w-full md:mb-0 mb-4 bg-white  shadow-md text-center p-4"
        >
          <Image
            src={item.image}
            alt={item.heading}
            className="mx-auto h-20 w-20  mb-4"
          />
          <h2 className="text-lg font-semibold">{item.heading}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}

      
    </div>
  );
};

