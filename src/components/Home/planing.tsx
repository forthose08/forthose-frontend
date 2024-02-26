import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Planing() {
  const brand = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
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

  const brandList = [
    {
      image: require("../../utils/image/product1.png"),
      title: "Casual Embroidered",
      number: "01",
      detail:
        "From Relaxed Tees to Effortless Denim, Find Your Perfect Casual Look with Us.",
    },
    {
      image: require("../../utils/image/product2.png"),
      title: "Girls fashion",
      number: "02",
      detail:
        "From Flirty Florals to Classic Silhouettes, Find Your Perfect Statement Piece with Our Range of One Piece Dresses.",
    },
    {
      image: require("../../utils/image/product3.png"),
      title: "Traditional Era",
      number: "03",
      detail:
        "Step into Timeless Tradition with Our Exquisite Traditional Dresses.",
    },
    {
      image: require("../../utils/image/product4.png"),
      title: "Party & Wedding wear",
      number: "04",
      detail: "Discover the Majesty of Traditional Attire Today.",
    },
  ];
  return (
    <div className=" mx-auto  px-2 mt-8  ">
      <div className=" ">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-10 text-center text-[#2B438B]">
          Draped in Style,
          <br /> Delivered with Care.
        </h1>
        <Slider {...brand}>
          {brandList.map((brand, index) => (
            <div className="flex  items-center mb-4  gap-4" key={index}>
              <div className="p-4 bg-[#f3f4f7] rounded-[40px] transition duration-300 ease-in-out transform hover:-translate-y-1  ml-2 lg:ml-16">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 relative">
                    <p className="text-2xl lg:text-5xl text-left font-bold from-red-400 via-pink-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                      {/* {brand.number} */}
                      <Image
                        src={require("../../utils/image/icon/logoPng.png")}
                        alt="logo"
                        className="w-20 h-auto"
                      />
                    </p>

                    <div className="relative lg:absolute bottom-0 lg:bottom-12 left-0 ">
                      <p className="text-3xl lg:text-4xl font-semibold text-[#121B33] mb-6 lg:mb-10 mt-2 lg:mt-0 ">
                        {brand.title}
                      </p>
                      <p className="text-lg lg:text-xl font-semibold text-[#7075A7]  ">
                        {brand.detail}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <Image
                      src={brand.image}
                      alt="image"
                      className="w-full h-auto object-contain rounded-[40px]"
                    />
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
