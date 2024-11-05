import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="font-poppins relative overflow-hidden bg-gradient-to-r from-amber-50 via-amber-100 to-amber-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-40 h-40 bg-amber-500 rounded-full mix-blend-multiply blur-xl
                     animate-[float_6s_ease-in-out_infinite]"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-0 right-0 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply blur-xl
                     animate-[float_8s_ease-in-out_infinite_1s]"
          style={{
            animation: "float 8s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply blur-xl
                     animate-[float_7s_ease-in-out_infinite_0.5s]"
          style={{
            animation: "float 7s ease-in-out infinite 0.5s",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-24 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left content */}
          <div
            className={`mx-6 lg:mx-10 flex flex-col gap-8 md:w-1/2 transition-all duration-1000 
                          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Animated badge */}
            <span
              className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold 
                           tracking-wide w-fit border border-amber-200 shadow-sm
                           animate-[slideDown_0.5s_ease-out] hover:scale-105 transition-transform"
            >
              Digital Transformation Partner
            </span>

            <h2
              className={`font-poppins text-4xl md:text-5xl font-bold
                           bg-gradient-to-r from-amber-800 to-amber-950 bg-clip-text text-transparent
                           [text-shadow:_0_2px_2px_rgb(0_0_0_/_0.1)]
                           animate-[fadeIn_0.8s_ease-out_0.3s_both]`}
            >
              WELCOME TO BEE!
            </h2>

            <div className="space-y-6">
              <p
                className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed
                         animate-[fadeIn_0.8s_ease-out_0.6s_both]"
              >
                <TypeAnimation
                  sequence={["Bee Telematic Solutions", 1000, "Your Digital Partner", 1000, "Innovation Solutions", 1000, "Bee Telematic Solutions", 1000]}
                  wrapper="span"
                  speed={30}
                  className="font-bold text-amber-800 relative inline-block after:content-[''] 
                             after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
                             after:bg-amber-800 after:origin-left after:scale-x-0 
                             after:transition-transform after:duration-300 
                             hover:after:scale-x-100"
                />{" "}
                hadir dalam mewujudkan transformasi digital yang sukses. Kami menawarkan solusi konsultasi yang komprehensif untuk membantu bisnis Anda mencapai efisiensi, inovasi, dan pertumbuhan yang berkelanjutan.
              </p>

              <div className={`flex gap-4 items-center animate-[fadeIn_0.8s_ease-out_0.9s_both]`}>
                <Link to="/services">
                  <button className="group bg-amber-900 hover:bg-amber-800 text-amber-50 px-6 py-3 rounded-lg
                                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                                    transition-all duration-300 flex items-center
                                    animate-[pulse_2s_ease-in-out_infinite]">
                    SEE MORE
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="px-6 py-3 rounded-lg border-2 border-amber-900 text-amber-900
                                    hover:bg-amber-900 hover:text-amber-50 relative overflow-hidden
                                    transition-colors duration-300 group">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-amber-900 transform -translate-x-full 
                                    group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            className={`md:w-1/2 p-4 transition-all duration-1000 
                          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative group">
              {/* Image container with animated effects */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-lg blur-sm
                            opacity-25 group-hover:opacity-75 transition duration-500
                            animate-[pulse_3s_ease-in-out_infinite]"
              ></div>
              <div className="relative">
                <img
                  src="https://s3-alpha-sig.figma.com/img/be92/8c68/8395dd1d76e8e8a1a1fad24c243d1216?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OlNo1M-afmJga5Ti-VfGaVyTC2g3HccgjouGzBg7zsLbcqpDIvP5mVc6LINVidcynb33m-iaj0mmk1ki~~G1q4AbG75lsqYuFrd8XKEUC2oHTn0mf9X0o~MDGTMwAXejI2KM4LV2CJO1G2~P7wnX6VkuXquEj6E9TRZ8hHbyR7pQGI0PV8VMSnwxhVXzlgky8uHrO4MSXkde3F8e1WFUGVBU-ftm-wY75p99a3PAmvOcl-ydICY~0NECbYy0m7FI6y1HuP4cqyhYo2vcFRpEwhliIHQshDy99HddSM3U3ckJY4E--42uQYuRcghdTau0mCIYHmsapRgXTTEl2uxhTg__"
                  alt="Introduction"
                  className="w-full h-full object-cover rounded-lg shadow-xl
                           transform group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Animated overlay effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-900/20 
                              rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000"
                  ></div>
                </div>
              </div>

              {/* Animated decorative elements */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-50 blur-sm
                            animate-[float_4s_ease-in-out_infinite]"
              ></div>
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-amber-300 rounded-full opacity-50 blur-sm
                            animate-[float_4s_ease-in-out_infinite_0.5s]"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
