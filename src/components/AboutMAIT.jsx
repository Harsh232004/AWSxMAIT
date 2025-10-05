import React from "react";
import { motion } from "framer-motion";

const AboutMAIT = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-[Poppins] flex justify-center px-6 py-16"
    >
      <div className="max-w-5xl bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-14 shadow-2xl">
        <h2 className="text-5xl font-extrabold text-orange-600 mb-8">About MAIT</h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Maharaja Agrasen Institute of Technology (MAIT) was founded in 1999 in Delhi and is affiliated with Guru Gobind Singh Indraprastha University.
          It is known for excellence in engineering and management education, offering UG and PG degree programs preparing students for modern industry challenges.
        </p>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          MAIT has modern infrastructure, strong faculty, and consistently high placement rates.
          The institute focuses on holistic education fostering innovation, leadership, and technical expertise.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
          <li>Wide range of B.Tech and MBA programs</li>
          <li>Strong industry collaborations and research</li>
          <li>Active student community and development initiatives</li>
          <li>Commitment to professional growth and ethical values</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default AboutMAIT;
