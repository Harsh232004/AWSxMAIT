import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import awsLogo from "../assets/aws-logo.png";
import maitLogo from "../assets/Mait-logo.png";

const Home = () => {
  const scaleAnim = useSpring({ scale: 1, from: { scale: 0.9 }, config: { tension: 300, friction: 25 } });
  const buttonControls = useAnimation();

  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-orange-50 font-[Poppins] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      {/* Logos Section */}
      <animated.div
        style={scaleAnim}
        className="flex items-center gap-8 mt-12 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
        onMouseEnter={() => scaleAnim.start({ scale: 1.05 })}
        onMouseLeave={() => scaleAnim.start({ scale: 1 })}
      >
        <img src={awsLogo} alt="AWS Logo" className="h-16 sm:h-20" />
        <span className="text-7xl font-extrabold text-orange-500 font-mono select-none">×</span>
        <img src={maitLogo} alt="MAIT Logo" className="h-16 sm:h-20" />
      </animated.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60, skewY: 2 }}
        animate={{ opacity: 1, y: 0, skewY: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
        className="max-w-4xl bg-white/60 backdrop-blur-lg rounded-3xl p-12 mt-16 shadow-2xl text-center border border-white/20"
      >
        <motion.h1
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl sm:text-7xl font-extrabold text-gray-900 leading-tight"
        >
          Welcome to <span className="text-orange-600">AWS × MAIT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-8"
        >
          Empowering innovation and cloud learning through the AWS Academy Program at{" "}
          <strong>Maharaja Agrasen Institute of Technology</strong>. Learn, build, and grow in the cloud.
        </motion.p>

        <motion.div 
          className="mt-12 inline-block"
          onHoverStart={() => buttonControls.start({ scale: 1.1, rotate: 3, backgroundColor: "#f97316" })}
          onHoverEnd={() => buttonControls.start({ scale: 1, rotate: 0, backgroundColor: "#ea580c" })}
          animate={buttonControls}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            to="/about-aws"
            className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-12 py-4 rounded-full font-semibold shadow-lg text-lg sm:text-xl"
          >
            Explore AWS Academy
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer Wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-100 via-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Home;
