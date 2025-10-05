import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import AboutAWS from "./components/AboutAWS";
import AboutMAIT from "./components/AboutMAIT";
import Contact from "./components/Contact";
import awsLogo from "./assets/aws-logo.png";
import maitLogo from "./assets/Mait-logo.png";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header with logos and nav */}
        <nav className="bg-[#0b0c10] text-white p-4 flex items-center justify-between px-8 shadow">
          {/* Logo section Left */}
          <div className="flex items-center gap-2">
            <img src={awsLogo} alt="AWS" className="h-10 sm:h-12" />
            <span className="text-2xl font-semibold text-orange-400">×</span>
            <img src={maitLogo} alt="MAIT" className="h-10 sm:h-12" />
          </div>
          {/* Nav links Right */}
          <div className="flex space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-semibold px-3 py-2 rounded hover:text-orange-400 ${isActive ? "text-orange-400" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-aws"
              className={({ isActive }) =>
                `font-semibold px-3 py-2 rounded hover:text-orange-400 ${isActive ? "text-orange-400" : ""}`
              }
            >
              About AWS
            </NavLink>
            <NavLink
              to="/about-mait"
              className={({ isActive }) =>
                `font-semibold px-3 py-2 rounded hover:text-orange-400 ${isActive ? "text-orange-400" : ""}`
              }
            >
              About MAIT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-semibold px-3 py-2 rounded hover:text-orange-400 ${isActive ? "text-orange-400" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>

        {/* Routes */}
        <main className="p-6">
          <Routes>
            <Route path="/about-aws" element={<AboutAWS />} />
            <Route path="/about-mait" element={<AboutMAIT />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
