import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import icon1 from "../../assets/Homepage/icon1.png";
import icon2 from "../../assets/Homepage/icon2.png";
import icon3 from "../../assets/Homepage/icon3.png";
import icon4 from "../../assets/Homepage/icon4.png";
import icon5 from "../../assets/Homepage/icon5.png";
import icon6 from "../../assets/Homepage/icon6.png";
import icon7 from "../../assets/Homepage/icon7.png";
import icon8 from "../../assets/Homepage/icon8.png";
import icon9 from "../../assets/Homepage/icon9.png";
import icon10 from "../../assets/Homepage/icon10.png";

const ServiceHome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
      }
    }, 10);

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

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

  const serviceCards = [
    {
      icon: icon1,
      title: "Custom Software Development",
      path: "/services/custom-software-development",
      alt: "Custom Software"
    },
    {
      icon: icon2,
      title: "Mobile App Development",
      path: "/services/mobile-app-development",
      alt: "Mobile App"
    },
    {
      icon: icon3,
      title: "Web Application Development",
      path: "/services/web-application-development",
      alt: "Web App"
    },
    {
      icon: icon4,
      title: "UI/UX Design",
      path: "/services/ui-ux-design",
      alt: "UI/UX"
    },
    {
      icon: icon5,
      title: "Enterprise Software Development",
      path: "/services/enterprise-software",
      alt: "Enterprise Software"
    },
    {
      icon: icon6,
      title: "System Integration",
      path: "/services/system-integration",
      alt: "System Integration"
    },
    {
      icon: icon7,
      title: "Software Maintenance & Support",
      path: "/services/software-maintenance",
      alt: "Software Maintenance"
    },
    {
      icon: icon8,
      title: "IT Consultation",
      path: "/services/it-consultation",
      alt: "IT Consultation"
    },
    {
      icon: icon9,
      title: "Cloud Development",
      path: "/services/cloud-development",
      alt: "Cloud Development"
    },
    {
      icon: icon10,
      title: "Testing & Quality Assurance",
      path: "/services/testing-qa",
      alt: "Testing QA"
    }
  ];

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 bg-amber-50 py-20 relative">
        <motion.section ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header text */}
          <div className="text-center mb-12 font-poppins">
            <h2 className="text-3xl md:text-3xl font-bold mb-2 [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.8)]">Your Trusted Partner</h2>
            <h3 className="text-2xl md:text-2xl font-bold mb-4 [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.8)]">In Digital Transformation</h3>
            <p className="text-gray-700 mt-3">Setiap industri memiliki tantangan unik. Bee Telematic Solutions memahami kebutuhan spesifik industri Anda.</p>
          </div>
          <div className="flex justify-center">
            <div
              ref={containerRef}
              className="flex flex-nowrap gap-6 overflow-hidden pb-4 cursor-grab active:cursor-grabbing touch-pan-x select-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleEnd}
            >
              {serviceCards.map((card, index) => (
                <div key={index} className="flex-none w-72 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                         style={{
                           background: 'rgba(254, 243, 199, 0.5)',
                           backdropFilter: 'blur(4px)'
                         }}>
                      <img src={card.icon} alt={card.alt} className="w-12 h-12" />
                    </div>
                    <h4 className="text-xl font-semibold text-orange-500 mb-6 text-center min-h-[3.5rem] flex items-center">
                      {card.title.split(' ').map((word, i, arr) => (
                        <React.Fragment key={i}>
                          {word}
                          {i < arr.length - 1 && ' '}
                          {i === 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h4>
                    <Link to={card.path} className="w-full">
                      <button className="w-full bg-orange-500 text-white px-6 py-2.5 rounded-full 
                                       hover:bg-orange-600 transition-all duration-300 
                                       transform hover:-translate-y-0.5
                                       font-medium tracking-wide">
                        SEE MORE
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ServiceHome;
