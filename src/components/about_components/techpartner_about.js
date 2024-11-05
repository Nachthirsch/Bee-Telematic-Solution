import React from "react";

import Partner1 from "../../assets/AboutUs/logo1.png";
import Partner2 from "../../assets/AboutUs/logo2.png";
import Partner3 from "../../assets/AboutUs/logo3.png";
import Partner4 from "../../assets/AboutUs/logo4.png";
import Partner5 from "../../assets/AboutUs/logo5.png";
import Partner6 from "../../assets/AboutUs/logo6.png";
import Partner7 from "../../assets/AboutUs/logo7.png";
import Partner8 from "../../assets/AboutUs/logo8.png";

const TechPartners = () => {
  // Array of partner logos and names
  const partners = [
    { id: 1, logo: Partner1, alt: "Partner 1" },
    { id: 2, logo: Partner2, alt: "Partner 2" },
    { id: 3, logo: Partner3, alt: "Partner 3" },
    { id: 4, logo: Partner4, alt: "Partner 4" },
    { id: 5, logo: Partner5, alt: "Partner 5" },
    { id: 6, logo: Partner6, alt: "Partner 6" },
    { id: 7, logo: Partner7, alt: "Partner 7" },
    { id: 8, logo: Partner8, alt: "Partner 8" },
  ];
  return (
    <section className="py-16 px-4 md:px-6 max-w-[1440px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Technology Partners</h2>
        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="w-24 h-24 flex items-center justify-center p-2">
              <img src={partner.logo} alt={partner.alt} className="max-w-full max-h-full object-contain  hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Icon */}
      <div className="absolute top-8 right-8 opacity-50">
        <svg className="w-24 h-24 text-amber-400" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="80" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="80" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="80" cy="80" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default TechPartners;
