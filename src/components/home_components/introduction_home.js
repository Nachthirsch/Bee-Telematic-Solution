import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';
import Introduction from "../../assets/Homepage/BG.png";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background container with blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Introduction})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          opacity: '0.95',
        }}
      ></div>

      {/* Content container */}
      <section className="relative z-10 min-h-screen font-poppins">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 to-transparent"></div>

        {/* Floating elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-24 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className={`mx-4 lg:mx-8 flex flex-col gap-8 md:w-1/2 transition-all duration-1000 bg-white/5 p-8 rounded-2xl
                            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              
              {/* Rest of the content remains the same */}
              <h2 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold
                             text-amber-900
                             tracking-tight leading-tight">
                WELCOME TO BEE!
              </h2>

              <div className="space-y-6">
                <p className="font-poppins text-lg md:text-xl text-amber-950 leading-relaxed flex flex-col gap-2">
                  <TypeAnimation
                    sequence={["Bee Telematic Solutions ", 1000, "Your Digital Partner ", 1000, "Innovation Solutions ", 1000, "Bee Telematic Solutions ", 1000]}
                    wrapper="span"
                    speed={30}
                    className="font-bold text-amber-800"
                  />
                  <span>hadir dalam mewujudkan transformasi digital yang sukses. Kami menawarkan solusi konsultasi yang komprehensif untuk membantu bisnis Anda mencapai efisiensi, inovasi, dan pertumbuhan yang berkelanjutan.</span>
                </p>

                <div className={`flex flex-wrap gap-6 items-center justify-start`}>
                  <Link to="/services">
                    <button className="group relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-amber-50 
                                     px-8 py-4 rounded-xl text-base font-semibold tracking-wider
                                     shadow-lg hover:shadow-2xl overflow-hidden
                                     transform hover:scale-105 transition-all duration-300 ease-in-out
                                     flex items-center hover:ring-2 hover:ring-amber-400/30 hover:ring-offset-2
                                     backdrop-blur-sm border border-amber-600/20">
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2 text-shadow-sm font-medium tracking-wide">EXPLORE SERVICES</span>
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-3
                                             transition-all duration-500 ease-in-out" />
                      </span>
                      
                      {/* Elegant gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-800/50 via-amber-700/50 to-amber-900/50
                                    opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                    -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
                      
                      {/* Soft glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-300/20 
                                    rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500
                                    scale-105"></div>
                    </button>
                  </Link>

                  <Link to="/contact">
                    <button className="group relative px-8 py-4 rounded-xl 
                                     text-base font-medium tracking-wide
                                     bg-transparent text-amber-900
                                     overflow-hidden transform hover:scale-105 
                                     transition-all duration-300 ease-in-out
                                     border border-amber-900/30 hover:border-amber-600
                                     shadow-sm hover:shadow-lg">
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2">Get Started</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-all duration-500 ease-out" 
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      
                      {/* Elegant background transition */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-white/80
                                    transform origin-left scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-500 ease-out"></div>
                      
                      {/* Subtle border glow */}
                      <div className="absolute -inset-px bg-gradient-to-r from-amber-400/20 via-amber-300/20 to-amber-200/20 
                                    rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Delicate hover state */}
                      <div className="absolute inset-0 rounded-xl
                                    bg-gradient-to-br from-amber-50/10 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}