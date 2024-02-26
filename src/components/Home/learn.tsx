import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Life",
    image: require("../../utils/image/learn1.webp"),
    disc: "Key to effortless online or offline transaction at fees."
  },
  {
    id: 2,
    title: "Work",
    image: require("../../utils/image/learn2.jpg"),
    disc: "Making quick digital payments in offline store."
  },
  {
    id: 3,
    title: "Finance",
    image: require("../../utils/image/learn3.jpg"),
    disc: "Building meaningful connections in a busy life."
  },
];

const Learn = () => {
  return (
    <div className="bg-gray-100 p-4 px-4 py-8 lg:py-20">
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-16 text-center text-[#2B438B]">
        Discover.Learn.Grow
      </h1>
      <p className="text-center mb-4 lg:mb-8 text-xl">
        This exciting adventure as we delve into diverse topics, learn from each
        other, and nature <br /> personal and collective growth.
      </p>
      <div className="flex flex-wrap justify-center -mx-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4  "
          >
            <div className=" p-4   ">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] lg:h-[250px] mb-2 rounded-[38px] "
              />
              <p className="text-lg font-semibold text-[#FE63C1]">
                {item.title}
              </p>
              <p className="text-xl lg:text-2xl font-semibold text-[#213C82] ">
                {item.disc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
