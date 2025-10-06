import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import awsLogo from "../assets/aws-logo.png";
import maitLogo from "../assets/Mait-logo.png";
import inaugurationImg from "../assets/aws-mait-inauguration.jpg";
import hackathonImg from "../assets/aws-partywork-hackathon.webp";

const Home = () => {
  const scaleAnim = useSpring({
    scale: 1,
    from: { scale: 0.9 },
    config: { tension: 300, friction: 25 },
  });
  const buttonControls = useAnimation();

  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-orange-50 font-[Poppins] flex flex-col items-center px-6 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      {/* Logos Section */}
      <animated.div
        style={scaleAnim}
        className="flex items-center gap-8 mt-20 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
        onMouseEnter={() => scaleAnim.start({ scale: 1.05 })}
        onMouseLeave={() => scaleAnim.start({ scale: 1 })}
      >
        <img src={awsLogo} alt="AWS Logo" className="h-16 sm:h-20" />
        <span className="text-7xl font-extrabold text-orange-500 font-mono select-none">×</span>
        <img src={maitLogo} alt="MAIT Logo" className="h-16 sm:h-20" />
      </animated.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
        className="max-w-4xl bg-white/60 backdrop-blur-lg rounded-3xl p-12 mt-16 shadow-2xl text-center border border-white/20"
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-orange-600">AWS × MAIT</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-8">
          Empowering innovation and cloud learning through the AWS Academy Program at{" "}
          <strong>Maharaja Agrasen Institute of Technology</strong>. Learn, build, and grow in the cloud.
        </p>

        <motion.div
          className="mt-12 inline-block"
          onHoverStart={() =>
            buttonControls.start({ scale: 1.1, rotate: 3, backgroundColor: "#f97316" })
          }
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

      {/* ===== Highlights Section ===== */}
      <div className="max-w-6xl w-full mt-28 mb-24">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Latest Highlights ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Facebook Post Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-orange-100 transition-all hover:shadow-2xl"
          >
            <img
              src={inaugurationImg}
              alt="AWS Academy Inauguration"
              className="rounded-2xl shadow-md mb-6 w-full object-cover"
            />
            <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">
              A New Milestone at MABS × MAIT 🎉
            </h3>
            <p className="text-gray-800 leading-relaxed text-justify">
              We are delighted to share the <strong>successful inauguration of the AWS Academy</strong> at{" "}
              <strong>MAIT</strong>, marking a significant step toward fostering cloud computing excellence.
              This collaboration between <strong>MABS</strong> and <strong>AWS Academy</strong> brings
              industry-grade cloud education and hands-on learning opportunities to empower our students
              for global tech careers.
            </p>
            <div className="text-center mt-6">
              <a
                href="https://www.facebook.com/mabsdelhi/posts/-a-new-milestone-at-mabs-mait-we-are-delighted-to-share-the-successful-inaugurat/804475555865890/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-colors"
              >
                View on Facebook
              </a>
            </div>
          </motion.div>

          {/* Instagram Post Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-orange-100 transition-all hover:shadow-2xl flex flex-col justify-between"
          >
            <img
              src={hackathonImg}
              alt="AWS Partywork Hackathon"
              className="rounded-2xl shadow-md mb-6 w-full object-cover"
            />
            <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">
              AWS Partywork Hackathon 🏆
            </h3>
            <p className="text-gray-800 leading-relaxed text-justify">
              Big congratulations to the winners of the <strong>AWS Partywork Hackathon</strong>! Your
              innovation, dedication, and hard work have truly set a new benchmark in creativity and
              cloud-based problem-solving.
            </p>
            <div className="text-center mt-6">
              <a
                href="https://www.instagram.com/p/DIO9QkTIX4r/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-colors"
              >
                View on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Closing / Reference Section ===== */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="max-w-5xl mx-auto mt-24 mb-32 text-center bg-gradient-to-br from-white/70 via-orange-50/60 to-white/70 backdrop-blur-md border border-orange-100 rounded-3xl shadow-xl p-12"
>
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
    Together, We Build the Future ☁️
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
    The <strong>AWS × MAIT</strong> partnership stands as a beacon of innovation — uniting 
    academia and industry to create an environment where ideas evolve into impact. 
    Through <strong>hands-on cloud education, hackathons, and collaborative programs</strong>, 
    we are nurturing a generation of tech leaders ready to shape tomorrow’s digital world.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl mx-auto">
    As we continue this journey with <strong>MABS</strong> and <strong>AWS Academy</strong>, 
    we invite students, educators, and innovators to join us in driving cloud-powered 
    transformation — where knowledge meets opportunity.
  </p>

  <div className="mt-10">
    <a
      href="https://aws.amazon.com/training/awsacademy/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors text-white px-10 py-3 rounded-full font-semibold shadow-md text-lg"
    >
      Learn More About AWS Academy
    </a>
  </div>
</motion.div>


      {/* Footer Wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-100 via-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Home;
