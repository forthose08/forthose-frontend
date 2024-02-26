// components/FAQAccordion.js
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What Types of Loans Do You Offer, ",
      answer:
        "Provide an overview of the different loan products you offer, such as personal loans, home loans, and auto loans. Explain the application process, eligibility criteria, and required documentation.",
    },
    {
      question:
        "How Do Fixed Deposits Work, ",
      answer:
        "Describe the concept of fixed deposits, including how they work, their maturity periods, and the advantages of investing in them, such as guaranteed returns and low risk.",
    },
    {
      question:
        "What Types of Loans Do You Offer, ",
      answer:
        "Provide an overview of the different loan products you offer, such as personal loans, home loans, and auto loans. Explain the application process, eligibility criteria, and required documentation.",
    },
    {
      question:
        "How Do Fixed Deposits Work, ",
      answer:
        "Describe the concept of fixed deposits, including how they work, their maturity periods, and the advantages of investing in them, such as guaranteed returns and low risk.",
    },
    // Add more FAQs as needed
  ];

  const toggleAccordion = (index:any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-10 px-4 pl-0 lg:flex lg:justify-center container m-auto">
      {/* Image */}
      <div className="lg:w-1/2 lg:mr-4 p-0 pl-0 hidden lg:block md:block flex justify-center m-auto" >
        <Image
          src={require("../../utils/image/faq.png")}
          alt="Image"
          className="w-[70%] h-auto rounded-r-lg"
        />
      </div>

      {/* FAQ Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 p-2 lg:pt-16">
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-16  text-[#2B438B]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t  border-gray-300">
                <button
                  className={`w-full text-left p-4 font-bold text-md lg:text-lg bg-white hover:bg-gray-50 ${
                    activeIndex === index ? "text[#132F7A] " : "text-[#8796BD] "
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  {activeIndex === index ? (
                    <BiSolidRightArrow className="float-right" />
                  ) : (
                    <BiSolidRightArrow className="float-right transform rotate-90" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-100 border-b-2">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
