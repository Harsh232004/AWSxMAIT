import React from "react";
import { motion } from "framer-motion";

const AboutAWS = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-[Poppins] flex justify-center px-6 py-16"
    >
      <div className="max-w-5xl bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-14 shadow-2xl">
        <h2 className="text-5xl font-extrabold text-[#232f3e] mb-8">
          About Amazon Web Services (AWS)
        </h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          AWS is the most comprehensive & broadly adopted cloud platform worldwide. Founded in 2006, it offers over 200 fully-featured services globally.
          Its customers include startups, enterprises, non-profits, and governments who leverage AWS for scalable computing, storage, and security services.
        </p>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          AWS supports rapid innovation, enabling businesses to build smarter while reducing infrastructure costs. Its global infrastructure, pay-as-you-go model, and extensive tools empower clients to build apps with high performance and security.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
          <li>Compute, Storage, Database, Machine Learning, and Analytics services</li>
          <li>Scalable, Reliable, Secure Cloud infrastructure</li>
          <li>Extensive global data center footprint and availability zones</li>
          <li>Strong commitment to sustainability and social impact</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default AboutAWS;
