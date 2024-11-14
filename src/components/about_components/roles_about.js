import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import team member images
import tejoImage from "../../assets/people/tejo.png";
import deriImage from "../../assets/people/deri.png";
import bondanImage from "../../assets/people/bondan.png";
import robyImage from "../../assets/people/roby.png";
import ideImage from "../../assets/people/ide.png";
import sasongkoImage from "../../assets/people/sasongko.png";
import rezaImage from "../../assets/people/reza.png";

const TeamCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group"
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image Container */}
        <div className="mb-5">
          <div className="relative w-48 h-48 mx-auto">
            {/* Main Image */}
            <div className="rounded-full overflow-hidden border-2 border-amber-100">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover object-center scale-110"
                style={{
                  objectPosition: "50% 20%",
                  aspectRatio: "1/1"
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-1">
          <h4 className="text-lg font-semibold text-gray-800">
            {member.name}
          </h4>
          <p className="text-sm text-gray-500">
            {member.role}
          </p>
        </div>
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
      role: "Business Analyst",
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
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Team
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet the talented people behind our success
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
