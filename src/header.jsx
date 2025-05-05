import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { about } from "./data/about";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu toggle

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

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 transition-all ${
        isScrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Branding / Logo */}
        <Link to="/" className="text-3xl font-extrabold text-gray-900 dark:text-white transition-all">
          {about.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {["about", "projects", "work", "research", "contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              className={`relative font-medium transition-all ${
                selected === item
                  ? "text-blue-600 font-semibold after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0 after:rounded-full"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
              }`}
            >
              <Link to={`/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-300 text-2xl"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {["about", "projects", "work", "research", "contact"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <Link
              to={`/${item}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-6 text-lg text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;