import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function CardsSection() {
  const cardData = [
    {
      title: "About Us",
      description: "Bee Telematic Solution adalah perusahaan teknologi yang berfokus pada pengembangan solusi inovatif untuk memenuhi kebutuhan bisnis yang kompleks.",
      icon: "🏢",
      path: "about_us"
    },
    {
      title: "Portofolio",
      description: "Temukan bagaimana kami memanfaatkan teknologi terkini untuk memberikan solusi yang terbaik bagi klien kami.",
      icon: "💼",
      path: "/portofolio"
    },
    {
      title: "Contact Us",
      description: "Hubungi kami untuk informasi lebih lanjut mengenai produk dan layanan kami.",
      icon: "📧",
      path: "/contact"
    },
  ];

  return (
    <section className="w-full bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              whileHover={{ y: -4 }} 
              className="bg-white rounded-lg shadow-sm p-6 border border-amber-100 flex flex-col h-full"
            >
              {/* Content Section */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="text-xl font-semibold text-amber-900">{card.title}</h3>
                </div>
                <p className="text-amber-900/70">{card.description}</p>
              </div>

              {/* Button Section - Always at bottom */}
              <div className="mt-6">
                <Link to={card.path}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-500 text-white py-2.5 px-4 rounded-md 
                             font-medium hover:bg-amber-600 transition-colors
                             flex items-center justify-center gap-2"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
