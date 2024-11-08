import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import tejoImage from "../../assets/people/tejo.png";
import deriImage from "../../assets/people/deri.png";
import bondanImage from "../../assets/people/bondan.png";
import robyImage from "../../assets/people/roby.png";
import ideImage from "../../assets/people/ide.png";
import sasongkoImage from "../../assets/people/sasongko.png";
import rezaImage from "../../assets/people/reza.png";

const TeamCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const evenCard = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        x: evenCard ? -50 : 50,
        y: 20
      }}
      animate={isInView ? { 
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{ 
        duration: 0.7,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="w-full sm:w-[280px]"
    >
      <div className="bg-amber-50/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="mb-4 sm:mb-6">
          <div className="w-28 h-28 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
            <img 
              src={member.imageUrl} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
          {member.name}
        </h4>
        <p className="text-sm sm:text-base text-gray-600 italic font-medium">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Hariyo Tejo",
      role: "Direktur / Back-end Programmer",
      imageUrl: tejoImage,
    },
    {
      name: "Sasongko",
      role: "Bussiness Analyst",
      imageUrl: sasongkoImage,
    },
    {
      name: "Deri", 
      role: "Front-end Programmer",
      imageUrl: deriImage,
    },
    {
      name: "Bondan Prakoso",
      role: "Front-end Programmer",
      imageUrl: bondanImage,
    },
    {
      name: "Roby Suwandi",
      role: "Support/Trainer",
      imageUrl: robyImage,
    },
    {
      name: "Ide",
      role: "Support/Trainer",
      imageUrl: ideImage,
    },

    {
      name: "Reza Apriansyah",
      role: "Support/Trainer",
      imageUrl: rezaImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-orange-300 py-10 sm:py-20 px-4 sm:px-5">
      <section className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 w-full">
            {teamMembers.slice(0, 2).map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Middle Row */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 w-full">
            {teamMembers.slice(2, 5).map((member, index) => (
              <TeamCard key={index + 2} member={member} index={index + 2} />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 w-full">
            {teamMembers.slice(5).map((member, index) => (
              <TeamCard key={index + 5} member={member} index={index + 5} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
