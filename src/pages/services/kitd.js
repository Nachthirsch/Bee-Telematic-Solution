import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/Service/Detailservice8.png"; // Make sure to add your maintenance illustration

const ITConsultation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500 min-h-screen font-poppins relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
        <div className="absolute top-40 right-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
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
          className="group flex items-center gap-2 text-gray-800 hover:text-orange-800 transition-colors mb-8 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg"
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
                Konsultasi IT &
                <span className="block text-orange-800">Transformasi Digital</span>
              </h2>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-800 text-white rounded-full text-sm">Analisis IT</span>
                <span className="px-3 py-1 bg-orange-800 text-white rounded-full text-sm">Strategi Digital</span>
                <span className="px-3 py-1 bg-orange-800 text-white rounded-full text-sm">Solusi Teknologi</span>
              </div>
            </div>
            
            <p className="text-gray-800 leading-relaxed text-lg bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              Memberikan konsultasi kepada bisnis dalam mengadopsi teknologi terbaru untuk 
              transformasi digital. Layanan ini mencakup analisis kebutuhan IT, perencanaan strategi 
              teknologi, dan penerapan solusi digital yang mendukung pertumbuhan bisnis.
            </p>

            <div className="space-y-4 bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-orange-800">
                Contoh Proyek:
              </h3>
              <p className="text-gray-800">
                Konsultasi penerapan sistem ERP, adopsi teknologi cloud, 
                atau implementasi solusi big data dan AI.
              </p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-transparent rounded-3xl transform -rotate-6 scale-105"/>
              
              {/* Main Illustration */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white/30 backdrop-blur-sm p-8 rounded-3xl shadow-xl"
              >
                <img 
                  src={img}
                  alt="IT Consultation"
                  className="w-full h-auto max-w-md mx-auto relative z-10"
                />

                {/* Feature Labels */}
                <div className="absolute -top-6 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"/>
                    <span className="text-sm text-gray-800">Digital Strategy</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"/>
                    <span className="text-sm text-gray-800">IT Solutions</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ITConsultation;
