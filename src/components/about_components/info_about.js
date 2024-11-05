import React from "react";
import anime from "animejs";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerRef = useRef(null);
  const firstParaRef = useRef(null);
  const secondParaRef = useRef(null);

  useEffect(() => {
    // Memastikan refs sudah terhubung
    if (!containerRef.current || !firstParaRef.current || !secondParaRef.current) return;

    // Timeline untuk mengatur sequence animasi
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });

    // Animasi container
    timeline.add({
      targets: containerRef.current,
      opacity: [0, 1],
      duration: 800,
    });

    // Animasi paragraf pertama
    timeline.add(
      {
        targets: firstParaRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000,
      },
      "-=400"
    );

    // Animasi paragraf kedua
    timeline.add(
      {
        targets: secondParaRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000,
      },
      "-=600"
    );
  }, []); // Empty dependency array ensures animation runs once on mount
  return (
    <section className="bg-gradient-to-r from-amber-50 to-amber-500 min-h-screen py-16">
      <div className="flex flex-col max-w-[1440px] mt-16 font-poppins mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto ">
          <h1 className="text-2xl md:text-5xl p-3 font-bold mb-8 sm:font-bold sm:relative ">
            <TypeAnimation sequence={["Bee Telematic Solutions!", 1000, "Let's get to know us better!"]} style={{ minHeight: "60px" }} speed={80} />
          </h1>

          {/* Description Paragraphs */}
          <div ref={containerRef} className="w-full max-w-4xl p-3 mx-auto px-4 md:px-10" style={{ opacity: 0 }}>
            <div className="space-y-6 text-lg rounded-lg text-left sm:text-center sm:text-xl">
              <p ref={firstParaRef} className="transform" style={{ opacity: 0, transform: "translateY(20px)" }}>
                Selamat datang di{" "}
                <motion.span
                  animate={{
                    color: ["#000000", "#ffe082", "#000000"],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: 2,
                    repeatDelay: 1,
                  }}
                  style={{
                    display: "inline-block",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  PT Bee Telematic Solutions!
                </motion.span>{" "}
                Kami adalah perusahaan yang berkomitmen untuk menghadirkan solusi teknologi informasi inovatif yang mendukung pertumbuhan dan efisiensi bisnis Anda. Dengan pengalaman bertahun-tahun dalam industri IT, kami menawarkan berbagai layanan, termasuk pengembangan perangkat lunak, solusi telematika, dan integrasi sistem yang dirancang untuk memenuhi kebutuhan unik setiap klien.
              </p>
              <p ref={secondParaRef} className="transform" style={{ opacity: 0, transform: "translateY(20px)" }}>
                Tim kami terdiri dari para ahli yang berpengalaman dan bersemangat, siap membantu Anda merancang dan mengimplementasikan solusi yang tidak hanya meningkatkan produktivitas tetapi juga memberikan nilai tambah bagi bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
