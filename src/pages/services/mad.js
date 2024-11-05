import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/Service/Detailservice2.png";

const MobileAppDev = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 min-h-screen font-poppins relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
        <div className="absolute top-40 right-10 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
      </div>

      {/* Navbar Spacer */}
      <div className="h-20"/>
      
      <div className="relative p-8 md:p-16">
        {/* Back Button */}
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/services')}
          className="group flex items-center gap-2 text-gray-800 hover:text-amber-800 transition-colors mb-8 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg"
        >
          <svg 
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Services
        </motion.button>
  
        {/* Content Container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Mobile App
                <span className="block text-amber-800">Development</span>
              </h2>
              
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-amber-800 text-white rounded-full text-sm">Android</span>
                <span className="px-3 py-1 bg-amber-800 text-white rounded-full text-sm">iOS</span>
                <span className="px-3 py-1 bg-amber-800 text-white rounded-full text-sm">Cross-Platform</span>
              </div>
            </div>
            
            <p className="text-gray-800 leading-relaxed text-lg bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              Pembuatan aplikasi mobile untuk platform Android, iOS, atau cross-platform. 
              Aplikasi mobile ini dapat berupa aplikasi bisnis, aplikasi e-commerce, game, 
              atau solusi mobile lainnya yang terintegrasi dengan backend perusahaan.
            </p>
  
            <div className="space-y-4 bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-800">
                Contoh Proyek:
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-800 rounded-full"/>
                  Aplikasi pemesanan tiket
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-800 rounded-full"/>
                  Aplikasi pengiriman barang
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-800 rounded-full"/>
                  Aplikasi loyalitas pelanggan
                </li>
              </ul>
            </div>
          </motion.div>
  
          {/* Right Content - Image */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-transparent rounded-3xl transform -rotate-6 scale-105"/>
              
              {/* Main Illustration */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white/30 backdrop-blur-sm p-8 rounded-3xl shadow-xl"
              >
                <img 
                  src={img}
                  alt="Mobile App Development Illustration"
                  className="w-full h-auto max-w-md mx-auto relative z-10"
                />

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="w-16 h-16 bg-amber-800/10 rounded-xl animate-float"/>
                  <div className="w-12 h-12 bg-amber-600/10 rounded-xl animate-float animation-delay-1000"/>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Tambahkan animasi keyframes di file CSS Anda


export default MobileAppDev;