import Image from "next/image";
import React from "react";
import Testimonials from "./testimonial";
import TeamSection from "./team";

const AboutUs = () => {
  return (
    <div className="">
      {/* Background image */}
      <div className="relative w-full py-10  md:py-40 text-white flex items-center justify-center  bg-center">
        <div className="   items-center justify-center  text-white pointer-events-none">
          <h1 className="text-black text-center  text-4xl md:text-6xl leading-tight tracking-wide  font-semibold popp">
            Our Mission
          </h1>
          <p className="text-black text-center p-4 text-xl md:text-2xl popp">
            To help Bharat achieve financial inclusion during Amrit Kaal for{" "}
            <br />
            India and to provide comprehensive financial solutions that inspire{" "}
            <br />
            confidence, foster growth, and secure lasting prosperity for <br />
            individuals and businesses.
          </p>
        </div>
      </div>

      {/* vision And Mission */}
      <div className="bg-secondry ">
        <div className="text-center py-16 w-full lg:w-[70%] m-auto ">
          <h1 className=" font-bold text-2xl lg:text-4xl    "></h1>
          <h1 className=" text-white text-center  text-4xl md:text-6xl leading-tight tracking-wide  font-semibold popp ">
            Our Vision
          </h1>

          <p className="text-lg lg:text-2xl mt-4 text-justify p-4 text-white">
            To be one of the most trusted financial marketplace in India and to
            empower individuals, businesses, and communities with the knowledge,
            tools, and resources they need to achieve financial security and
            prosperity.
          </p>
        </div>
      </div>

      {/* About section-1 */}
      <div className="  flex flex-col lg:flex-row  items-center justify-center  px-4 py-16 lg:py-16">
        <div className="lg:w-1/2  p-0 lg:p-10 flex justify-center">
          <Image
            src={require("../../../utils/image/about2.png")}
            alt="Image"
            className="w-full lg:w-[80%] h-auto"
          />
        </div>
        <div className="lg:w-1/2 p-0 lg:pr-16 mt-6  pb-10">
          <p className="text-lg lg:text-2xl mt-4  p-1">
            <span className="text-2xl font-bold">We are building </span>
            acomprehensive platform enabling financial inclusion for every
            Indian with help of intermediaries by effectively using technology
            and analytical services.
          </p>
          <br />
          <p className="text-lg lg:text-2xl mt-4  p-1">
            Solving problems faced by financial distributors, intermediaries,
            agents, RIA, wealth managers while serving their clients.
          </p>
          <p className="text-lg lg:text-2xl mt-4  p-1">
            The platform also aim to help new intermediaries to join the mission
            of financial inclusion for every Indian by offering a large basket
            of financial product and services offered by trusted and regulatory
            compliant partners and also help them increase their income.
          </p>
          <br />
          <p className="text-lg lg:text-2xl mt-4  p-1">
            Building a simple platform exclusively for financial advisors,
            distributors to help serve their clients.
          </p>
        </div>
      </div>

      {/* about -2 */}
      {/* <Testimonials /> */}

      {/* team section */}
      {/* <div className="px-6 lg:px-20">
        <TeamSection />
      </div> */}
    </div>
  );
};

export default AboutUs;
