import Image from "next/image";

export default function AboutHome() {
  return (
    <div className="container mx-auto p-6 px-4">
      <div className="flex md:flex-row flex-wrap justify-center mt-4">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl py-2 md:py-0 md:text-3xl  font-bold">
            About forThose
          </h1>
          <p className="text-sm md:text-lg py-2 md:py-5">
            We are building a comprehensive platform enabling financial
            inclusion for every Indian with help of intermediaries by
            effectively using technology and analytical services.
            <br />
            Solving problems faced by financial distributors, intermediaries,
            agents, RIA, wealth managers while serving their clients.
          </p>
          <p className="text-lg hidden md:block">
            The platform also aim to help new intermediaries to join the mission
            of financial inclusion for every Indian by offering a large basket
            of financial product and services offered by trusted and regulatory
            compliant partners and also help them increase their income.
            <br />
            <br />
            Building a simple platform exclusively for financial advisors,
            distributors to help serve their clients.
          </p>
          <div className="md:pt-16 pt-5">
            <a
              className="bg-primary px-5 md:px-10 py-3 md:py-3 rounded-md cursor-pointer transition-all duration-500 scale-50 hover:bg-green-500"
              href="/home/about"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:p-16 lg:pt-0 md:p-0 mt-4 lg:mt-0">
          <Image
            src={require("../../utils/image/image4.jpg")}
            alt=""
            className="w-full md:w-[80%] rounded"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}
