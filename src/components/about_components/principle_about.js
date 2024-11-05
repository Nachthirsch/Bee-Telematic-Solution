import React from "react";

import VISI from "../../assets/AboutUs/AboutUs_Visi.png";
import MISI from "../../assets/AboutUs/AboutUs_Misi.png";

const PrinciplesSection = () => {
  const principles = [
    {
      id: 1,
      title: "VISI",
      image: VISI,
      description: "Kami adalah menjadi perusahaan konsultan yang terdepan dalam bidang IT (Informasi dan Teknologi) yang selalu mengutamakan kesempurnaan dalam tingkat pelayanan kami terhadap mitra dengan selalu memberikan solusi yang inovatif",
    },
    {
      id: 2,
      title: "MISI",
      image: MISI,
      description: "Kami adalah memberikan jasa IT (Informasi dan Teknologi) terbaik dengan nilai tambah kepada setiap mitra yang menjalin prinsip-prinsip",
    },
  ];

  return (
    <section id="visi-misi" className="relative py-24 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-wider text-sm uppercase mb-2 block">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Principles of <span className="text-amber-600">BEE</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"/>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {principles.map((principle) => (
            <div 
              key={principle.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              {/* Image and Title Section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"/>
                <img 
                  src={principle.image} 
                  alt={principle.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-500">
                      <span className="text-white font-bold">{principle.id}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {principle.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-1 bg-amber-500 rounded-full"/>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute bottom-4 right-4">
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 60 60" 
                    className="text-amber-100"
                  >
                    <path 
                      d="M30 0l25.98 15v30L30 60 4.02 45V15z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
