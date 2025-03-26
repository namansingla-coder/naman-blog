import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { about } from "./data/about";
function Header({ selected }) {
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
      className={`fixed top-0 w-full z-50 bg-white shadow-md transition-all ${
        isScrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Branding / Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          {about.name}
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className={`hover:text-blue-600 ${selected === "home" ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Home</Link>
          <Link to="/about" className={`hover:text-blue-600 ${selected === "about" ? "text-blue-600 font-semibold" : "text-gray-700"}`}>About</Link>
          <Link to="/projects" className={`hover:text-blue-600 ${selected === "projects" ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Projects</Link>
          <Link to="/work" className={`hover:text-blue-600 ${selected === "work" ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Work</Link>
          <Link to="/research" className={`hover:text-blue-600 ${selected === "research" ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Research</Link>
          <Link to="/contact" className={`hover:text-blue-600 ${selected === "contact" ? "text-blue-600 font-semibold" : "text-gray-700"}`}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col text-lg py-4">
          <Link to="/" className="py-2 px-6 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="py-2 px-6 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/projects" className="py-2 px-6 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/work" className="py-2 px-6 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
          <Link to="/research" className="py-2 px-6 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
          <Link to="/contact" className="py-2 px-6 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Header;