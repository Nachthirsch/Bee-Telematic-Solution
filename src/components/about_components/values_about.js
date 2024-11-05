import React from "react";
import { motion } from "framer-motion";

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      title: "Solution",
      description: "Solusi Teknologi Terdepan sesuai Kebutuhan Pelanggan",
    },
    {
      id: 2,
      title: "Excellence",
      description: "Komitmen terhadap Keunggulan dan Kepuasan Pelanggan",
    },
    {
      id: 3,
      title: "Innovation",
      description: "Inovasi Berkelanjutan dengan Tren Teknologi Terkini",
    },
    {
      id: 4,
      title: "Integration",
      description: "Integrasi Mudah dan Efektif ke dalam Sistem",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 via-amber-200 to-amber-400 py-20 px-4 min-h-screen flex flex-col items-center">
      <div className="max-w-[1440px] mx-auto flex flex-col p-5 lg:flex-row gap-12">
        {/* Header Section - Left Side */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:w-1/3 lg:sticky lg:top-20 lg:self-start mt-10">
          <h2 className="text-4xl text-center md:text-5xl font-bold mb-8">Our Values</h2>
          <p className="text-lg text-center text-gray-700">BEE Telematic Solution percaya bahwa keberhasilan dalam menyediakan solusi teknologi terbaik dicapai melalui prinsip-prinsip utama berikut:</p>
        </motion.div>

        {/* Values Grid - Right Side */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.03, translateY: -5 }} className="group">
                <div className="bg-gradient-to-br from-[#5C4C3A] to-[#806C52] p-6 rounded-2xl shadow-xl h-full relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />

                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{value.title}</h3>

                  <p className="text-gray-200 relative z-10 italic">{value.description}</p>

                  {/* Hover Effect Border */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
