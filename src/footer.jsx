import React from "react";
import { Link } from "react-router-dom";
import { about } from "./data/about";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: <FaLinkedin />, url: about.linkedin, color: "hover:bg-[#0077b5]", label: "LinkedIn" },
    { icon: <FaGithub />, url: about.github, color: "hover:bg-[#333]", label: "GitHub" },
    { icon: <FaTwitter />, url: about.twitter, color: "hover:bg-[#1DA1F2]", label: "Twitter" },
    { icon: <FaInstagram />, url: about.instagram, color: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]", label: "Instagram" },
    { icon: <FaEnvelope />, url: `mailto:${about.email}`, color: "hover:bg-red-500", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="/" className="inline-block">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {about.name.charAt(0)}
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {about.name}
                </span>
              </motion.div>
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white ${link.color} transition-all duration-300`}
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Made with <FaHeart className="inline text-red-500 mx-1" /> by {about.name}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;