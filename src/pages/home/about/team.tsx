// components/TeamSection.js
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      profile: "CEO",
      image: require("../../../utils/image/team/team1.webp"),
    },
    {
      name: "Jane Smith",
      profile: "Designer",
      image: require("../../../utils/image/team/team2.webp"),
    },
    {
      name: "Bob Johnson",
      profile: "Developer",
      image: require("../../../utils/image/team/team3.webp"),
    },
    {
      name: "Alice Brown",
      profile: "Marketing",
      image: require("../../../utils/image/team/team4.webp"),
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="text-center mb-8 ml-0 lg:ml-4">
          
          <h1 className="font-semibold text-2xl lg:text-4xl">Our Dedicated Team </h1>
        </div>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="overflow-hidden rounded-lg w-64 h-64 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-4 text-center">
                  {member.name}
                </h2>
                <p className="text-gray-600 text-sm text-center">
                  {member.profile}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
