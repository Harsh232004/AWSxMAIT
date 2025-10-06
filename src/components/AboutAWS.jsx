import React from "react";
import { motion } from "framer-motion";

const AboutAWS = () => {
  // Image gallery
  const awsImages = [
     "https://pngkey.com/png/full/287-2871371_homepage-global-infrastructure-map-aws-global-infrastructure-regions.png",
    // placeholder architecture diagram from AWS architecture library (replace with a real URL)
    "https://cdn.prod.website-files.com/6706802514ffa549d0bf0b8a/675d988bf24feb1382fc761e_CloudFrontAWS.webp",
    // another fallback image (if hosted or replaced)
    "https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2021/09/21/Figure7-deleteimages-932x630.png",
  ];

  // Motion Variants for smoother sequencing
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 font-[Poppins] flex justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl p-10 md:p-16 shadow-2xl space-y-16">

        {/* Hero Section */}
        <motion.div
          variants={fadeInUp}
          custom={0.1}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#232f3e]">
            Amazon Web Services (AWS)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The world’s most comprehensive and broadly adopted cloud platform — powering innovation for millions of customers globally.
          </p>
        </motion.div>

        {/* Image Banner */}
        <motion.div
  variants={scaleIn}
  custom={0.2}
  className="overflow-hidden rounded-2xl shadow-xl"
>
  <div className="relative w-full aspect-[21/9] md:aspect-[34/9]">
    <motion.img
      src="https://media.licdn.com/dms/image/v2/D5616AQF219ESPqFLfA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1700568117350?e=2147483647&v=beta&t=yv3nOftBgzrTEk7-dypFGA5oStHtGMMCN0P1gxQwk9I"
      alt="AWS Cloud Infrastructure"
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ scale: 1.05 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
  </div>
</motion.div>


        {/* Overview Section */}
        <motion.div
          variants={fadeInUp}
          custom={0.3}
          className="space-y-6 text-gray-700"
        >
          <p className="text-lg leading-relaxed">
            <strong>Amazon Web Services (AWS)</strong>, founded in 2006, leads
            the global cloud computing market with over{" "}
            <strong>240 fully featured services</strong> available from data
            centers worldwide. From startups to enterprises, governments, and
            nonprofits — organizations of every size rely on AWS to accelerate
            innovation, enhance security, and reduce IT costs.
          </p>

          <p className="text-lg leading-relaxed">
            With a highly scalable and secure infrastructure, AWS supports a
            broad spectrum of use cases including machine learning, data
            analytics, web hosting, IoT, hybrid cloud, and mobile applications.
          </p>

          <p className="text-lg leading-relaxed">
            AWS also prioritizes sustainability, committing to power operations
            with <strong>100% renewable energy by 2025</strong> while helping
            customers reduce their carbon footprints through efficient cloud
            solutions.
          </p>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          variants={fadeInUp}
          custom={0.4}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {awsImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`AWS Infrastructure ${index + 1}`}
              className="rounded-xl shadow-lg w-full h-56 md:h-64 object-cover"
              variants={scaleIn}
              custom={index * 0.3}
              whileHover={{ scale: 1.05 }}
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div variants={fadeInUp} custom={0.5}>
          <h2 className="text-3xl font-bold text-[#232f3e] mb-6 text-center">
            Why Organizations Choose AWS
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg max-w-3xl mx-auto">
            <li>
              🌐 <strong>Global Reach:</strong> Data centers in multiple regions
              and availability zones ensure performance and resilience.
            </li>
            <li>
              ⚙️ <strong>Comprehensive Services:</strong> From compute and
              storage to AI/ML and IoT, AWS covers every workload.
            </li>
            <li>
              🔒 <strong>Security & Compliance:</strong> Over 300 compliance
              features and top-tier encryption standards.
            </li>
            <li>
              💡 <strong>Innovation at Scale:</strong> Continuous service
              evolution and industry-leading R&D investment.
            </li>
            <li>
              🌱 <strong>Sustainability:</strong> Focused on renewable energy and
              carbon-neutral operations by 2025.
            </li>
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          custom={0.6}
          className="text-center pt-10"
        >
          <motion.a
            href="https://aws.amazon.com/about-aws/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 8px 25px rgba(255, 153, 0, 0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-[#ff9900] hover:bg-[#e68900] rounded-full shadow-lg transition-transform"
          >
            Learn More on AWS Official Site
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutAWS;
