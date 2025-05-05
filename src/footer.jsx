import React from "react";
import { Link } from "react-router-dom";
import { about } from "./data/about";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <Link to={about.instagram} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="Instagram"
              className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
          <Link to={about.twitter} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
          <Link to={about.linkedin} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-8 h-8 hover:opacity-80 transition-opacity duration-300 bg-white p-1 rounded-full"
            />
          </Link>
          <Link to={about.github} target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
              alt="GitHub"
              className="w-8 h-8 hover:opacity-80 transition-opacity duration-300 bg-white p-1 rounded-full"
            />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {about.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;