import React from "react";
import anime from "animejs";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

const InfoSection = () => {
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
      <div className="flex flex-col max-w-[1440px] mt-16 py-8 font-poppins mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto ">
          <h1 className="text-2xl md:text-5xl p-3 font-bold mb-8 sm:font-bold sm:relative ">
            <TypeAnimation sequence={["Tertarik dengan Solusi Kami?", 1000, "Hubungi Kami Sekarang!"]} style={{ minHeight: "60px" }} speed={80} />
          </h1>

          {/* Description Paragraphs */}
          <div ref={containerRef} className="w-full max-w-4xl p-3 mx-auto px-4 md:px-10" style={{ opacity: 0 }}>
            <div className="space-y-6 text-lg rounded-lg text-left sm:text-center sm:text-xl">
              <p ref={firstParaRef} className="transform" style={{ opacity: 0, transform: "translateY(20px)" }}>
                Ada pertanyaan tentang produk, ingin tahu lebih dalam tentang layanan kami, atau punya masukan untuk kami? Jangan sungkan!
              </p>
              <p ref={secondParaRef} className="transform" style={{ opacity: 0, transform: "translateY(20px)" }}>
                Tim kami yang ramah dan berpengalaman siap membantu setiap kebutuhan Anda. Mari bicarakan cara terbaik agar kami bisa membantu Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
