import Image from "next/image";
import React from "react";

const Trust = () => {
  const features = [
    {
      icon: require("../../utils/image/icon/home1.png"),
      title: "Committed to Regulation",
      description:
        "Our commitment to compliance ensure secure, transparent for your confidence",
    },
    {
      icon: require("../../utils/image/icon/home2.png"),
      title: "Protecting your Money",
      description:
        "Your money is our priority. We ensure security and peace of mind.",
    },
    {
      icon: require("../../utils/image/icon/home3.png"),
      title: "Instant 24/7 Support",
      description:
        "Our support team is available 24/7,providing prompt and reliable assistance",
    },
  ];

  return (
    <div className=" ">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-center text-[#2B438B] ">
        Where safety meets trust
      </h1>
      <div className="flex flex-wrap -mx-4">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4 lg:p-8">
            <div className=" rounded-lg p-4 lg:p-8 ">
              <Image
                src={feature.icon}
                alt={`Feature ${index + 1} Icon`}
                className="w-12 h-12 mx-auto mb-4"
                width={300}
                height={300}
              />
              <h2 className="text-xl font-semibold mb-2 text-center text-[#0D2B77]">
                {feature.title}
              </h2>
              <p className="text-lg  text-[#7E82B0] text-center">
                {feature.description}
              </p>
              <div className="h-[3px] flex m-auto w-16 bg-gray-400 rounded-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;
