import SearchComponent from "@/components/Home/Subcription";
import Image from "next/image";
import React, { useState } from "react";
import { MdEmail, MdWifiCalling } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Add your form submission logic here
  };

  return (
    <div className="bg-white pt-20 ">
      <div className="mt-8 container m-auto">
        <h1 className="flex justify-center items-center text-[50px] font-bold">
          Contact-Us
        </h1>
      </div>

      <div className="lg:flex md:flex flex-wrap container m-auto ">
        <div className=" w-full  lg:p-10 md:p-10 p-5">
          <div className="flex justify-center items-center ">
            <p className="leading-30 text-[15px] text-gray-500">
              Fill the form below or write us .We will help you as soon as
              possible.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white p-3  w-full">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2  lg:p-10">
              <Image
                src={require("../../../utils/image/support.jpg")}
                alt="support "
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2 lg:p-10">
              <div className="inputs mt-5">
                <div className="mb-4">
                  <div className="input-com w-full h-full">
                    <div className="input-wrapper  h-[45px]  w-full h-full overflow-hidden relative ">
                      <input
                        type="text"
                        placeholder="Name"
                        className="input-field placeholder:text-sm border-black border-b-2 text-sm px-6 rounded-lg text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[51px]"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-com w-full h-full">
                    <div className="input-wrapper  h-[45px]  w-full h-full overflow-hidden relative ">
                      <input
                        type="email"
                        placeholder="Email"
                        className="input-field placeholder:text-sm border-black border-b-2 text-sm px-6 rounded-lg text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[51px]"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="input-com w-full h-full">
                    <div className="input-wrapper  h-[45px]   w-full h-full overflow-hidden relative ">
                      <input
                        type="text"
                        placeholder="Your Subject here"
                        className="input-field placeholder:text-sm border-black border-b-2 border-black border-b-2 text-sm px-6 rounded-lg text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[51px]"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <textarea
                    placeholder="Type your message here"
                    className="w-full h-[105px] focus:ring-0 focus:outline-none p-3  placeholder:text-sm  bg-white"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <button
                    disabled={!name || !email || !subject || !message}
                    type="button"
                    className={`${
                      !name || !email || !subject || !message
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary"
                    } text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center rounded-lg`}
                    onClick={handleSubmit}
                  >
                    <span>Send Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#203B82]">
        <div className=" p-12 flex flex-col md:flex-row items-center justify-center container m-auto">
          {/* First Div */}
          <div className="w-full md:w-1/4 text-  md:pr-8">
            <h1 className="text-3xl font-semibold  mb-4 text-[#ffffff] ">
              Email us directly
            </h1>
            <p className=" text-[#94A4CE] font-bold text-lg">
              We will contact us soon...
            </p>
          </div>

          {/* Second Div */}
          <div className="w-full md:w-1/4 mt-4 md:mt-0 ">
            <div className="flex gap-4">
              <Image src={require("../../../utils/image/icon/email.png")} alt="email" className="w-10 h-10 "/> 
              <h1 className="text-4xl text-white">info@forThose.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
