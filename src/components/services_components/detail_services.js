import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import Image1 from "../../assets/Service/Service1.png";
import Image2 from "../../assets/Service/Service2.png";
import Image3 from "../../assets/Service/Service3.png";
import Image4 from "../../assets/Service/Service4.png";
import Image5 from "../../assets/Service/Service5.png";
import Image6 from "../../assets/Service/Service6.png";
import Image7 from "../../assets/Service/Service7.png";
import Image8 from "../../assets/Service/Service8.png";
import Image9 from "../../assets/Service/Service9.png";
import Image10 from "../../assets/Service/Service10.png";

const DetailServices = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Pembuatan perangkat lunak yang disesuaikan dengan kebutuhan spesifik klien,  mulai dari aplikasi web, desktop, hingga mobile",
      imageUrl: Image1,
      path: "/services/custom-software-development"
    },

    {
      title: "Mobile App Development",
      description: "Pembuatan aplikasi mobile untuk platform Android, iOS, atau cross-platform",
      imageUrl: Image2,
      path: "/services/mobile-app-development"
    },

    {
      title: "Web Application Development ",
      description: " Pengembangan aplikasi berbasis web yang dapat diakses melalui browser. Aplikasi  ini dapat bersifat dinamis dengan database backend untuk mengelola data secara real-time",
      imageUrl: Image3,
      path: "/services/web-application-development"
    },

    {
      title: " Layanan UI/UX Design",
      description: "Membantu klien mendesain antarmuka pengguna yang intuitif dan menarik serta  meningkatkan pengalaman pengguna secara keseluruhan",
      imageUrl: Image4,
      path: "/services/ui-ux-design"
    },

    {
      title: "Enterprise Software Development",
      description: "Pembuatan sistem perangkat lunak yang dirancang untuk skala perusahaan  dengan integrasi proses bisnis yang kompleks",
      imageUrl: Image5,
      path: "/services/enterprise-software"
    },

    {
      title: "System Integration",
      description: "Layanan ini mencakup penghubungan berbagai sistem perangkat lunak yang  berbeda agar dapat bekerja sama secara harmonis",
      imageUrl: Image6,
      path: "/services/system-integration"
    },

    {
      title: "Software Maintenance & Support",
      description: "Menawarkan layanan pemeliharaan  pasca-peluncuran, termasuk pembaruan sistem, perbaikan bug, penambahan fitur, serta  dukungan teknis untuk memastikan perangkat lunak berjalan dengan lancar",
      imageUrl: Image7,
      path: "/services/software-maintenance"
    },

    {
      title: "Konsultasi IT dan Transformasi Digital",
      description: "Memberikan konsultasi kepada bisnis dalam mengadopsi teknologi terbaru untuk  transformasi digital",
      imageUrl: Image8,
      path: "/services/it-consultation"
    },

    {
      title: "Cloud-based Software Development",
      description: "Pengembangan perangkat lunak yang berbasis cloud, memungkinkan perusahaan  untuk memanfaatkan infrastruktur cloud untuk hosting aplikasi, penyimpanan data, dan  proses komputasi",
      imageUrl: Image9,
      path: "/services/cloud-development"

    },

    {
      title: "Testing & Quality Assurance",
      description: "Layanan untuk memastikan perangkat lunak bebas dari kesalahan dan memenuhi  standar kualitas yang ditetapkan. Ini mencakup pengujian fungsional, pengujian performa,  pengujian keamanan, dan otomatisasi pengujian",
      imageUrl: Image10,
      path: "/services/testing-qa"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-amber-50 py-20 px-4 min-h-screen">
      {/* Decorative Elements */}
      <div className="absolute top-8 right-8">
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-amber-200" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-amber-700 text-center mb-16">
          What You Need?
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative">
                {service.imageUrl ? (
                  <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  // Placeholder gradient if no image
                  <div className="w-full h-48 bg-gradient-to-r from-amber-100 to-amber-200" />
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-amber-600 mb-3">{service.title}</h3>

                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{service.description}</p>

                <div className="mt-auto">
                  <Link 
                    to={service.path}
                    className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors flex items-center gap-2 text-sm group w-fit"
                  >
                    SEE MORE
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailServices;
