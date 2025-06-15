import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { about } from "./data/about";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaFlask, FaEnvelope } from "react-icons/fa";

const Header = ({ selected }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "about", icon: <FaUser /> },
    { name: "projects", icon: <FaProjectDiagram /> },
    { name: "work", icon: <FaBriefcase /> },
    { name: "research", icon: <FaFlask /> },
    { name: "contact", icon: <FaEnvelope /> }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/80 transition-all ${
        isScrolled ? "py-2 shadow-xl" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-12">
        {/* Branding / Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
          >
            {about.name.charAt(0)}
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
            {about.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                selected === item.name
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
            >
              <Link to={`/${item.name}`} className="flex items-center gap-1.5">
                <span className="text-sm">{item.icon}</span>
                <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
              </Link>
              {selected === item.name && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 mx-3"
                  layoutId="underline"
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
      >
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-800">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 5 }}
              className={`border-b border-gray-100 dark:border-gray-800 ${
                selected === item.name ? "bg-blue-50 dark:bg-blue-900/20" : ""
              }`}
            >
              <Link
                to={`/${item.name}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-6 ${
                  selected === item.name 
                    ? "text-blue-600 dark:text-blue-400 font-medium" 
                    : "text-gray-800 dark:text-gray-300"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;