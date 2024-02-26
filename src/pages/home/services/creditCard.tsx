import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function CreditCard() {
  const brand = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brandList = [
    {
      image: require("../../../utils/image/credit/card1.png"),
      title: "Flipkart",
    },
    {
      image: require("../../../utils/image/credit/card2.png"),
      title: "Vivo",
    },
    {
      image: require("../../../utils/image/credit/card1.png"),
      title: "Apple",
    },
    {
      image: require("../../../utils/image/credit/card4.png"),
      title: "Alibaba",
    },
    {
      image: require("../../../utils/image/credit/card5.png"),
      title: "Flipkart",
    },
    {
      image: require("../../../utils/image/credit/card4.png"),
      title: "Alibaba",
    },
  ];
  return (
    <div className=" mx-auto  px-2  container py-12 lg:py-20">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-8 md:mb-20 text-center text-[#2B438B]">
        Bank Partner with us
      </h1>
      <div className=" ">
        <Slider {...brand}>
          {brandList.map((brand, index) => (
            <div className=" md:pl-4 ">
              <div
                key={index}
                className="p-4 text-center  rounded-lg  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
              >
                <Image
                  src={brand.image}
                  alt="image"
                  className="w-full h-[90px] object-contain"
                />
                {/* <p className="text-md font-semibold mt-2">{brand.title}</p> */}
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-1/3 h-[1px] border-[#cccccc] border-b-2 flex m-auto mt-10"></div>
      </div>
    </div>
  );
}
