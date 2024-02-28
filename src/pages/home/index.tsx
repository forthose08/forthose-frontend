import { getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Banner from "@/components/Home/Banner";

import Subcription from "@/components/Home/Subcription";
import AboutHome from "@/components/Home/About";
import CardList from "@/components/Home/services";
import Service from "@/components/Home/services";
import { url } from "inspector";
import Services2 from "@/components/Home/services2";
import Services3 from "@/components/Home/services3";
import Numbers from "@/components/Home/numbers";
import Trust from "@/components/Home/trust";
import FAQComponent from "@/components/Home/Faqs";
import CreditCard from "./services/creditCard";
import Learn from "@/components/Home/learn";
import Appinstall from "@/components/Home/Appinstall";
import Planing from "@/components/Home/planing";
import Cards from "@/components/Home/Cards";

const bannersData = [
  {
    id: "1",
    banner: require("../../utils/image/image1.jpg"),
  },
  {
    id: "2",
    banner: require("../../utils/image/image2.webp"),
  },
  {
    id: "3",
    banner: require("../../utils/image/image3.jpg"),
  },
  // Add more banner objects as needed
];

const cardsData = [
  {
    imageUrl: require("../../utils/image/icon/icon1.png"),
    title: "Card 1",
    description: "Description for Card 1",
  },
  {
    imageUrl: "../../utils/image/background1.webp",
    title: "Card 2",
    description: "Description for Card 2",
  },
  {
    imageUrl: "/image3.jpg",
    title: "Card 3",
    description: "Description for Card 3",
  },
  {
    imageUrl: "/image4.jpg",
    title: "Card 4",
    description: "Description for Card 4",
  },
];

export default function Home({ categoriesData }: any) {
  return (
    <div className="bg-white ">
      <div className="pt-10">
        <Banner banners={bannersData} />
      </div>
      <div className="bg-secondry  ">
        <div className="hidden md:block">
          <Numbers />
        </div>
      </div>
      {/* <AboutHome /> */}
      {/* <div className="bg-white  px-4 py-2 lg:py-28">
        <Trust />
      </div> */}
      <div className="ml-0 lg:ml-20 pb:20 mt-6">
        <Planing />
      </div>
      <div className=" bg-bg-1 bg-center py-8 mt-8 lg:py-20 px-4" style={{backgroundImage:"url('https://img.freepik.com/free-photo/white-paper-texture_1194-2324.jpg?w=1380&t=st=1709042721~exp=1709043321~hmac=78bf6c751f05cc46452fbd6485e4d74ab8f0ab1e21fa6c3c34e36596c1a314e1')", backgroundAttachment:"fixed"}}>
        {/* <Service /> */}
        <Cards/>
      </div>
      <CreditCard />
      {/* <div className=" bg-cover">
        <Services2 />
      </div> */}
      {/* <Learn /> */}
      {/* <FAQComponent /> */}
      {/* <div className="bg-bg-5 bg-cover bg-center py-16"> */}
      {/* <Appinstall /> */}
      {/* </div> */}
      <div className="bg-[#203B82]">
        <Subcription />
      </div>
    </div>
  );
}
