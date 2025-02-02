import React, { useEffect, useState } from "react";
import show from "./app";
import { Link } from "react-router-dom";

function Header({ selected }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Remove 'text-red-400' from all links
    const links = document.querySelectorAll("#header a");
    links.forEach(link => link.classList.remove("text-red-400"));

    // Add 'text-red-400' only to the selected link
    if (selected) {
      let element = document.getElementById(selected);
      if (element) {
        element.classList.add("text-red-400");
      }
    }
  }, [selected]); // Runs when 'selected' changes

  return (
    <>
      <div className="flex justify-end mt-7 mr-8 gap-4">
        <div
          id="header"
          className={`space-x-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }  flex md:justify-end md:block overflow-auto max-h-screen`}
        >
          <Link id="home" to="/">Home</Link>
          <Link id="about" to="/about">About</Link>
          <Link id="projects" to="/projects">Projects</Link>
          <Link id="work" to="/work">Work</Link>
          <Link id="blog" to="/research">Research</Link>
          <Link id="contact" to="/contact">Contact</Link>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden block rotate-90"
        >
          <p className="text-3xl">|||</p>
        </button>
      </div>
    </>
  );
}

export default Header;