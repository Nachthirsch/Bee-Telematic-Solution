import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);

  useEffect(() => {
    const filtered = portfolioData.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = [
    "all",
    ...new Set(portfolioData.map((project) => project.category)),
  ];

  return (
    <section id="product" className="min-h-screen bg-gradient-to-r from-amber-50 to-amber-500 py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-10">
            <TypeAnimation
              sequence={[
                'Featured Projects',
                1000,
                'Proyek Unggulan',
                1000,
                'Karya Terbaik',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h1>
          <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
            Jelajahi koleksi solusi inovatif kami untuk mewujudkan ide kreatif Anda
          </p>
        </motion.div>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 backdrop-blur-lg bg-white/40 p-4 rounded-xl border border-amber-200/30">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/70 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 placeholder-amber-400 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-[200px] px-4 py-2 rounded-lg bg-white/70 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 text-base"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl bg-white/80 border border-amber-100 shadow-sm hover:shadow-lg hover:shadow-amber-100/30 transition-all duration-300">
                  <div className="p-6 pb-16">
                    <h3 className="text-lg md:text-xl font-semibold text-amber-900 mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-amber-700 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-medium border border-amber-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 p-6">
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-amber-800 hover:text-amber-900 text-sm font-medium group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const portfolioData = [
  {
    id: 1,
    title: "Aplikasi pembuatan system Parking, KOS Billing, Billiard",
    description: "Aplikasi parkir mengelola parkir otomatis, KOS billing memudahkan pembayaran kost, dan billing billiard menghitung biaya penggunaan meja.",
    category: "system",
    tags: ["Parking System", "Billing", "Automation"],
    link: "#",
  },
  {
    id: 2,
    title: "Sistem Informasi Management Rumah Sakit RS. Ananda Salatiga",
    description: "Sistem Informasi Manajemen RS Ananda Salatiga mengelola pendaftaran pasien, rekam medis, obat, dan keuangan untuk meningkatkan efisiensi layanan rumah sakit.",
    category: "healthcare",
    tags: ["Hospital Management", "Medical Records", "Healthcare"],
    link: "#",
  },
  {
    id: 3,
    title: "Sistem Informasi Managemen Klinik Klinik Afiyah",
    description: "Sistem Informasi Manajemen Klinik Afiyah mengelola pendaftaran pasien, rekam medis, obat, dan pembayaran untuk meningkatkan efisiensi pelayanan klinik.",
    category: "healthcare",
    tags: ["Clinic Management", "Patient Records", "Healthcare"],
    link: "#",
  },
  {
    id: 4,
    title: "Sistem Pemesanan & Kasir Ball Room Krakatau (TMII)",
    description: "Sistem Pemesanan & Kasir di Ball Room Krakatau TMII mengelola pemesanan acara dan transaksi kasir untuk hingga 3.500 tamu, ideal untuk berbagai acara dengan fasilitas modern.",
    category: "booking",
    tags: ["Event Management", "Booking System", "POS"],
    link: "#",
  },
  {
    id: 5,
    title: "Aplikasi Sistem Cash Management & Apk Operasional PT. Armorindo Artha",
    description: "Aplikasi Sistem Cash Management & Apk Operasional mengelola aliran kas dan aktivitas harian organisasi, memantau pendapatan dan pengeluaran.",
    category: "finance",
    tags: ["Cash Management", "Operations", "Finance"],
    link: "#",
  },
  {
    id: 6,
    title: "Aplikasi Point Of Sales",
    description: "Aplikasi Point of Sales (POS) memproses transaksi penjualan dan mengelola inventaris, meningkatkan efisiensi di bisnis seperti restoran dan retail.",
    category: "retail",
    tags: ["POS", "Inventory", "Sales"],
    link: "#",
  },
  {
    id: 7,
    title: "Aplikasi Sistem Cash Management & Apk Operasional PT. Tunas Artha Gardatama",
    description: "Aplikasi Sistem Cash Management & Apk Operasional mengelola aliran kas dan aktivitas harian organisasi.",
    category: "finance",
    tags: ["Cash Management", "Operations", "Finance"],
    link: "#",
  },
  {
    id: 8,
    title: "Aplikasi pembuatan sistem Broker Asuransi & management surat",
    description: "Sistem manajemen broker asuransi dan pengelolaan surat yang komprehensif.",
    category: "insurance",
    tags: ["Insurance", "Document Management", "Broker"],
    link: "#",
  },
  {
    id: 9,
    title: "Sistem Informasi Managemen Klinik UKSW Salatiga",
    description: "Sistem Informasi Manajemen Klinik UKSW mengelola pendaftaran pasien, rekam medis, obat, dan pembayaran.",
    category: "healthcare",
    tags: ["Clinic Management", "Healthcare", "University"],
    link: "#",
  },
  {
    id: 10,
    title: "Aplikasi Sistem Manajemen SDM, Logistik, dan Kehadiran",
    description: "Aplikasi ini mengintegrasikan manajemen SDM, logistik, dan kehadiran untuk meningkatkan efisiensi organisasi.",
    category: "management",
    tags: ["HR", "Logistics", "Attendance"],
    link: "#",
  },
];

export default Portfolio;