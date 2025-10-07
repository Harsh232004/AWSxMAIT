import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-white font-[Poppins] flex flex-col items-center px-6 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-[#232f3e] mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have questions about our AWS collaborations,
          MAIT initiatives, or want to partner with us, fill out the form below or reach us directly.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center p-6 bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg gap-4"
          >
            <HiMail className="text-orange-500 text-3xl" />
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-500">contact@awsmait.com</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center p-6 bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg gap-4"
          >
            <HiPhone className="text-orange-500 text-3xl" />
            <div>
              <p className="font-semibold text-gray-700">Phone</p>
              <p className="text-gray-500">+91 12345 67890</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center p-6 bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-lg gap-4"
          >
            <HiLocationMarker className="text-orange-500 text-3xl" />
            <div>
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-gray-500">MAIT, New Delhi, India</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white bg-opacity-80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-extrabold text-[#232f3e] mb-8 text-center">Send a Message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-lg font-semibold">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                placeholder="Your full name"
              />
            </label>

            <label className="block text-gray-700 text-lg font-semibold">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                placeholder="you@example.com"
              />
            </label>

            <label className="block text-gray-700 text-lg font-semibold">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-2 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                placeholder="Your message"
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgb(255 140 0 / 0.6)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-4 rounded-full font-bold shadow-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
