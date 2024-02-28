import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const data = [
  {
    number: "01 ",
    step: "Find Your Signature Style Here!",
  },
  {
    number: "02 ",
    step: "Where Quality Meets Creativity!",
  },
  {
    number: "03 ",
    step: "Start Your Stylish Journey Today!",
  },
  {
    number: "04 ",
    step: "Discover Our Exquisite Collection!",
  },
];

const Numbers = () => {
  return (
    <section className=" py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <div
              className={`w-1/2 sm:w-1/2 md:w-1/4 text-left px-4 sm:px-1 md:px-2  ${
                index === 3 ? "" : "border-[#586db9] border-r-2"
              }`}
              key={index}
            >
              <div className="p-4 lg:p-8 rounded-md">
                <h1 className="text-2xl lg:text-4xl text-center md:text-left  font-bold     lg:inline  text-center md:text-left text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500">
                  {/* 0{index + 1}{" "} */}
                  
                </h1>
                <h2 className="text-xl lg:text-3xl  md:text-left text-white">
                  {item.step}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
