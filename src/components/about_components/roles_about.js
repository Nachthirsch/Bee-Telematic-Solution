import React from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import tejoImage from "../../assets/people/tejo.png";
import deriImage from "../../assets/people/deri.png";
import bondanImage from "../../assets/people/bondan.png";
import robyImage from "../../assets/people/roby.png";
import ideImage from "../../assets/people/ide.png";
import sasongkoImage from "../../assets/people/sasongko.png";
import rezaImage from "../../assets/people/reza.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Hariyo Tejo",
      role: "Direktur / Back-end Programmer",
      imageUrl: tejoImage,
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
      name: "Sasongko",
      role: "Bussiness Analyst",
      imageUrl: sasongkoImage,
    },
    {
      name: "Reza Apriansyah",
      role: "Support/Trainer",
      imageUrl: rezaImage,
    },
  ];

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto scroll animation
  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }, 30);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    startAutoScroll();

    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-200 py-36 px-5 overflow-hidden">
      <section className="max-w-[1440px] mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold mb-3 text-amber-800">Our Team</h2>
          <p className="text-gray-700">Meet our talented team members who make it all happen</p>
        </motion.div>

        <div ref={containerRef} className="flex gap-6 overflow-hidden pb-4 cursor-grab active:cursor-grabbing select-none" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleEnd}>
          {teamMembers.map((member, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }} className="flex-none">
              <div className="w-72 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="mb-4">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-amber-200">
                      <img src={member.imageUrl} alt={member.name} className="w-full h-32 object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-amber-700 mb-1">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
