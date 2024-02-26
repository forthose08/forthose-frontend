import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Testimonials() {
  const brand = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  const Testimonials = [
    {
      image: require("../../../utils/image/testimonials/test1.webp"),
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Adem Fro",
      profile: "Manager",
    },
    {
      image: require("../../../utils/image/testimonials/test1.webp"),
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Kalieh Begrj",
      profile: "Manager",
    },
    {
      image: require("../../../utils/image/testimonials/test1.webp"),
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Vikas Dubhy",
      profile: "Manager",
    },
    {
      image: require("../../../utils/image/testimonials/test1.webp"),
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Tarun Shaed",
      profile: "Manager",
    },
    {
      image: require("../../../utils/image/testimonials/test1.webp"),
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Jameen Shadb",
      profile: "Manager",
    },
    {
      image: require("../../../utils/image/testimonials/test1.webp"),
      disc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Aaalam Chedu",
      profile: "Manager",
    },
  ];
  return (
    <div className="container mx-auto p-4 px-4  bg-white">
      <div className=" text-center mb-8">
       
        <h1 className="font-semibold text-2xl text-center lg:text-4xl">Our Testimonials </h1>
      </div>

      <div className="mb-4 ">
        <Slider {...brand}>
          {Testimonials.map((item, index) => (
            <div className=" md:pl-4 relative" key={index}>
              <div className="p-4  border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 relative">
                <h1 className="text-md lg:text-lg absolute top-4 left-4 mb-4">
                  {item.disc}
                </h1>
                <div className="flex mt-24">
                  <Image
                    src={item.image}
                    alt="image"
                    className="w-1/5 h-1/2  rounded-full"
                  />
                  <div className="flex-col ml-4 lg:ml-8 item-center">
                    <p className="text-md font-semibold text-lg  bottom-4  ">
                      {item.name}
                    </p>
                    <p className="text-md     ">{item.profile}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
