import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import BeeIcon from "../../assets/bee-icon.png";

const BeeAnimation = () => {
  return (
    <motion.div
      initial={{ x: "-50%", y: 0 }}
      animate={{
        x: ["-50%", "0%", "-50%", "-100%", "-50%"],
        y: [0, -30, 0, 30, 0],
      }}
      transition={{
        x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute left-1/2 top-4 w-9 h-9"
    >
      <motion.img
        src={BeeIcon}
        alt="Bee Icon"
        animate={{}}
        transition={{
          scaleX: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          },
        }}
        className="w-15 h-15"
      />
    </motion.div>
  );
};

const InfoServices = () => {
  return (
    <section className="bg-amber-100 py-28 px-4 font-poppins relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col items-center text-center relative">
        {/* Main Text Content */}
        <h1 className="text-5xl font-bold text-orange-500 mb-8">
          <TypeAnimation sequence={["Welcome To Our Service", 1000]} />
        </h1>

        <p className="max-w-2xl text-lg text-gray-700 mb-12">
          Optimalkan bisnis Anda dengan solusi IT cerdas dari <span className="text-orange-500 font-semibold">PT Bee Telematic Solutions</span>. Kami menawarkan konsultasi IT komprehensif untuk membantu Anda mencapai tujuan bisnis.
        </p>

        {/* Bees Container */}
        <div className="relative w-full h-24">
          <BeeAnimation />
        </div>
      </div>
    </section>
  );
};

export default InfoServices;
