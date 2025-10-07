import React from "react";
import { motion } from "framer-motion";

const AboutMAIT = () => {
  const galleryImages = [
    "https://maimt.com/wp-content/uploads/2017/10/0PB_2041-360x260.jpg",
    "https://maimt.com/wp-content/uploads/2023/10/0PB_1935-360x260.jpg",
    "https://maimt.com/wp-content/uploads/2024/04/IMG_4034-360x260.jpg",
    "https://maimt.com/wp-content/uploads/2017/10/0PB_2060-360x260.jpg",
    "https://maimt.com/wp-content/uploads/2017/10/0PB_2103-360x260.jpg",
    "https://maimt.com/wp-content/uploads/2023/10/0PB_2072-360x260.jpg",
  ];

  return (
    <div className="font-[Poppins] bg-gradient-to-br from-white to-gray-100 text-gray-800 bg-fixed">
      {/* HERO SECTION */}
     {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="relative w-screen h-[60vh] md:h-[70vh] overflow-hidden">
  {/* Fixed background image */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center brightness-75 bg-fixed"
    style={{
      backgroundImage:
        "url('https://www.admissionmba.in/wp-content/uploads/2019/10/MAIT-Delhi-Campus.jpg.webp')",
    }}
  />

  {/* Overlay content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
  >
    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
      Maharaja Agrasen Institute of Technology
    </h1>
    <p className="text-lg md:text-xl max-w-2xl text-white drop-shadow-md">
      A premier institution shaping innovators, leaders, and technocrats since 1999.
    </p>
  </motion.div>
</section>



      {/* INTRO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6"
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-6 border-b-4 border-orange-400 inline-block">
          About MAIT
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Established in 1999, <strong>Maharaja Agrasen Institute of Technology (MAIT)</strong> is one of the top engineering institutions in Delhi,
          affiliated with <strong>Guru Gobind Singh Indraprastha University (GGSIPU)</strong> and approved by the <strong>AICTE</strong>. 
          MAIT is renowned for its academic excellence, modern infrastructure, and vibrant campus life. With its focus on innovation, ethics, and leadership, 
          MAIT has consistently produced graduates who excel in both corporate and entrepreneurial domains.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
          <li>Founded in 1999 by Maharaja Agrasen Technical Education Society</li>
          <li>Affiliated to GGSIPU, Delhi & approved by AICTE</li>
          <li>Accredited by NBA and NAAC</li>
          <li>Offers B.Tech, MBA, and interdisciplinary programs</li>
          <li>Average placement: ₹8–12 LPA (Top branches)</li>
        </ul>
      </motion.section>

      {/* PROGRAMS SECTION */}
      <section className="bg-orange-50 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-10 text-center">
            Academic Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "B.Tech Programs",
                desc: "CSE, IT, ECE, MAE, EEE, AI & ML, Data Science, and more.",
              },
              {
                title: "MBA",
                desc: "Comprehensive management education blending strategy, innovation, and leadership.",
              },
              {
                title: "Research & Innovation",
                desc: "Active R&D projects in AI, IoT, Robotics, and Renewable Energy.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold text-orange-500 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Campus Highlights
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={src}
                alt={`MAIT campus ${i + 1}`}
                className="w-full h-64 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x300?text=Image+Unavailable")
                }
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <p className="text-white font-semibold text-lg text-center px-2">
                  Campus Life
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PLACEMENTS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">
          Placements & Industry Connect
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto">
          MAIT has a dedicated placement cell that connects students with leading tech companies like
          <strong> Google, Microsoft, Amazon, Deloitte, Infosys, TCS, and Accenture</strong>.
          Alumni are placed across global firms and top Indian startups.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
                    ].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="company"
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default AboutMAIT;
