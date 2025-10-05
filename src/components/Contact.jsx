import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 to-white font-[Poppins] flex justify-center px-6 py-16"
    >
      <div className="max-w-xl bg-white bg-opacity-80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl w-full">
        <h2 className="text-4xl font-extrabold text-[#232f3e] mb-10 text-center">Contact Us</h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
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
    </motion.section>
  );
};

export default Contact;
