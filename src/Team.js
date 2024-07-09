import React from "react";
import Dini from "./images/Dini.png";
import Miftah from "./images/Miftah.png";

const TeamMember = ({ imgSrc, name, nim, description }) => (
  <div className="relative overflow-hidden transition duration-300 bg-gradient-to-r from-green-50 to-teal-50 transform rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl w-64 h-80 md:w-[24rem] md:h-[32rem]">
    <img
      className="object-cover w-full h-full"
      src={imgSrc}
      alt={name}
    />
    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
      <p className="mb-1 text-lg font-bold text-gray-100">{name}</p>
      <p className="mb-4 text-base font-medium text-gray-100">{nim}</p>
    </div>
  </div>
);

const Teams = () => {
  const teamMembers = [
    {
      imgSrc: Dini,
      name: "Rizqa Nur Arifandini",
      nim: "2257301122",
    },
    {
      imgSrc: Miftah,
      name: "Miftahul Jannah",
      nim: "2257301082",
    },
  ];

  return (
    <section className="min-h-screen" style={{ backgroundColor: "#E1EEFF" }}>
      <div className="bg-blue-600 text-center py-4">
        <h2 className="text-white text-2xl font-bold">OUR TEAM</h2>
      </div>
      <div className="flex justify-center items-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              nim={member.nim}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
